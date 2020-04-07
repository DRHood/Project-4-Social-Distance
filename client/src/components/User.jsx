import React, {Component} from 'react';
import axios from 'axios';
import Group from './Group';

export default class User extends Component {

    state = {
        error: '',
        user: {},
        my_groups: [],
        my_events: [],
    }

    componentDidMount() {
        const userId = this.props.match.params.id;
        this.fetchUser(userId)
    }

    fetchUser = async (userId) => {
        try {
            const userResponse = await axios.get(`/api/v1/users/${userId}`)
            this.setState({
                user: userResponse.data,
                user: userResponse.data.my_groups,
                user: userResponse.data.my_events,
            })
        }
        catch (error) {
            console.log(error)
            this.setState({error: error.message})
        }
    }
<link rel="stylesheet" href=""/>
    render() {
        let T = this.state.user;
        return (
            <div>
                <h1>{T.user_name}</h1>
                <img src="{T.photo_url}" alt=""/>
                <p>{T.bio}</p>
                <p><Link to="{T.email}" href="">contact: {T.email}</Link></p>
                {this.state.my_groups}group => (
                    <div key={group.id}>
                        <h4>group.group_name</h4>
                    </div>
                )
                {this.state.my_events}event => (
                    <div key={event.id}>
                        <h4>event.event_name</h4>
                        <p><small>event.event_date</small></p>
                    </div>
                )
            </div>
        );
    }
};