import { combineReducers } from "redux";
import main from "./reducers/main";
import { allPostsReducer } from "./reducers/postsReducer";
import { allUsersReducer } from "./reducers/usersReducer";
import { detailPostReducer } from "./reducers/postsReducerDetail";

const rootReducer = combineReducers({
  main: main,
  allPost: allPostsReducer,
  allUser: allUsersReducer,
  detailPost:detailPostReducer
})

export default rootReducer;