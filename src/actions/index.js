import axios from 'axios';

export const fetchApi = (term, termNear) => async dispatch => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const API_KEY = 'dpRZhioY7R-dUWqyHQDXRaONZuQQ9GxLBWgzdTL0mLupwtz1kKoYfSTT_s9KiHXhblCsvAjUfNfAnxuSz8GmJQaJpVDBPc7c93dhKa_nMEAvvykHxh_FueVgrdhgXnYx';
    const URL = 'https://api.yelp.com/v3/businesses/search';
    const response = await axios.get(proxyurl + URL,{   
        params: {
            'term': term,
            'limit': 50,
            'radius': 10000,
            'offset': 50,
            'location': termNear
        },
        headers: { "Authorization": `Bearer ${API_KEY}`} 
    });
    dispatch({
        type: 'FETCH_API',
        payload: response.data.businesses,
    });
    dispatch({
        type: 'SET_LAT',
        payload: response.data.region.center.latitude
    });
    dispatch({
        type: 'SET_LNG',
        payload: response.data.region.center.longitude
    })
    dispatch({
        type: 'SET_CURRENT_PAGE',
        payload: 1
    })
};
export const setTerm = value => {
    return {
        type: 'SET_TERM',
        payload: value
    }
}
export const setTermNear = value => {
    return {
        type: 'SET_TERM_NEAR',
        payload: value
    }
}
export const setOpenYelp = value => {
    return {
        type: 'SET_OPEN_YELP',
        payload: value
    }
}
export const setHeader = value => {
    return {
        type: 'SET_HEADER',
        payload: value
    }
}
export const setGoHome = value => {
    return {
        type: 'SET_GO_HOME',
        payload: value
    }
}
export const setCurrentPage = value => {
    return {
        type: 'SET_CURRENT_PAGE',
        payload: value
    }
}
export const setPostPerPage = value => {
    return {
        type: 'SET_POST_PER_PAGE',
        payload: value
    }
}
export const setCounter = () => {
    return {
        type: 'SET_COUNTER',
    }
}