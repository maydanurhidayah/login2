import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import TitleComponent from "./title";
import logoUser from '../assets/img/user-login.png';

export default class Login extends Component {
    state = {
        username: '',
        password: '',
        redirect: false,
        authError: false,
        isLoading: false,
        location: {},
    };

    handleUsernameChange = event => {
        this.setState({username: event.target.value});
    };
    handlePwdChange = event => {
        this.setState({password: event.target.value});
    };

    handleSubmit = event => {
        event.preventDefault();
        this.setState({isLoading: true});
        const username = this.state.username;
        const password = this.state.password;

        var username_register = localStorage.getItem('username_register');
        var password_register = localStorage.getItem('password_register');
        
        if (username == username_register && password == password_register) {
            localStorage.setItem('token', '73rjhd8377aHS77sj023kshjd');
            this.setState({redirect: true, isLoading: false});
            localStorage.setItem('isLoggedIn', true);
        } else {
            alert("Please input a valid username & password")
            this.setState({redirect: false, isLoading: false});
        }
    };

    componentDidMount() {
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/dashboard'/>
        }
    };

    render() {
        const isLoading = this.state.isLoading;
        return (
            <div className="container">
                <TitleComponent title="React Login "></TitleComponent>
                <div className="card card-login mx-auto mt-5">
                    <div className="card-header">Login</div>
                    <div className="card-body">
                        <div style={{textAlign: 'center'}}>
                            <img src={logoUser} style={{height:110}}/>
                        </div> <br></br>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <div className="form-label-group">
                                    <input className={"form-control " + (this.state.authError ? 'is-invalid' : '')} id="inputUsername" placeholder="Username" type="text" name="username" onChange={this.handleUsernameChange} autoFocus required/>
                                    <label htmlFor="inputUsername"></label>
                                    <div className="invalid-feedback">
                                        Please provide a valid Username.
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-label-group">
                                    <input type="text" className={"form-control " + (this.state.authError ? 'is-invalid' : '')} id="inputPassword" placeholder="******" name="password" onChange={this.handlePwdChange} required/>
                                    <label htmlFor="inputPassword"></label>
                                    <div className="invalid-feedback">
                                        Please provide a valid Password.
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox" value="remember-me"/> Remember Me
                                    </label>
                                </div>
                            </div>
                            <div className="form-group" style={{margin: '0px 10%'}}>
                                <button className="btn btn-primary btn-block button-login" type="submit" disabled={this.state.isLoading ? true : false}>Login
                                    {isLoading ? (
                                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    ) : (
                                        <span></span>
                                    )}
                                </button>
                            </div>
                        </form>
                        <div className="text-center">
                            <Link className="d-block small mt-3" to={'register'} style={{color: 'white'}}>Register an Account</Link>
                            <Link className="d-block small mt-3" to={'forgotpassword'} style={{color: 'white'}}>Forgot Password?</Link>
                        </div>
                    </div>
                </div>
                {this.renderRedirect()}
            </div>
        );
    }
}


