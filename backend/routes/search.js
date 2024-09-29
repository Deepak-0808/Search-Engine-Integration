const express = require('express');
const router = express.Router();
const { aggregateSearchResults } = require('../utils/searchAggregation'); // Adjust the path as needed

// Define the route for aggregated search
router.get('/all', async (req, res) => {
    const query = req.query.q || '';

    if (!query) {
        return res.status(400).json({ message: 'Query parameter is required' });
    }

    try {
        const results = await aggregateSearchResults(query);
        res.json(results);
    } catch (error) {
        console.error('Error fetching aggregated data:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
