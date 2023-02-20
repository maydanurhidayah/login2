import React, { Component, useRef } from 'react';
import {Link, Redirect} from 'react-router-dom';

export default class Confirmation extends Component {
    state = {
        code: '',
        redirect: false,
        authError: false,
        isLoading: false,
    };
    handleCodeChange = event => {
        this.setState({ code: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.setState({isLoading: true});

        if (this.state.code == '1929') {
            this.setState({redirect: true});
            this.setState({isLoading: false});
        } else {
            alert('Wrong code!')
            this.setState({isLoading: false});
        }
    };

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to="/changepassword" />
        }
    };

    render() {
        const isLoading = this.state.isLoading;
        return (
            <div className="container">
                <div className="card card-login mx-auto mt-5">
                    <div className="card-header">Confirmation Code <br></br> (Check your email to get confirmation code)</div>
                    <div className="card-body">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <div className="form-label-group">
                                    <input type="text" id="inputCode" className="form-control" placeholder="code" name="code" onChange={this.handleCodeChange} required/>
                                    <label htmlFor="inputCode"></label>
                                </div>
                            </div>
                            <br></br>
                            <div className="form-group" style={{margin: '0px 10%'}}>
                                <button className="btn btn-primary btn-block" type="submit" disabled={this.state.isLoading ? true : false}>Confirm
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


