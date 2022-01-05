import * as t from "../types";

const initState = {
  error: null,
  detailPost: [],
  dataUser: [],
};

export const detailPostReducer = (state = initState, action) => {
  switch (action.type) {
    case t.GET_POST:
      return {
        detailPost: action.payload,
      };
    case t.DETAIL_POST_FAIL:
      return {
        error: action.payload,
      };
    case t.DATA_USER_POST:
      return {
        dataUser: action.payload,
      };
    default:
      return state;
  }
};
