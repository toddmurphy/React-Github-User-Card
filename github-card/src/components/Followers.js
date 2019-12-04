import React from 'react';

const Followers = (props) => {

    //Taking in props passed from Cardlist-->Card-->Followers
    return (
        <div>
            {props.follower.map(person => {
                return (
                    <div key={person.id}>
                        {person.login}
                        {person.id}
                        {/* {person.avatar_url} */}
                        <img src={person.avatar_url} />
                    </div>
                );
            })}
        </div>
    )
}

export default Followers;