import { connect } from 'react-redux';
import Login from '../components/login';
import { createNamespacer } from '../utils/reducers';
import * as authAPI from '../api/authentication';

const loginNamespacer = createNamespacer('LOGIN');
const sessionNamespacer = createNamespacer('SESSION');

const mapStateToProps = (state) => {
    return {
        username: state.login.username,
        password: state.login.password,
        loading: state.login.loading,
    }
}

function delay(duration=2000) {
    return new Promise(resolve=>setTimeout(resolve, duration))
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUsernameValue: async (value) => {
            dispatch({
                type: loginNamespacer('SET_USERNAME_VALUE'),
                payload: {
                    value
                }
            })
        },
        setPasswordValue: (value) => {
            dispatch({
                type: loginNamespacer('SET_PASSWORD_VALUE'),
                payload: {
                    value
                }
            })
        },
        submit: async (data) => {
            try {
                await delay();
                let response = {
                    token: 'abcd',
                    role: 'user',
                }

                localStorage.setItem('token', response.token);
                localStorage.setItem('role', response.role);

                dispatch({
                    type: sessionNamespacer('SET_LOGGED_IN'),
                    payload: {
                        value: true,
                    }
                })
            } catch (error) {
                
            }
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Login);
