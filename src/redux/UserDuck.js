import axios from 'axios';
axios.defaults.withCredentials = true; // needed to set cookies

const LOADING = 'meeuapp/user/LOADING';
const LOGIN_SUCCESS = 'meeuapp/user/LOGIN_SUCCESS';
const LOGIN_ERROR = 'meeuapp/user/LOGIN_ERROR';
const LOGOUT = 'meeuapp/user/LOGOUT';

const initialState = {
  data: JSON.parse(localStorage.getItem('user')),
  status: '',
  error: undefined,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return { ...state, status: 'pending' };
    case LOGIN_SUCCESS:
      return { status: 'success', data: { ...action.payload } };
    case LOGIN_ERROR:
      return { status: 'error', error: action.error };
    case LOGOUT:
      return { ...state, data: localStorage.clear() };
    default:
      return state;
  }
}

export const loadingUser = () => ({
  type: LOADING,
});

export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const loginError = (error) => ({
  type: LOGIN_ERROR,
  error,
});

export const logout = () => ({
  type: LOGOUT,
});

// pass data to thunk in firs parameter
export const login = (credentials) => (dispatch) => {
  dispatch(loadingUser());

  return axios
    .post('http://localhost:3000/api/login', credentials)
    .then((res) => {
      const user = res.data.user;

      localStorage.setItem('user', JSON.stringify(user));
      dispatch(loginSuccess(user));
    })
    .catch((res) => {
      dispatch(loginError(res.response.data));
    });
};
