import React, { Component } from 'react';
import './App.css';
import CardList from './components/CardList';
import axios from 'axios';


class App extends Component {
  //initialize state

  state = {
    users: [],
    followers: []
  }


  //componentDidMount --> use axios to get Todd's person profile from github api
  componentDidMount() {
    axios.get('https://api.github.com/users/toddmurphy')
      .then(response => {
        console.log(response.data)
        this.setState({
          users: response.data
        })
      })
      .catch(error => {
        console.log('No github user data returned', error)
      })
  }

  //componentDidMount --> use axios to get Todd's follower list from github api
  componentWillMount() {
    axios.get('https://api.github.com/users/toddmurphy/followers')
      .then(response => {
        console.log('followers', response.data)
        this.setState({
          followers: response.data
        })
      })
      .catch(error => {
        console.log('No github followers returned', error)
      })
  }


  render() {
    console.log(this.state.users)
    return (
      <div className="App">
        <h1>Github user card project</h1>
        <CardList user={this.state.users} follower={this.state.followers} />
      </div>
    );
  }
}

export default App;

// Github response and data structure
// avatar_url: "https://avatars3.githubusercontent.com/u/7282612?v=4"
// bio: "Current Full Stack Web Developer student at Lambda School"
// blog: ""
// company: null
// created_at: "2014-04-13T18:57:33Z"
// email: null
// events_url: "https://api.github.com/users/toddmurphy/events{/privacy}"
// followers: 26
// followers_url: "https://api.github.com/users/toddmurphy/followers"
// following: 20
// following_url: "https://api.github.com/users/toddmurphy/following{/other_user}"
// gists_url: "https://api.github.com/users/toddmurphy/gists{/gist_id}"
// gravatar_id: ""
// hireable: null
// html_url: "https://github.com/toddmurphy"
// id: 7282612
// location: "Canada"
// login: "toddmurphy"
// name: "Todd Murphy"
// node_id: "MDQ6VXNlcjcyODI2MTI="
// organizations_url: "https://api.github.com/users/toddmurphy/orgs"
// public_gists: 0
// public_repos: 37
// received_events_url: "https://api.github.com/users/toddmurphy/received_events"
// repos_url: "https://api.github.com/users/toddmurphy/repos"
// site_admin: false
// starred_url: "https://api.github.com/users/toddmurphy/starred{/owner}{/repo}"
// subscriptions_url: "https://api.github.com/users/toddmurphy/subscriptions"
// type: "User"
// updated_at: "2019-12-03T20:05:26Z"
// url: "https://api.github.com/users/toddmurphy"
