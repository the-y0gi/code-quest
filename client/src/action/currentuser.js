// Action creator to set the current user
export const setcurrentuser = (data) => {
    return {
        // Action type to indicate fetching the current user
        type: "FETCH_CURRENT_USER",
        
        // Payload containing the user data
        payload: data,
    };
};
