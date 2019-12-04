import React from 'react'
import Card from './Card'
import Followers from './Followers'

//CardList is a presentational component and will hold 'Card'

const CardList = (props) => {
    return (
        <div>
            <Card
                user={props.user}
                follower={props.follower}
            />
        </div>
    )
}

export default CardList;