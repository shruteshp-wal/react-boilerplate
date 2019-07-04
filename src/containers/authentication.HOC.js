import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';

const AuthenticationHOC = (WrappedComponent, reverseMode=false) => {
    class WrapperComponent extends Component {
        render() {
            if(!reverseMode){
                // Use for protected components
                if(this.props.isLoggedIn){
                    return <WrappedComponent/>
                } else {
                    return <Redirect to="/login"/>
                }
            } else {
                // Use for guest only components
                if(!this.props.isLoggedIn){
                    return <WrappedComponent/>
                } else {
                    return <Redirect to="/"/>
                }
            }
        }
    }

    const mstp = (state) => {
        return {
            isLoggedIn: state.session.isLoggedIn
        }
    }

    const mdtp = (dispatch) => {
        return {}
    }

    return connect(mstp, mdtp)(WrapperComponent);
}

export default AuthenticationHOC;