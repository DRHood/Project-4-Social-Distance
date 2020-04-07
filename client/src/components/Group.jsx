import React, {Component} from 'react';
import axios from 'axios';

export default class Group extends Component {

    state = {
        error: '',
            group: {},
    }

    componentDidMount() {
        const groupId = this.props.match.params.id;
        this.fetchGroup(groupId)
    }

    fetchGroup = async (groupId) => {
        try {
            const groupResponse = await axios.get(`/api/v1/groups/${groupId}`)
            this.setState({
                group: groupResponse.data,
            })
        }
        catch (error) {
            console.log(error)
            this.setState({error: error.message})
        }
    }

    render() {
        let T = this.state.group;
        return (
            <div>
                <img src="{T.group_img_url}" alt=""/>
                <h1>{T.group_name}</h1>
                <p>{T.group_description}</p>
                <p>current members: {T.attending}</p>
                )
            </div>
        );
    }
};