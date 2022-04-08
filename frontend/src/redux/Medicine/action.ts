export const ADDCOLOR = "addcolor";
export const ADDFORMULATION = "addformulation";
export const ADDLINE = "addline";
export const ADDCHAR = "addchar";

export const addcolor = (data: any) => {
  return {
    type: ADDCOLOR,
    payload: data,
  };
};

export const addformulation = (data: any) => {
  return {
    type: ADDFORMULATION,
    payload: data,
  };
};

export const addline = (data: any) => {
  return {
    type: ADDLINE,
    payload: data,
  };
};

export const addchar = (data: any) => {
  return {
    type: ADDCHAR,
    payload: data,
  };
};
