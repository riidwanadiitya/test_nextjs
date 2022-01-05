import axios from "axios";
import * as t from "../types";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts`
    );
    dispatch({
      type: t.ALL_POSTS_SUCCESS,
      payload: data.slice(0, 20),
    });
  } catch (error) {
    dispatch({
      type: t.ALL_POSTS_FAIL,
      payload: error.message,
    });
  }
};


