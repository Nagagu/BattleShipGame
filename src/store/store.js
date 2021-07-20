import { createStore, combineReducers } from "redux";
import { tableroReducer } from "../reducers/tableroReducer";

const reducers = combineReducers({
  config: tableroReducer,
});

export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
