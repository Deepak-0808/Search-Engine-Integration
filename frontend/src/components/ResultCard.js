import React from 'react';
import './ResultCard.css';

const ResultCard = ({ result }) => {
    const title = result.title || result.snippet?.title || 'No title available';
    const description = result.description || result.snippet?.description || 'No description available';
    const url = result.url || (result.link && result.link) || (result.id?.videoId && `https://www.youtube.com/watch?v=${result.id.videoId}`);

    // If essential fields are missing, don't render the card
    if (!title || !url) {
        return null;
    }

    const getLinkText = () => {
        switch (result.type) {
            case 'youtube':
                return 'Watch Video';
            case 'google':
                return 'Read More';
            case 'blog':
                return 'Read Blog';
            case 'paper':
                return 'View Paper';
            default:
                return 'Visit Link';
        }
    };

    return (
        <div className="result-card">
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={url} target="_blank" rel="noopener noreferrer">
                {getLinkText()}
            </a>
        </div>
    );
};

export default ResultCard;
