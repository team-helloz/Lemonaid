import { ADDDISEASE, DELDISEASE } from "./action";

const diseaseStore = {
  diseaseList: [],
};

const diseaseReducer = (state = diseaseStore, action: any) => {
  switch (action.type) {
    case ADDDISEASE:
      return { diseaseList: action.payload };
    case DELDISEASE:
      const newList = state.diseaseList.filter(
        (disease: any) => disease !== action.payload
      );
      return {
        diseaseList: newList,
      };
    default:
      return state;
  }
};

export default diseaseReducer;
