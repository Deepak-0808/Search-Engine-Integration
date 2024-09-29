// Load environment variables from .env file
require('dotenv').config();

// Import necessary libraries, like axios for making HTTP requests
const axios = require('axios');

// Load API keys and endpoints from environment variables
const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
const CUSTOM_SEARCH_ENGINE_ID = process.env.CUSTOM_SEARCH_ENGINE_ID;
const NEWS_API_KEY=process.env.NEWS_API_KEY;
const NEWS_API_ENDPOINT=process.env.NEWS_API_ENDPOINT;
const SEMANTIC_SCHOLAR_API_ENDPOINT=process.env.SEMANTIC_SCHOLAR_API_ENDPOINT;
const SEMANTIC_SCHOLAR_API_KEY=process.env.SEMANTIC_SCHOLAR_API_KEY;

// Fetch YouTube videos based on the search query
const fetchYouTubeVideos = async (query) => {
    try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                part: 'snippet',
                maxResults: 5,
                q: query,
                key: YOUTUBE_API_KEY
            }
        });
        return response.data.items.map((item) => ({
            title: item.snippet.title,
            description: item.snippet.description,
            url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
            type: 'youtube'
        }));
    } catch (error) {
        console.error('Error fetching YouTube videos:', error);
        return [];
    }
};

// Fetch Google results based on the search query
const fetchGoogleResults = async (query) => {
    try {
        const response = await axios.get('https://www.googleapis.com/customsearch/v1', {
            params: {
                q: query,
                cx: CUSTOM_SEARCH_ENGINE_ID,
                key: GOOGLE_API_KEY
            }
        });
        return response.data.items.map((item) => ({
            title: item.title,
            description: item.snippet,
            url: item.link,
            type: 'google'
        }));
    } catch (error) {
        console.error('Error fetching Google results:', error);
        return [];
    }
};

async function fetchBlogResults(query) {
    try {
        const response = await axios.get(NEWS_API_ENDPOINT, {
            params: {
                q: query, // Query parameter to search for
                apiKey: NEWS_API_KEY,
                language: 'en',
                sortBy: 'relevance', // or 'publishedAt'
            }
        });

        if (response.data.articles) {
            return response.data.articles.map(article => ({
                title: article.title,
                description: article.description,
                url: article.url,
                type: 'blog'
            }));
        }
        return [];
    } catch (error) {
        console.error('Error fetching blog data from News API:', error.message);
        return [];
    }
}

// Function to fetch paper results using Semantic Scholar API
async function fetchPaperResults(query) {
    try {
        const response = await axios.get(SEMANTIC_SCHOLAR_API_ENDPOINT, {
            params: {
                query: query, // Search query for papers
                limit: 5      // Number of results to return
            },
            headers: {
                'x-api-key': SEMANTIC_SCHOLAR_API_KEY // Include API key in headers
            }
        });

        // Check if response contains data and map the results
        if (response.data.data) {
            return response.data.data.map(paper => ({
                title: paper.title,
                description: paper.abstract || 'No abstract available',
                url: `https://www.semanticscholar.org/paper/${paper.paperId}`,
                type: 'paper'
            }));
        }
        return [];
    } catch (error) {
        console.error('Error fetching paper data from Semantic Scholar:', error.message);
        return [];
    }
}


// Aggregate search results from various sources
const aggregateSearchResults = async (query) => {
    try {
        // Fetch data from all sources in parallel
        const [youtubeResults, googleResults, blogResults, paperResults] = await Promise.all([
            fetchYouTubeVideos(query),
            fetchGoogleResults(query),
            fetchBlogResults(query),
            fetchPaperResults(query)
        ]);

        // Combine results from all sources
        const allResults = [
            ...youtubeResults,
            ...googleResults,
            ...blogResults,
            ...paperResults
        ];

        // Return combined results
        return allResults;
    } catch (error) {
        console.error('Error aggregating search results:', error);
        return [];
    }
};

// Export the aggregation function
module.exports = { aggregateSearchResults };
