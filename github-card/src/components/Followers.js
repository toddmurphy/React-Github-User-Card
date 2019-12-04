import React from 'react';

const Followers = (props) => {


    return (
        <div>
            {/* <p>{login}</p> */}
            {props.follower.map(person => {
                return <p key={person.id}>{person.login}</p>
            })}
        </div>
    )
}

export default Followers;