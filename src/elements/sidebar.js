import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Sidebar extends Component {
    render() {
        return (
            <div id="wrapper">
                <ul className="sidebar navbar-nav">
                    <li className="nav-item active">
                        <Link to={'/dashboard'} className="nav-link"><i className="fas fa-fw fa-tachometer-alt"></i>
                            <span>&nbsp;Dashboard</span></Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to={''}  id="pagesDropdown" role="button"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-fw fa-folder"></i>
                            <span>&nbsp;Pages</span>
                        </Link>
                        <div className="dropdown-menu" aria-labelledby="pagesDropdown">
                            <h6 className="dropdown-header">Login Screens:</h6>
                            <div className="dropdown-divider"></div>
                            <h6 className="dropdown-header">Other Pages:</h6>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}
