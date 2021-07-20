import { createStore, combineReducers } from "redux";
import { boardReducer } from "../reducers/boardReducer";

const reducers = combineReducers({
  config: boardReducer,
});

export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
