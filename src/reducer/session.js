import { createReducer, createNamespacer } from "../utils/reducers";

const initialState = {
    isLoggedIn: false,
}

const namespacer = createNamespacer('SESSION');

const handlers = {
    [namespacer('SET_LOGGED_IN')]: (state, action) => {
        return {
            ...state,
            isLoggedIn: action.payload.value,
        }
    },
}

const sessionReducer = createReducer(initialState, handlers, ['SESSION']);

export default sessionReducer;
