import React, { Component, useRef } from 'react';
import {Link, Redirect} from 'react-router-dom';
import emailjs from '@emailjs/browser';

export default class ForgotPassword extends Component {
    state = {
        email: '',
        code: '1929',
        redirect: false,
        authError: false,
        isLoading: false,
    };
    handleEmailChange = event => {
        this.setState({ email: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.setState({isLoading: true});

        emailjs.sendForm(
            "service_gt2az8u",
            "template_nzek8bk",
            event.target,
            "IHJdQPSzrvqMnH4mn",
        ).then(
            result => this.setState({redirect: true}),
            error => console.log(error.text)
        )
    };

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to="/confirmation" />
        }
    };

    render() {
        const isLoading = this.state.isLoading;
        return (
            <div className="container">
                <div className="card card-login mx-auto mt-5">
                    <div className="card-header">Forgot Password</div>
                    <div className="card-body">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <div className="form-label-group">
                                    <input type="text" id="inputEmail" className="form-control" placeholder="email" name="email" onChange={this.handleEmailChange} required/>
                                    <label htmlFor="inputEmail"></label>
                                </div>
                            </div>
                            <div className="form-group" style={{display: "none"}}>
                                <div className="form-label-group">
                                    <input type="text" id="inputCode" className="form-control" placeholder="code" name="code" value={this.state.code} onChange={this.handleEmailChange}/>
                                </div>
                            </div>
                            <br></br>
                            <div className="form-group" style={{margin: '0px 10%'}}>
                                <button className="btn btn-primary btn-block" type="submit" disabled={this.state.isLoading ? true : false}>Send
                                    {isLoading ? (
                                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    ) : (
                                        <span></span>
                                    )}
                                </button>
                            </div>
                        </form>
                        <div className="text-center">
                            <Link className="d-block small mt-3" to={''} style={{color: 'white'}}>Login Your Account</Link>
                        </div>
                    </div>
                </div>
                {this.renderRedirect()}
            </div>
        );
    }
}


