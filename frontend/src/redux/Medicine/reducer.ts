import { ADDCOLOR, ADDFORMULATION, ADDLINE, ADDCHAR } from "./action";

const medicineStore = {
  color: "",
  formulation: "",
  line: "",
  char: "",
};

const medicineReducer = (state = medicineStore, action: any) => {
  switch (action.type) {
    case ADDCOLOR:
      return { ...state, color: action.payload };
    case ADDFORMULATION:
      return { ...state, formulation: action.payload };
    case ADDLINE:
      return { ...state, line: action.payload };
    case ADDCHAR:
      return { ...state, char: action.payload };
    default:
      return state;
  }
};

export default medicineReducer;
