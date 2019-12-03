import React from 'react'
import Card from './Card'
import Followers from './Followers'

//CardList is a presentational component and will hold 'Card'

const CardList = (props) => {
    return (
        <div>
            <Card user={props.user} />
            {/* <Followers follower={props.follower} /> */}
            {props.follower.map(person => {
                return <Followers key={person.id} person={person} />
            })}
        </div>
    )
}

export default CardList;