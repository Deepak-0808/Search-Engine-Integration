# InfoPulse

InfoPulse is a powerful search aggregation application designed to fetch and display results from various content sources like YouTube, Google, Blogs, and Academic Papers. It integrates multiple APIs to gather data and allows users to filter results by content type, delivering a unified search experience.

## Project Overview

InfoPulse combines content from multiple platforms (YouTube, Google, Blogs, Academic Papers) into a single, streamlined interface. Users can search for videos, articles, blog posts, and research papers and then filter the results based on their preferences. A ranking system is implemented to display the most relevant results at the top based on views, likes, and relevance.

## Technologies Used

### Frontend:
- **React.js** (with hooks like `useState`)
- **Axios** (for API calls)
- **CSS** (responsive design)

### Backend:
- **Node.js**
- **Express.js** (for building APIs)
- **Semantic Scholar API** (for fetching academic papers)
- **Google Custom Search API** (for Google and blog search results)
- **YouTube Data API** (for YouTube videos)
- **dotenv** (for environment variables)

### Miscellaneous:
- **Git** (for version control)

## Features
- Search across multiple content platforms.
- Filter results by content type (YouTube, Google, Blogs, Academic Papers).
- Responsive and clean UI for better user experience.
- Ranking system to display content based on views, likes, and relevance.
- Semantic Scholar API integration for academic paper search.
- Google and YouTube API integration for broader content search.

## Approach

### Search Aggregation:
The app fetches search results from multiple APIs in parallel. Each API returns content related to the search query. This content is then combined and displayed on the frontend, with the ability to filter by content type.

### Ranking System:
Each content source has its own ranking mechanism. For YouTube, results are ranked based on likes and views. Google results prioritize page relevance, and academic papers are sorted based on citation count and relevance.

### Advanced Filtering:
Users can filter search results based on the content type—whether they want to see videos, blogs, papers, or a mix of everything.

## Challenges Faced
- **API Rate Limiting:** Handling API rate limits from Google and YouTube required careful planning and limiting the number of requests to avoid hitting the threshold.
- **Data Integration:** Integrating data from different sources (e.g., YouTube, Google, Semantic Scholar) was challenging due to varying data structures and formats.
- **Ranking Mechanism:** Implementing a consistent ranking system across different content types required creating custom logic to normalize rankings based on metrics like views, relevance, and likes.

## How to Start the Project
### Clone the Repository:

Run the following commands in your terminal:
bash
Copy code
git clone <repository-url>
cd InfoPulse

### Set Up the Backend:

#### Create a .env file in the backend directory and add your API keys:
- YOUTUBE_API_KEY=
- GOOGLE_API_KEY=
- CUSTOM_SEARCH_ENGINE_ID=
- NEWS_API_KEY=
- NEWS_API_ENDPOINT=https://newsapi.org/v2/everything
- SEMANTIC_SCHOLAR_API_KEY=
- SEMANTIC_SCHOLAR_API_ENDPOINT=https://api.semanticscholar.org/graph/v1/paper/search

Navigate to the backend directory and install dependencies:
cd backend
npm install
npm start

## Set Up the Frontend:

### Open a new terminal window, navigate to the frontend directory, and install dependencies:
cd frontend
npm install
npm start
Access the Application:

Open your web browser and go to http://localhost:3000 (or the specified port) to use the application.

## Project Demo

Here’s a screenshot of the application in action:
![Screenshot 2024-09-29 232304](https://github.com/user-attachments/assets/e2aeb199-89b5-4c8a-80ff-1bc9e673e1d4)

![Screenshot 2024-09-29 232342](https://github.com/user-attachments/assets/c7b95393-78e1-406a-a28d-ecce54d48a1f)

![Screenshot 2024-09-29 232358](https://github.com/user-attachments/assets/6a7fedcd-8a35-49cb-87d5-3ec89396608f)

![Screenshot 2024-09-29 232409](https://github.com/user-attachments/assets/285cf742-b02b-4d3e-95c2-b2f29c76fd68)

![Screenshot 2024-09-29 232417](https://github.com/user-attachments/assets/a9d783ed-bd74-40a5-bf3e-aee21c7fccd9)

![Screenshot 2024-09-29 232426](https://github.com/user-attachments/assets/8d1c9ed4-c22c-486e-ac45-6a8c6d84b323)






