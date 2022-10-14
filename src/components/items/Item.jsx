import React, { useState } from 'react'
import './Item.css'
const Item = ({card}) => {
   const [logo,setLogo]= useState(true)
   const {name,img,options}=card
   const prew =()=>{
    setLogo(!logo)
   }

  return (
    <div className='card' onClick={prew}> 
        {logo ? (<div>
        <img className='card-logo' src={img} alt="" />
        <h3 className='card-title'>{name}</h3>
    </div>):
        (<ul className='list'>
            {options.map((a,index)=>{
                return (<div key={index}>
                    <li>{a}</li>
                </div>)
            })}
        </ul>)
    } 
    </div>
  )
}

export default Item