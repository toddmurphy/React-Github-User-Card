import React, { Component } from 'react';
import axios from 'axios';

import UserCard from './UserCard';

//Followers will be a class component --> get followers data from github api as Follower state lives here

class Followers extends Component {
    //set initial Follower state
    state = {
        followers: []
    }

    //componentDidMount --> get Follower data from github api
    componentDidMount() {
        axios.get("https://api.github.com/users/toddmurphy/followers")
            .then(response => {
                console.log(response.data)
                this.setState({
                    followers: response.data
                })
            })
            .catch(error => {
                console.log('No follower data returned', error)
            })
    }


    render() {
        //can destructure this.state
        const { followers } = this.state;

        return (
            followers.map(follower => {
                //can destructure out the 'id'
                const { id } = follower;

                return (
                    <UserCard key={id} user={follower} />
                )

            })
        )
    }
}

export default Followers;