import React from 'react';
import Followers from './Followers'

const Card = (props) => {
    console.log(props)

    const { avatar_url, id, name, login, location, url, bio, followers } = props.user;

    return (
        <div>
            <img src={avatar_url} alt='man smiling' />
            <p>ID: {id}</p>
            <p>Name{name}</p>
            <p>Username: {login}</p>
            <p>Location: {location}</p>
            <p>Github url: {url}</p>
            <p>Bio: {bio}</p>
            <p>Follower count: {followers}</p>
            <Followers follower={props.follower} />
        </div>
    )
}

export default Card;

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