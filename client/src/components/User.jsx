import React, {Component} from 'react';
import axios from 'axios';

class User extends Component {

    state = {
            user: {},
            groups: [],
            events: [],
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
                groups: userResponse.data.groups,
                events: userResponse.data.events,
            })
        }
        catch (error) {
            console.log(error)
            this.setState({error: error.message})
        }
    }

    render() {
        return (
            <div>
                <img src={this.state.user.photo_url} alt=""/>
                <h1>{this.state.user.username}</h1>
                
                {this.state.groups.map(group => (
                    <div key={group.id}>
                        <h4>{group.group_name}</h4>
                        <p>{group.group_description}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default User;