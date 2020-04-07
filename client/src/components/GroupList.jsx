import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class GroupList extends Component {
    state = {
        error: '',
        groups: []
    }

    componentDidMount(){
        this.fetchGroups();
    }

    fetchGroups = async () => {
        try {
            const res = await axios.get('/api/v1/groups');
            this.setState({groups: res.data});
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
                <h1>All Groups</h1>
                {this.state.groups.map(group => (
                    <div key={group.id}>
                        <Link to={`/group/${group.id}`} >{group.group_name}</Link>
                    </div>
                ))}
            </div>
        );
    }
}

export default GroupList;