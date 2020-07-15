import axios from 'axios';
import { normalizeData } from 'helpers/formatters';

const LOADING = 'meeuapp/exhibits/LOADING';
const GET_EXHIBITS_SUCCESS = 'meeuapp/exhibits/GET_EXHIBITS_SUCCESS';
const GET_EXHIBITS_ERROR = 'meeuapp/exhibits/GET_EXHIBITS_ERROR';

const intialState = {
  items: {},
  status: '',
  error: undefined,
};

export default function reducer(state = intialState, action) {
  switch (action.type) {
    case LOADING:
      return { ...state, status: 'pending' };
    case GET_EXHIBITS_SUCCESS:
      return { ...state, status: 'success', items: { ...action.payload } };
    case GET_EXHIBITS_ERROR:
      return { ...state, status: 'error', items: action.error };
    default:
      return state;
  }
}

export const loadingExhibits = () => ({
  type: LOADING,
});

export const getExhibitsSuccess = (payload) => ({
  type: GET_EXHIBITS_SUCCESS,
  payload,
});

export const getExhibitsError = (error) => ({
  type: GET_EXHIBITS_ERROR,
  error,
});

export const fetchExhibits = (museumId) => (dispatch) => {
  dispatch(loadingExhibits());
  const url = museumId ? `http://localhost:3000/exhibits?museum=${museumId}` : 'http://localhost:3000/exhibits'

  return axios
    .get(url)
    .then((res) => {
      const items = normalizeData(res.data.result);

      dispatch(getExhibitsSuccess(items));
    })
    .catch((err) => {
      dispatch(getExhibitsError(err));
    });
};

// create new thunk that receives query params to get a list of exhibits in a museum
