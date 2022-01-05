import axios from "axios";
import * as t from "../types";

export const getUsers = () => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/users`
    );
    dispatch({
      type: t.ALL_USERS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: t.ALL_USERS_FAIL,
      payload: error.message,
    });
  }
};
