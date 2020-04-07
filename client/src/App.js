import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import EventList from './components/EventList';
import Event from './components/Event';
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
                            <div><Link to="/">Current Events</Link></div>
                        </div>
                    </div>

                    <Switch>
                      <Route exact path="/" component={EventList}/>
                      <Route exact path="/User/:id" component={Event}/>
                    </Switch>
                </div>
            </Router>
        );
    }
};
