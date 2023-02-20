import React, { Component } from 'react';
import Header from "../elements/header";
import Sidebar from "../elements/sidebar";
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';

export default class Index extends Component {
    state = {
        employees: [],
        toDashboard: false,
        isLoading: false
    };

    constructor(props) {
        super(props);
        this.url = 'https://gowtham-rest-api-crud.herokuapp.com/employees';
        this.token = localStorage.getItem('token');
    }

    componentDidMount() {
        axios.get(this.url , { params: { token: this.token}})
            .then(response => {
                const employees = response.data.data.employees;
                this.setState({ employees });
            })
            .catch(error => {
                this.setState({ toDashboard: true });
                console.log(error);
            });
    }

    render() {
        if (this.state.toDashboard === true) {
            return <Redirect to='/' />
        }
        return (
            <div>
                <Header/>
                <div id="wrapper">
                    <Sidebar/>
                </div>
            </div>
        );
    }
}
