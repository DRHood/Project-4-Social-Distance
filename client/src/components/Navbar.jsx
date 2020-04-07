import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <h1>Soc_Dist</h1>
                <div>
                    <div><Link to="/">Home</Link></div>
                    
                </div>
            </div>
        )
    }
}