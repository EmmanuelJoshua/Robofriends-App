import React from 'react';
import './Card.css';
import 'tachyons'

const Card = ({id ,name, email}) => {
    return (
        <div className='card dib m2 grow'>
            <img alt='imag' src={`https://robohash.org/${id}`}/>
            <div className='cardtext'>
                <h4>{name}</h4>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;