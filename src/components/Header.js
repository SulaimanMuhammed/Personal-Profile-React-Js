import React from 'react'
import './Header.css';
export default function Header() {
  return (
    <div className='contain'>
      
       <div>
            <span className='name1'>
              Sulaiman Muhammed
            </span>
       </div>
       <div className='list'>
       <ul style={{listStyleType:"none"}} >
            <li>
               Home
            </li>
            <li>
              Services
            </li>
            <li>
              About Me
            </li>
            <li>
              Contact Us
            </li>
       </ul>
      </div>
      <div >
        <button className='contact-button'> Contant Me</button>
      </div>
    </div>
  )
}
