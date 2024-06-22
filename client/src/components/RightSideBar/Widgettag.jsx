import React from 'react';

function Widgettag() {
    // Array of tags to display
    const tags = [
        "c",
        "css",
        "express",
        "firebase",
        "html",
        "java",
        "javascript",
        "mern",
        "mongodb",
        "mysql",
        "next.js",
        "node.js",
        "php",
        "python",
        "reactjs",
    ];

    return (
        <div className="widget-tags">
            {/* Watched tags section */}
            <h4>Watched tags</h4>
            <div className="widget-tags-div">
                {/* Display each tag */}
                {tags.map((tag) => (
                    <p key={tag}>{tag}</p>
                ))}
            </div>
        </div>
    );
}

export default Widgettag;
