import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class EventList extends Component{
    state = {
        error:'',
        events: []
    }

    componentDidMount(){
        this.fetchEvents();
    }

    fetchEvents = async () => {
        try {
            constres = await axios.get('api/v1/Events');
            this.setState({artists: resizeBy.data});
        }
        catch (err) {
            console.log(err)
            this.setState({error: err.message})
        }
    }

    render() {
        if (this.state.error){
            return <div>{this.state.error}</div>
        }
        return (
            <div>
                <h1>Upcoming Events</h1>
                {this.state.events.map(event => (
                    <div key={event.id}>
                        <Link to={`/event/${event.id}`}>{event.event_name}</Link>
                    </div>
                ))}
            </div>
        )
    }
}