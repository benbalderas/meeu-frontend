import axios from 'axios';
import { normalizeData } from 'helpers/formatters';

const LOADING = 'meeuapp/museums/LOADING';
const GET_MUSEUMS_SUCCESS = 'meeuapp/museums/GET_MUSEUMS_SUCCESS';
const GET_MUSEUMS_ERROR = 'meeuapp/museums/GET_MUSEUMS_ERROR';

const GET_SINGLE_MUSEUM_SUCCESS = 'meeuapp/museums/GET_SINGLE_MUSEUM_SUCCESS';

const intialState = {
  items: { _id: '' },
  status: '',
  error: undefined,
};

export default function reducer(state = intialState, action) {
  switch (action.type) {
    case LOADING:
      return { ...state, status: 'pending' };
    case GET_MUSEUMS_SUCCESS:
      return { ...state, status: 'success', items: { ...action.payload } };
    case GET_MUSEUMS_ERROR:
      return { ...state, status: 'error', items: action.error };
    case GET_SINGLE_MUSEUM_SUCCESS:
      return { ...state, status: 'success', items: { ...action.payload } };
    default:
      return state;
  }
}

export const loadingMuseums = () => ({
  type: LOADING,
});

export const getMuseumsSuccess = (payload) => ({
  type: GET_MUSEUMS_SUCCESS,
  payload,
});

export const getMuseumsError = (error) => ({
  type: GET_MUSEUMS_ERROR,
  error,
});

export const getSingleMuseumSuccess = (payload) => ({
  type: GET_SINGLE_MUSEUM_SUCCESS,
  payload,
});

// Thunk
export const fetchMuseums = (adminId) => (dispatch) => {
  dispatch(loadingMuseums());
  const url = adminId
    ? `http://localhost:3000/api/museums?admin=${adminId}`
    : 'http://localhost:3000/api/museums';

  return axios
    .get(url)
    .then((res) => {
      const items = normalizeData(res.data.result);

      dispatch(getMuseumsSuccess(items));
    })
    .catch((err) => {
      dispatch(getMuseumsError(err));
    });
};

export const fetchSingleMuseum = (id) => (dispatch) => {
  dispatch(loadingMuseums());

  return axios
    .get(`http://localhost:3000/api/museums/${id}`)
    .then((res) => {
      dispatch(getSingleMuseumSuccess(res.data.result));
    })
    .catch((err) => {
      dispatch(getMuseumsError(err));
    });
};
