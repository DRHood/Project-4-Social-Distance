import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import UserList from './components/UserList';
import User from './components/User';
import Navbar from './components/Navbar';
import './App.css';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Navbar/>
                    <div>
                        <h1>Social Distance</h1>
                        <div>
                            <div><Link to="/">All Users</Link></div>
                        </div>
                    </div>

                    <Switch>
                      <Route exact path="/" component={UserList}/>
                      <Route exact path="/User/:id" component={User}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
