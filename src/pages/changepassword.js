import React, { Component, useRef } from 'react';
import {Link, Redirect} from 'react-router-dom';
import validator from 'validator'

export default class ChangePassword extends Component {
    state = {
        password: '',
        redirect: false,
        authError: false,
        isLoading: false,
    };
    handlePasswordChange = event => {
        this.setState({ password: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.setState({isLoading: true});

        const password = this.state.password;

        if (validator.isStrongPassword(password, {
            minLength: 8, minLowercase: 1,
            minUppercase: 1, minNumbers: 1, minSymbols: 1
        })) {
            localStorage.setItem('password_register', password);
            
            this.setState({isLoading: false});
            this.setState({redirect: true, authError: true});
        } else {
            alert('The password must consist of a combination of uppercase and lowercase letters, numbers, symbols and at least 8 characters')
            this.setState({isLoading: false});
        }
    };

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to="/" />
        }
    };

    render() {
        const isLoading = this.state.isLoading;
        return (
            <div className="container">
                <div className="card card-login mx-auto mt-5">
                    <div className="card-header">Change Password</div>
                    <div className="card-body">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <div className="form-label-group">
                                    <input type="text" className="form-control" id="inputPassword" placeholder="New Password"  name="password" onChange={this.handlePasswordChange} required/>
                                    <label htmlFor="inputPassword"></label>
                                </div>
                            </div>
                            <br></br>
                            <div className="form-group" style={{margin: '0px 10%'}}>
                                <button className="btn btn-primary btn-block" type="submit" disabled={this.state.isLoading ? true : false}>Save
                                    {isLoading ? (
                                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    ) : (
                                        <span></span>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                {this.renderRedirect()}
            </div>
        );
    }
}


