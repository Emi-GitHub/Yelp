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
export const lat = (state = 32.715736, action) => {
    switch(action.type) {
        case 'SET_LAT': return action.payload;
        default: return state;
    }
};
export const lng = (state = -117.161087, action) => {
    switch(action.type) {
        case 'SET_LNG': return action.payload;
        default: return state;
    }
};