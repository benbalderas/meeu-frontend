import axios from 'axios';
import base_url from 'constants/route';
import { normalizeData } from 'helpers/formatters';

const LOADING = 'meeuapp/artworks/LOADING';
const GET_ARTWORKS_SUCCESS = 'meeuapp/artworks/GET_ARTWORKS_SUCCESS';
const GET_ARTWORKS_ERROR = 'meeuapp/artworks/GET_ARTWORKS_ERROR';

const GET_SINGLE_ARTWORK_SUCCESS =
  'meeuapp/artworks/GET_SINGLE_ARTWORK_SUCCESS';

const CREATE_ARTWORK_SUCCESS = 'meeuapp/artworks/CREATE_ARTWORK_SUCCESS';
const CREATE_ARTWORK_ERROR = 'meeuapp/artworks/CREATE_ARTWORK_ERROR';

const intialState = {
  items: {},
  status: '',
  error: undefined,
};

export default function reducer(state = intialState, action) {
  switch (action.type) {
    case LOADING:
      return { ...state, status: 'pending' };
    case GET_ARTWORKS_SUCCESS:
      return { ...state, status: 'success', items: { ...action.payload } };
    case GET_ARTWORKS_ERROR:
      return { status: 'error', error: action.error };
    case CREATE_ARTWORK_SUCCESS:
      return {
        ...state,
        status: 'success',
        items: { ...state.items, [action.payload._id]: action.payload },
      };
    case GET_SINGLE_ARTWORK_SUCCESS:
      return { ...state, status: 'success', items: { ...action.payload } };
    case CREATE_ARTWORK_ERROR:
      return { status: 'error', error: action.error };
    default:
      return state;
  }
}

export const loadingArtworks = () => ({
  type: LOADING,
});

export const getArtworksSuccess = (payload) => ({
  type: GET_ARTWORKS_SUCCESS,
  payload,
});

export const getArtworksError = (error) => ({
  type: GET_ARTWORKS_ERROR,
  error,
});

export const createArtworkSuccess = (payload) => ({
  type: CREATE_ARTWORK_SUCCESS,
  payload,
});

export const createArtworkError = (error) => ({
  type: CREATE_ARTWORK_ERROR,
  error,
});

export const getSingleArtworkSuccess = (payload) => ({
  type: GET_SINGLE_ARTWORK_SUCCESS,
  payload,
});

// Thunk
export const fetchArtworks = (exhibitId) => (dispatch) => {
  dispatch(loadingArtworks());

  const url = exhibitId
    ? `${base_url}/artworks?exhibit=${exhibitId}`
    : `${base_url}/artworks`;

  return axios
    .get(url)
    .then((res) => {
      const items = normalizeData(res.data.result);

      dispatch(getArtworksSuccess(items));
    })
    .catch((err) => {
      dispatch(getArtworksError(err));
    });
};

export const createArtwork = (data, push) => (dispatch) => {
  dispatch(loadingArtworks());

  return axios
    .post(`${base_url}/artworks`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((res) => {
      dispatch(createArtworkSuccess(res.data.result));
      push('/artworks');
    })
    .catch((err) => {
      dispatch(createArtworkError(err));
    });
};

export const fetchSingleArtwork = (id) => (dispatch) => {
  dispatch(loadingArtworks());

  return axios
    .get(`${base_url}/artworks/${id}`)
    .then((res) => {
      dispatch(getSingleArtworkSuccess(res.data.result));
    })
    .catch((err) => {
      dispatch(getArtworksError(err));
    });
};
