import React from 'react';
import './App.css';

import Profile from './components/Profile';
import Followers from './components/Followers';



//Make App.js a presentational function component --> move all state the component that we are getting from api
// Todd's profile goes in 'Profile' and calls github api to get persona profile data
// Follower's data will call the github followers api and set that state to live in 'Followers'
const App = () => {
  return (
    <div className="App">
      <h1>Github user card project</h1>
      <Profile />
      <Followers />
    </div>
  )
}

export default App;