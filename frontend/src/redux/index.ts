import { combineReducers } from "redux";
import diseaseReducer from "./Disease/reducer";

const rootReducer = combineReducers({
  diseaseReducer,
});

export default rootReducer;
