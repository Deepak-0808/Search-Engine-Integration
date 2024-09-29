const { aggregateSearchResults } = require('../utils/searchAggregation');

const getSearchResults = async (req, res) => {
    const query = req.query.q || '';
    try {
        const results = await aggregateSearchResults(query);
        res.json(results);
    } catch (error) {
        console.error('Error fetching data', error);
        res.status(500).json({ error: 'Failed to fetch search results' });
    }
};

module.exports = { getSearchResults };
