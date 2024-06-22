// Importing necessary modules and functions
import * as api from "../api"; // Import all exports from '../api' as api

// Action creator for fetching all users
export const fetchallusers = () => async (dispatch) => {
    try {
        // Make an API call to get all users
        const { data } = await api.getallusers();
        
        // Dispatch an action of type "FETCH_USERS" with the received data
        dispatch({ type: "FETCH_USERS", payload: data });
    } catch (error) {
        // Log any errors that occur during the fetching process
        console.log(error);
    }
};

// Action creator for updating a user profile
export const updateprofile = (id, updatedata) => async (dispatch) => {
    try {
        // Make an API call to update the profile with the provided id and update data
        const { data } = await api.updateprofile(id, updatedata);
        
        // Dispatch an action of type "UPDATE_CURRENT_USER" with the received data
        dispatch({ type: "UPDATE_CURRENT_USER", payload: data });
    } catch (error) {
        // Log any errors that occur during the updating process
        console.log(error);
    }
};
