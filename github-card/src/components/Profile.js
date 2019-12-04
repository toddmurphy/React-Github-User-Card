import React, { Component } from 'react';
import axios from 'axios';

import UserCard from './UserCard';

//Profile is Todd's personal github profile data --> this will be class component
// Get data and set the state in the component your getting data for

class Profile extends Component {
    //set initial state
    state = {
        user: []
    };

    //componentDidMount --> get persal profile data from github api
    componentDidMount() {
        axios.get('https://api.github.com/users/toddmurphy')
            .then(response => {
                console.log(response.data)
                this.setState({
                    user: response.data
                })
            })
            .catch(error => {
                console.log('No github personal data returned', error)
            })
    }

    render() {
        //can destructure this.state
        const { user } = this.state

        //Loading state (ask why to do this again?)
        if (user === null) {
            return <div>Loading...</div>
        }

        return (
            <UserCard user={user} />
        )
    }
}

export default Profile;
