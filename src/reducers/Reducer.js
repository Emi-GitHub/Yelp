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
export const header = (state = false, action) => {
    switch(action.type) {
        case 'SET_HEADER': return action.payload;
        default: return state;
    }
};
export const currentPage = (state = 1, action) => {
    switch(action.type) {
        case 'SET_CURRENT_PAGE': return action.payload;
        default: return state;
    }
};
export const postPerPage = (state = 5, action) => {
    switch(action.type) {
        case 'SET_POST_PER_PAGE': return action.payload;
        default: return state;
    }
};
export const termNear = (state = '', action) => {
    switch(action.type) {
        case 'SET_TERM_NEAR': return action.payload;
        default: return state;
    }
};
export const counter = (state = 0, action) => {
    switch(action.type) {
        case 'SET_COUNTER': return state+5;
        default: return state;
    }
};
export const loader = (state = 'ui active centered inline loader', action) => {
    switch (action.type) {
        case 'SET_LOADER': return 'nothing';
        default: return state;
    }
  };
  export const businessesLength = (state = 0, action) => {
    switch(action.type) {
        case 'SET_LENGTH': return action.payload;
        default: return state;
    }
};