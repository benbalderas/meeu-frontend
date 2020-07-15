import axios from 'axios';
import { normalizeData } from 'helpers/formatters';

const LOADING = 'meeuapp/exhibits/LOADING';
const GET_EXHIBITS_SUCCESS = 'meeuapp/exhibits/GET_EXHIBITS_SUCCESS';
const GET_EXHIBITS_ERROR = 'meeuapp/exhibits/GET_EXHIBITS_ERROR';

const CREATE_EXHIBIT_SUCCESS = 'meeuapp/exhibits/CREATE_EXHIBIT_SUCCESS';
const CREATE_EXHIBIT_ERROR = 'meeuapp/exhibits/CREATE_EXHIBIT_ERROR';

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
    case CREATE_EXHIBIT_SUCCESS:
      return {
        ...state,
        status: 'success',
        items: { ...state.items, [action.payload._id]: action.payload },
      };
    case CREATE_EXHIBIT_ERROR:
      return { status: 'error', error: action.error };
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

export const createExhibitSuccess = (payload) => ({
  type: CREATE_EXHIBIT_SUCCESS,
  payload,
});

export const createExhibitError = (error) => ({
  type: CREATE_EXHIBIT_ERROR,
  error,
});

export const fetchExhibits = (museumId) => (dispatch) => {
  dispatch(loadingExhibits());
  const url = museumId
    ? `http://localhost:3000/api/exhibits?museum=${museumId}`
    : 'http://localhost:3000/api/exhibits';

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

export const createExhibit = (data, push) => (dispatch) => {
  dispatch(loadingExhibits());

  return axios
    .post('http://localhost:3000/api/exhibits', data)
    .then((res) => {
      dispatch(createExhibitSuccess(res.data.result));
      push('/exhibits');
    })
    .catch((err) => {
      dispatch(createExhibitError(err));
    });
};

// Headers config
// {
    // headers: {
    //   'Content-Type': 'multipart/form-data',
    // },
// }
