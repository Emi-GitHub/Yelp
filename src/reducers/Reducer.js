export const term = (state = '', action) => {
    switch(action.type) {
        case 'SET_TERM': return action.payload;
        default: return state;
    }
};
export const businesses = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_API': return action.payload;
        default: return state;
    }
};
export const openYelp = (state = false, action) => {
    switch(action.type) {
        case 'SET_OPEN_YELP': return action.payload;
        default: return state;
    }
};
export const goHome = (state = false, action) => {
    switch(action.type) {
        case 'SET_GO_HOME': return action.payload;
        default: return state;
    }
};