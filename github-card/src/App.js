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
        {/* IMPORTANT: need to export state to Cardlist first --> then export props to 'Card'...all three steps required */}
        <CardList user={this.state.users} follower={this.state.followers} />
      </div>
    );
  }
}

export default App;