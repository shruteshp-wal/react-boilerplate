import { connect } from 'react-redux';
import Login from '../components/login';
import { createNamespacer } from '../utils/reducers';
import * as authAPI from '../api/authentication';

const loginNamespacer = createNamespacer('LOGIN')

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
            await delay();
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
            dispatch({
                type: loginNamespacer('SET_LOADING'),
                payload: {
                    value: true,
                }
            })
            try {
                await authAPI.login(data);
            } catch (error) {
                
            }
            dispatch({
                type: loginNamespacer('SET_LOADING'),
                payload: {
                    value: false,
                }
            })
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Login);
