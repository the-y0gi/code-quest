import React from 'react';
import Question from './Question';

function Questionlist({ questionlist }) {
    // Map through the questionlist and render each Question component
    return (
        <>
            {questionlist.map((question) => (
                <Question question={question} key={question._id} />
            ))}
        </>
    );
}

export default Questionlist;
