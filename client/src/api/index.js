// Import axios for making HTTP requests
import axios from "axios";

// Create an axios instance with a base URL
const API = axios.create({
    baseURL: "http://localhost:5000" // Base URL for the API
});

// Add a request interceptor to include the Authorization header
API.interceptors.request.use((req) => {
    // Check if the "Profile" exists in localStorage and add Authorization header
    const profile = JSON.parse(localStorage.getItem("Profile"));
    if (profile && profile.token) {
        req.headers.Authorization = `Bearer ${profile.token}`; // Add Bearer token to Authorization header
    }
    return req; // Return the modified request
});

// User authentication API calls
export const login = (authdata) => API.post("/user/login", authdata); // API call for user login
export const signup = (authdata) => API.post("/user/signup", authdata); // API call for user signup
export const getallusers = () => API.get("/user/getallusers"); // API call for getting all users
export const updateprofile = (id, updatedata) => API.patch(`/user/update/${id}`, updatedata); // API call for updating user profile

// Question-related API calls
export const postquestion = (questiondata) => API.post("/questions/Ask", questiondata); // API call for posting a question
export const getallquestions = () => API.get("/questions/get"); // API call for getting all questions
export const deletequestion = (id) => API.delete(`/questions/delete/${id}`); // API call for deleting a question
export const votequestion = (id, value) => API.patch(`/questions/vote/${id}`, { value }); // API call for voting on a question

// Answer-related API calls
export const postanswer = (id, noofanswers, answerbody, useranswered) => API.patch(`/answer/post/${id}`, { noofanswers, answerbody, useranswered }); // API call for posting an answer
export const deleteanswer = (id, answerid, noofanswers) => API.patch(`/answer/delete/${id}`, { answerid, noofanswers }); // API call for deleting an answer

// Export the API instance
export default API;