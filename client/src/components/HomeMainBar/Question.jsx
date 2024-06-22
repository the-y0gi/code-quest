import React from 'react';
import { Link } from 'react-router-dom';
import moment from "moment";

const Question = ({ question }) => {
    return (
        <div className="display-question-container">
            {/* Votes and answers section */}
            <div className="display-votes-ans">
                <p>{question.upvote.length - question.downvote.length}</p> {/* Calculated votes */}
                <p>votes</p>
            </div>
            <div className="display-votes-ans">
                <p>{question.noofanswers}</p> {/* Number of answers */}
                <p>answers</p>
            </div>
            {/* Question details section */}
            <div className="display-question-details">
                {/* Link to the question detail page */}
                <Link to={`/Question/${question._id}`} className='question-title-link'>
                    {/* Display question title, truncated if too long */}
                    {question.questiontitle.length > (window.innerWidth <= 400 ? 70 : 90)
                        ? question.questiontitle.substring(
                            0,
                            window.innerWidth <= 400 ? 70 : 90
                        ) + "..."
                        : question.questiontitle
                    }
                </Link>
                {/* Tags and time information */}
                <div className="display-tags-time">
                    <div className="display-tags">
                        {/* Display question tags */}
                        {question.questiontags.map((tag, index) => (
                            <p key={index}> {tag}</p>
                        ))}
                    </div>
                    {/* Display time when the question was asked */}
                    <p className="display-time">
                        asked {moment(question.askedon).fromNow()} by {question.userposted}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Question;
