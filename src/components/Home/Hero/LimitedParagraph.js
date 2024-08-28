import React, { useState } from 'react';

import './Hero.css'

const LimitedParagraph = ({ text, limit }) => {
    const [showFullText, setShowFullText] = useState(false);

    const toggleText = () => {
        setShowFullText(!showFullText);
    };

    return (
        <div className='container'>
            {showFullText ? (
                <p className='hero-paragraph px-16'>{text}</p>
            ) : (
                <p className='hero-paragraph px-16'>
                    {text.slice(0, limit)}
                    {text.length > limit && '...'}
                    <button onClick={toggleText} className='btnpara'>
                        {showFullText ? 'Read Less' : 'Learn More..'}
                    </button>
                </p>
            )}
        </div>
    );
};

export default LimitedParagraph;
