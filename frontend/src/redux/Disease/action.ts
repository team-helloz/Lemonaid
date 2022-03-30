export const ADDDISEASE = "adddisease";
export const DELDISEASE = "deldisease";

export const adddisease = (data: any) => {
  return {
    type: ADDDISEASE,
    payload: data,
  };
};

export const deldisease = (data: any) => {
  return {
    type: DELDISEASE,
    payload: data,
  };
};
