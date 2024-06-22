import React from 'react';
import './HomeMainBar.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Questionlist from './QuestionList';

function Homemainbar() {
  const user = useSelector((state) => state.currentuserreducer); // Select current user from Redux store
  const location = useLocation(); // Get the current location object
  const navigate = useNavigate(); // Get the navigation function
  const questionlist = useSelector((state) => state.questionreducer); // Select question list from Redux store

  // Function to check if user is authenticated before asking a question
  const checkauth = () => {
    if (user === null) {
      alert("Login or signup to ask a question");
      navigate("/Auth"); // Navigate to the authentication page if user is not logged in
    } else {
      navigate("/Askquestion"); // Navigate to the Ask question page if user is logged in
    }
  };

  return (
    <div className="main-bar">
      <div className="main-bar-header">
        {/* Conditional rendering based on current location */}
        {location.pathname === "/" ? (
          <h1>Top Questions</h1>
        ) : (
          <h1>All Questions</h1>
        )}
        {/* Button to ask a question, calls checkauth function on click */}
        <button className="ask-btn" onClick={checkauth}>Ask Question</button>
      </div>
      <div>
        {/* Conditional rendering based on question list data */}
        {questionlist.data === null ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <p>{questionlist.data.length} questions</p>
            <Questionlist questionlist={questionlist.data} /> {/* Render Questionlist component with question data */}
          </>
        )}
      </div>
    </div>
  );
}

export default Homemainbar;