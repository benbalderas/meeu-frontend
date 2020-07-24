import axios from 'axios';
import base_url from 'constants/route';

axios.defaults.withCredentials = true; // needed to set cookies

const LOADING = 'meeuapp/user/LOADING';
const LOGIN_SUCCESS = 'meeuapp/user/LOGIN_SUCCESS';
const LOGIN_ERROR = 'meeuapp/user/LOGIN_ERROR';
const LOGOUT = 'meeuapp/user/LOGOUT';

const SIGNUP_SUCCESS = 'meeuapp/user/SIGNUP_SUCCESS';
const SIGNUP_ERROR = 'meeuapp/user/SIGNUP_ERROR';

const USER_UPDATE_SUCCESS = 'meeuapp/user/USER_UPDATE_SUCCESS';
const USER_UPDATE_ERROR = 'meeuapp/user/USER_UPDATE_ERROR';

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
    case SIGNUP_SUCCESS:
      return { ...state, status: 'success', data: { ...action.payload } };
    case SIGNUP_ERROR:
      return { status: 'error', error: action.error };
    case USER_UPDATE_SUCCESS:
      return {
        ...state,
        status: 'success',
        data: { ...state.data, ...action.payload },
      };
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

export const signupSuccess = (payload) => ({
  type: SIGNUP_SUCCESS,
  payload,
});

export const signupError = (error) => ({
  type: SIGNUP_ERROR,
  error,
});

export const userUpdateSuccess = (payload) => ({
  type: USER_UPDATE_SUCCESS,
  payload,
});

export const userUpdateError = (error) => ({
  type: USER_UPDATE_ERROR,
  error,
});

// pass data to thunk in first parameter
export const login = (credentials) => (dispatch) => {
  dispatch(loadingUser());

  return axios
    .post(`${base_url}/user/login`, credentials)
    .then((res) => {
      const user = res.data.user;

      localStorage.setItem('user', JSON.stringify(user));
      dispatch(loginSuccess(user));
    })
    .catch((res) => {
      dispatch(loginError(res.response.data));
    });
};

export const signup = (data, push) => (dispatch) => {
  dispatch(loadingUser());

  return axios
    .post(`${base_url}/user/signup`, data)
    .then((res) => {
      dispatch(signupSuccess(res.data.result));

      push('/login');
    })
    .catch((res) => {
      dispatch(signupError(res.response.data));
    });
};

export const userUpdate = (data, _id, setNotif) => (dispatch) => {
  dispatch(loadingUser());

  return axios
    .post(`${base_url}/user/${_id}`, data)
    .then((res) => {
      dispatch(userUpdateSuccess(res.data.result));
      setNotif(true);
    })
    .catch((err) => {
      dispatch(userUpdateError(err));
    });
};
