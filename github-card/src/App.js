import React, { Component } from 'react';
import './App.css';
import CardList from './components/CardList';
import axios from 'axios';


class App extends Component {
  //initialize state
  state = {
    user: {},
    followers: []
  }


  //componentDidMount --> use axios to get Todd's person profile from github api
  componentDidMount() {
    axios.get('https://api.github.com/users/toddmurphy')
      .then(response => {
        console.log(response.data)
        const user = response.data;

        //second axios call to api
        axios.get('https://api.github.com/users/toddmurphy/followers')
          .then(response => {
            console.log('followers', response.data)
            this.setState({
              user,
              followers: response.data
            })
          })
          .catch(error => {
            console.log('No github followers returned', error)
          })
      })
      .catch(error => {
        console.log('No github user data returned', error)
      })
  }

  // componentDidMount --> use axios to get Todd's follower list from github api
  // componentDidMount() {
  //   axios.get('https://api.github.com/users/toddmurphy/followers')
  //     .then(response => {
  //       console.log('followers', response.data)
  //       this.setState({
  //         followers: response.data
  //       })
  //     })
  //     .catch(error => {
  //       console.log('No github followers returned', error)
  //     })
  // }

  //componentDidUpdate --> not sure how to use this


  render() {
    console.log('user', this.state.user)
    return (
      <div className="App">
        <h1>Github user card project</h1>
        {/* IMPORTANT: need to export state to Cardlist first --> then export props to 'Card'...all three steps required */}
        <CardList user={this.state.user} follower={this.state.followers} />
      </div>
    );
  }
}

export default App;