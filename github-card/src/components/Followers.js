import React from 'react';

const Followers = (props) => {

    //Taking in props passed from Cardlist-->Card-->Followers
    return (
        <div>
            {props.follower.map(person => {
                return <p key={person.id}>{person.login}</p>
            })}
        </div>
    )
}

export default Followers;