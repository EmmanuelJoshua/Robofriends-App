import React from 'react'
import Card from './Card'
import 'tachyons'

const CardList = ({robots}) => {
    const cardComponents = robots.map(element => <Card id={element.id} name={element.name} email={element.email}/>
    );
    return (
        <div className='tc pt5'>
           {cardComponents}
        </div>
    )
}

export default CardList