import React from 'react';

const Followers = (props) => {

    const { login } = props.person;
    return (
        <div>
            <p>{login}</p>
        </div>
    )
}

export default Followers;