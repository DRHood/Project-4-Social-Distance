import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import EventList from './components/EventList';
import Event from './components/Event';
import GroupList from './components/GroupList';
import Group from './components/Group';
import UserList from './components/UserList';
import User from './components/User';
// import Navbar from './components/Navbar';
import './App.css';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    {/* <Navbar/> */}
                    <div>
                        <h1>Social Distance</h1>
                        <div>
                            <div><Link to="/event">enter</Link></div>
                        </div>
                    </div>

                    <Switch>
                        <Route exact path="/user" component={UserList}/>
                        <Route exact path="/user/:id" component={User}/>
                        <Route exact path="/group" component={GroupList}/>
                        <Route exact path="/group/:id" component={Group}/>
                        <Route exact path="/event" component={EventList}/>
                        <Route exact path="/event/:id" component={Event}/>
                    </Switch>
                </div>
            </Router>
        );
    }
};
