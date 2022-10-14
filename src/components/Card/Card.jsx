import './Card.css'

// import item from '../items/Item'
import React from 'react'
import Item from '../items/Item'

const Card = ({items}) => {
  



  
  return (
<div className='cards-area-container'>
  <div className="bars"></div>
<h1 className='language-title'>Languages</h1>

<div className='cards-container'>
  {
items.map((items)=>{
return <Item card={items}/>


})}
   
   </div>



</div>
  )
}

export default Card;