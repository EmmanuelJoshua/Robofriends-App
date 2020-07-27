import React from 'react'
import Card from './Card'

const CardList = ({robots}) => {
    const cardComponents = robots.map(element => <Card id={element.id} name={element.name} email={element.email}/>
    );
    return (
        <div>
           {cardComponents}
        </div>
    )
}

export default CardList