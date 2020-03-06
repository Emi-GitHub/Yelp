import axios from 'axios';

export const setTerm = value => {
    return {
        type: 'SET_TERM',
        payload: value
    }
}
export const fetchApi = term => async dispatch => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const API_KEY = 'dpRZhioY7R-dUWqyHQDXRaONZuQQ9GxLBWgzdTL0mLupwtz1kKoYfSTT_s9KiHXhblCsvAjUfNfAnxuSz8GmJQaJpVDBPc7c93dhKa_nMEAvvykHxh_FueVgrdhgXnYx';
    const URL = 'https://api.yelp.com/v3/businesses/search';
    const response = await axios.get(proxyurl + URL,{   
        params: {
            'term': term,
            'limit': 10,
            'radius': 10000,
            'offset': 50,
            'location': 'San Diego'
        },
        headers: { "Authorization": `Bearer ${API_KEY}`} 
    });
    dispatch({
      type: 'FETCH_API',
      payload: response.data.businesses,
    });
  };