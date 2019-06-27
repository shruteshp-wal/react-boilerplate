import React, { Component } from 'react';

class Login extends Component {
    handleUsernameChange = (e) => {
        this.props.setUsernameValue(e.target.value);
    }

    handlePasswordChange = (e) => {
        this.props.setPasswordValue(e.target.value);
    }

    handleSubmit = (e) => {
        this.props.submit({
            username: this.props.username.value,
            password: this.props.password.value,
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>
                        username
                        <input 
                            value={this.props.username.value}
                            onChange={this.handleUsernameChange}></input>
                    </label>
                    {
                        this.props.username.showError ? (
                            <div>{this.props.username.error}</div>
                        ) : (null)
                    }
                </div>
                <div>
                    <label>
                        password
                        <input 
                            value={this.props.password.value}
                            onChange={this.handlePasswordChange}></input>
                    </label>
                    {
                        this.props.password.showError ? (
                            <div>{this.props.password.error}</div>
                        ) : (null)
                    }
                </div>
            </form>
        );
    }
}

export default Login;