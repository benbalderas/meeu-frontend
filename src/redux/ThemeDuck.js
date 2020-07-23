const SWITCH_THEME = 'meeuapp/theme/SWITCH_THEME';
const GET_THEME = 'meeuapp/theme/GET_THEME';

const intialState = {
  mode: localStorage.getItem('theme') || 'dark',
};

export default function reducer(state = intialState, action) {
  switch (action.type) {
    case SWITCH_THEME:
      return { mode: localStorage.getItem('theme') };
    case GET_THEME:
      return { ...state };
    default:
      return state;
  }
}

export const switchThemeSuccess = () => ({
  type: SWITCH_THEME,
});

export const fetchThemeSuccess = () => ({
  type: GET_THEME,
});

export const switchTheme = () => (dispatch) => {
  let newMode = '';

  if (localStorage.getItem('theme')) {
    if (localStorage.getItem('theme') === 'dark') {
      newMode = 'light';
    } else if (localStorage.getItem('theme') === 'light') {
      newMode = 'dark';
    }
  } else {
    newMode = 'light';
  }

  localStorage.setItem('theme', newMode);
  dispatch(switchThemeSuccess());
};

export const fetchTheme = () => (dispatch) => {
  dispatch(fetchThemeSuccess());
};
