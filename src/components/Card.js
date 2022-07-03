import React from 'react'
import './Card.css'
import developer from '../photos/dev.jpg'
export default function Card({name, desc }) {
  return (
    <div className='cardStyle'>
        <div className='nameTop'>
        <span className='name'>
            {name}
        </span>
        </div>
        <img src={developer} alt="" className='img'/>
        <span className='desc'>
            {desc}
        </span>
    </div>
  )
}
