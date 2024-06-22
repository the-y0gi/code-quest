// Importing necessary modules and functions
import * as api from "../api"; // Import all exports from '../api' as api

// Action creator for asking a question
export const askquestion = (questiondata, navigate) => async (dispatch) => {
    try {
        // Make an API call to post the question with provided question data
        const { data } = await api.postquestion(questiondata);
        
        // Dispatch an action of type "POST_QUESTION" with the received data
        dispatch({ type: "POST_QUESTION", payload: data });
        
        // Fetch all questions by dispatching fetchallquestion
        dispatch(fetchallquestion());
        
        // Navigate to the home page after successfully posting the question
        navigate("/");
    } catch (error) {
        // Log any errors that occur during the posting process
        console.log(error);
    }
};

// Action creator for fetching all questions
export const fetchallquestion = () => async (dispatch) => {
    try {
        // Make an API call to get all questions
        const { data } = await api.getallquestions();
        
        // Dispatch an action of type "FETCH_ALL_QUESTIONS" with the received data
        dispatch({ type: "FETCH_ALL_QUESTIONS", payload: data });
    } catch (error) {
        // Log any errors that occur during the fetching process
        console.log(error);
    }
};

// Action creator for deleting a question
export const deletequestion = (id, navigate) => async (dispatch) => {
    try {
        // Make an API call to delete the question with the provided id
        await api.deletequestion(id);
        
        // Fetch all questions by dispatching fetchallquestion
        dispatch(fetchallquestion());
        
        // Navigate to the home page after successfully deleting the question
        navigate("/");
    } catch (error) {
        // Log any errors that occur during the deleting process
        console.log(error);
    }
};

// Action creator for voting on a question
export const votequestion = (id, value) => async (dispatch) => {
    try {
        // Make an API call to vote on the question with the provided id and value
        await api.votequestion(id, value);
        
        // Fetch all questions by dispatching fetchallquestion
        dispatch(fetchallquestion());
    } catch (error) {
        // Log any errors that occur during the voting process
        console.log(error);
    }
};

// Action creator for posting an answer
export const postanswer = (answerdata) => async (dispatch) => {
    try {
        // Destructure answer data
        const { id, noofanswers, answerbody, useranswered } = answerdata;
        
        // Make an API call to post the answer with the provided data
        const { data } = await api.postanswer(id, noofanswers, answerbody, useranswered);
        
        // Dispatch an action of type "POST_ANSWER" with the received data
        dispatch({ type: "POST_ANSWER", payload: data });
        
        // Fetch all questions by dispatching fetchallquestion
        dispatch(fetchallquestion());
    } catch (error) {
        // Log any errors that occur during the posting process
        console.log(error);
    }
};

// Action creator for deleting an answer
export const deleteanswer = (id, answerid, noofanswers) => async (dispatch) => {
    try {
        // Make an API call to delete the answer with the provided id, answer id, and number of answers
        await api.deleteanswer(id, answerid, noofanswers);
        
        // Fetch all questions by dispatching fetchallquestion
        dispatch(fetchallquestion());
    } catch (error) {
        // Log any errors that occur during the deleting process
        console.log(error);
    }
};
