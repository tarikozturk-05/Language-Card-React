import './Card.css'

import React from 'react'

const Card = ({items}) => {
  console.log(items)
  return (
        <div className='section'>
            {items.map((items,index)=>{
              const {name,img,options}=items;
              return(
                <div key={index} >{name}   </div>
              )
            })}
      

    </div>
  )
}

export default Card;