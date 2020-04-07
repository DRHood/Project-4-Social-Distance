import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class EventList extends Component {
    state = {
        error: '',
        events: []
    }

    componentDidMount(){
        this.fetchEvents();
    }

    fetchEvents = async () => {
        try {
            const res = await axios.get('/api/v1/events');
            this.setState({events: res.data});
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
                <h1>All Events</h1>
                {this.state.events.map(event => (
                    <div key={event.id}>
                        <Link to={`/event/${event.id}`} >{event.name}</Link>
                    </div>
                ))}
            </div>
        );
    }
}

export default EventList;