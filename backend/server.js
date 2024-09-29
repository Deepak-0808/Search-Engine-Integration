const express = require('express');
const app = express();
const cors = require('cors');
const searchRoutes = require('./routes/search');

app.use(cors());
app.use(express.json());

// Main route for search
app.use('/api/search', searchRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
