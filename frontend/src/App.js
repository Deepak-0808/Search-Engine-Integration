import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import ResultCard from './components/ResultCard';

function App() {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);
    const [filter, setFilter] = useState('all');

    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/search/all`, {
                params: { q: searchTerm }
            });
            setResults(response.data);
        } catch (error) {
            console.error('Error fetching data', error);
        }
    };

    // Filter results based on selected filter type
    const filteredResults = results.filter(result => filter === 'all' || result.type === filter);

    return (
        <div className="app-container">
            <h1 className="app-title">InfoPulse Search</h1>
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search for videos, articles, papers..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="search-button" onClick={handleSearch}>
                    Search
                </button>
                <div className="filter-container">
                    <button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>All</button>
                    <button className={filter === 'youtube' ? 'active' : ''} onClick={() => setFilter('youtube')}>YouTube Video</button>
                    <button className={filter === 'google' ? 'active' : ''} onClick={() => setFilter('google')}>Google</button>
                    <button className={filter === 'blog' ? 'active' : ''} onClick={() => setFilter('blog')}>Blog</button>
                    <button className={filter === 'paper' ? 'active' : ''} onClick={() => setFilter('paper')}>Academic Papers</button>
                </div>
            </div>
            <div className="results-container">
                {filteredResults.map((result, index) => (
                    <ResultCard key={index} result={result} />
                ))}
            </div>
        </div>
    );
}

export default App;
