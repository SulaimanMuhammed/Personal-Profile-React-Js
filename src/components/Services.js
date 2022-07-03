import React from 'react';
import Card from './Card';
import './Services.css'
export default function Services() {
  return (
    <div className='all'>
        <div className='textDiv'>
            <span className='text'>
                Here is my Resume if you want to download it
            </span>
            <button className='downloadButton'>
                Download Resume
            </button>

        </div>
        {/* <div>
           <Card name={"Developer"} desc={"I am a ReactJs and React native Developer"}/> 
        </div> */}
    </div>
  )
}
