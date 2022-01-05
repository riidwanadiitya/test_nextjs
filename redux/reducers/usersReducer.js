import * as t from "../types";

const initState={
    users: [],
    error: null,
}

export const allUsersReducer=(state=initState,action)=>{
    switch (action.type) {
        case t.ALL_USERS_SUCCESS:
            return {
                users: action.payload
            }
        case t.ALL_USERS_FAIL:
            return {
                error: action.payload
            }        
        default:
            return state;
    }
}