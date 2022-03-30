import { combineReducers } from "redux";
import diseaseReducer from "./Disease/reducer";
import medicineReducer from "./Medicine/reducer";

const rootReducer = combineReducers({
  diseaseReducer,
  medicineReducer,
});

export default rootReducer;
