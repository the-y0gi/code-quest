// Importing necessary modules and functions
import * as api from '../api'; // Import all exports from '../api' as api
import { setcurrentuser } from './currentuser.js'; // Import setcurrentuser from './currentuser.js'
import { fetchallusers } from './user.js'; // Import fetchallusers from './user.js'

// Action creator for user signup
export const signup = (authdata, navigate) => async (dispatch) => {
    try {
        // Make an API call to signup the user with provided authdata
        const { data } = await api.signup(authdata);
        
        // Dispatch an action of type "AUTH" with the received data
        dispatch({ type: "AUTH", data });
        
        // Set the current user by dispatching setcurrentuser with the parsed profile data from local storage
        dispatch(setcurrentuser(JSON.parse(localStorage.getItem("Profile"))));
        
        // Fetch all users by dispatching fetchallusers
        dispatch(fetchallusers());
        
        // Navigate to the home page after successful signup
        navigate("/");
    } catch (error) {
        // Log any errors that occur during the signup process
        console.log(error);
    }
};

// Action creator for user login
export const login = (authdata, navigate) => async (dispatch) => {
    try {
        // Make an API call to login the user with provided authdata
        const { data } = await api.login(authdata);
        
        // Dispatch an action of type "AUTH" with the received data
        dispatch({ type: "AUTH", data });
        
        // Set the current user by dispatching setcurrentuser with the parsed profile data from local storage
        dispatch(setcurrentuser(JSON.parse(localStorage.getItem("Profile"))));
        
        // Navigate to the home page after successful login
        navigate("/");
    } catch (error) {
        // Log any errors that occur during the login process
        console.log(error);
    }
};
