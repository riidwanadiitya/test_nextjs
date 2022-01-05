import * as t from "../types";

const initState = {
  error: null,
  posts: [],
};

export const allPostsReducer = (state = initState, action) => {
  switch (action.type) {
    case t.ALL_POSTS_SUCCESS:
      return {
        posts: action.payload,
      };
    case t.ALL_POSTS_FAIL:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};
