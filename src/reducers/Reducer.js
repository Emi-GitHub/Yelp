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