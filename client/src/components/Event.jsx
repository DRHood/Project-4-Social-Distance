import React, {Component} from 'react';
import axios from 'axios';

export default class Event extends Component {

    state = {
            error: '',
            event: {},
    }

    componentDidMount() {
        const eventId = this.props.match.params.id;
        this.fetchEvent(eventId)
    }

    fetchEvent = async (eventId) => {
        try {
            const eventResponse = await axios.get(`/api/v1/events/${eventId}`)
            this.setState({
                event: eventResponse.data,
            })
        }
        catch (error) {
            console.log(error)
            this.setState({error: error.message})
        }
    }

    render() {
        let T = this.state.event;
        return (
            <div>
                <h1>{T.event_name}</h1>
                <p><small>{T.event_date} at {T.event_time}</small></p>
                <p>{T.event_description}</p>
                <p>{T.attending} attending</p>
                )
            </div>
        );
    }
};
