import axios from "axios";

const LOADING = "meeuapp/musuems/LOADING";
const GET_MUSEUMS_SUCCESS = "meeuapp/museums/GET_MUSEUMS_SUCCESS";
const GET_MUSEUMS_ERROR = "meeuapp/museums/GET_MUSEUMS_ERROR";

const intialState = {
  items: {},
  status: "",
  error: undefined,
};

export default function reducer(state = intialState, action) {
  switch (action) {
    case LOADING:
      return { ...state, status: "pending" };
    case GET_MUSEUMS_SUCCESS:
      return { ...state, status: "success", items: action.payload };
    case GET_MUSEUMS_ERROR:
      return { ...state, status: "error", items: action.error };
    default:
      return state;
  }
}

export const loadingProducts = () => ({
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

// Thunk
export const fetchMuseums = () => (dispatch) => {
  dispatch(loadingProducts());
  return axios
    .get("http://localhost:3000/museums")
    .then((res) => {
      dispatch(getMuseumsSuccess(res.data.result));
    })
    .catch((err) => {
      dispatch(getMuseumsError(err));
    });
};
