import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Index from "./pages/index";
import Register from "./pages/register";
import ForgotPassword from "./pages/forgotpassword";
import Confirmation from "./pages/confirmation";
import ChangePassword from "./pages/changepassword";
import NotFound from "./pages/notfound";

class App extends Component {

    render() {
        return (
            <div className="App">
                <Router>
                    <Switch>
                        <Route exact path='/' component={Login} />
                        <Route path='/dashboard' component={Dashboard} />
                        <Route path='/index' component={Index}/>
                        <Route path='/register' component={Register} />
                        <Route path='/forgotpassword' component={ForgotPassword} />
                        <Route path='/confirmation' component={Confirmation} />
                        <Route path='/changepassword' component={ChangePassword} />
                        <Route path='*' component={NotFound} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
