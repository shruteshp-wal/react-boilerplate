import { createNamespacer, createReducer } from '../utils/reducers';

const initialState = {
    username: {
        value: '',
        error: '',
        showError: false,
    },
    password: {
        value: '',
        error: '',
        showError: false,
    },
    loading: false,
}

const loginNamespacer = createNamespacer('LOGIN');

const handlers = {
    [loginNamespacer('SET_LOADING')]: (state, action) => {
        return {
            ...state,
            loading: action.payload.value,
        }
    },
    [loginNamespacer('SET_USERNAME_VALUE')]: (state, action) => {
        return {
            ...state,
            username: {
                ...state.username,
                value: action.payload.value
            }
        }
    },
    [loginNamespacer('SET_USERNAME_ERROR')]: (state, action) => {
        return {
            ...state,
            username: {
                ...state.username,
                error: action.payload.value
            }
        }
    },
    [loginNamespacer('SET_USERNAME_SHOW_ERROR')]: (state, action) => {
        return {
            ...state,
            username: {
                ...state.username,
                showError: action.payload.value
            }
        }
    },
    [loginNamespacer('SET_PASSWORD_VALUE')]:  (state, action) => {
        return {
            ...state,
            password: {
                ...state.password,
                value: action.payload.value
            }
        }
    },
    [loginNamespacer('SET_PASSWORD_ERROR')]: (state, action) => {
        return {
            ...state,
            password: {
                ...state.password,
                error: action.payload.value
            }
        }
    },
    [loginNamespacer('SET_PASSWORD_SHOW_ERROR')]: (state, action) => {
        return {
            ...state,
            password: {
                ...state.password,
                showError: action.payload.value
            }
        }
    }

}

const loginReducer = createReducer(initialState, handlers, ['LOGIN'])

// const loginReducer = (state = initialState, action) => {
//     switch (action.type) {

//         case `SET_PASSWORD_ERROR`:
//             return {
//                 ...state,
//                 password: {
//                     ...state.password,
//                     error: action.payload.value
//                 }
//             }
//         case `SET_PASSWORD_SHOW_ERROR`:
//             return {
//                 ...state,
//                 password: {
//                     ...state.password,
//                     showError: action.payload.value
//                 }
//             }
//         default:
//             return state
//     }
// }



export default loginReducer;