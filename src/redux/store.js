import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import museums from "redux/MuseumsDuck";

export const rootReducer = combineReducers({
  museums,
});

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPONSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
