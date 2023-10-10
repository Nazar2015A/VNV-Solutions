import React from 'react'


const Card = ({item}) => {
    
    
  return (
    <div className='why-us-card-wrapper'>
        <span className='green'>{item.icon}</span>
        <h1>{item.title}</h1>
        <p>{item.desc}</p>
    </div>
  )
}

export default Card;

