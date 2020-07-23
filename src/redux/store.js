import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import museums from 'redux/MuseumsDuck';
import artworks from 'redux/ArtworksDuck';
import exhibits from 'redux/ExhibitsDuck';
import user from 'redux/UserDuck';
import theme from 'redux/ThemeDuck';

export const rootReducer = combineReducers({
  museums,
  artworks,
  exhibits,
  user,
  theme,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
