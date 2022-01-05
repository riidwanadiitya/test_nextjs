import axios from "axios";
import * as t from "../types";

export const getDetailPost = (id) => async (dispatch) => {
    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      dispatch({
        type: t.DETAIL_POST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: t.DETAIL_POST_FAIL,
        payload: error.message,
      });
    }
  };

  export const getPost = (data) => async (dispatch) => {
      dispatch({
        type: t.GET_POST,
        payload: data,
      });
   
  };