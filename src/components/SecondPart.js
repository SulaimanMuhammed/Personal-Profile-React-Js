import React from 'react';
import './SecondPart.css';
 import orange from '../photos/mixColor.png';
// import me from '../photos/me.png';

import github from '../photos/github.JPG';
import behance from '../photos/behance.JPG'
export default function SecondPart() {
  return (
    <div className='main'>
         <div className='first-half'>
                  <span className='name'>
                      React Js 
                    </span>
                    <span className='reactNative'>
                    React Native Developer
                    </span>
                    <p>
                    I am a Software Engineer Graduate from 
                    <br/>
                    The American University of Iraq-Sulaimani 
                    <br/>
                    and I am minored in Business Administration. I am experienced in
                      <br/>
                      developing mobile apps with React Native 
                      <br/>
                      and Developing web pages with
                      <br/>
                      WordPress. Also, I am very experienced in 
                      <br/>Graphic Design and I use the most
                      used Adobe Apps.
                    </p>
                    <button className='buttonHire'>
                      Hire Me
                    </button>
                    <div className='github'>
                          <img src={github} alt=""/>
                          <img src={behance} alt=""/>
                    </div>
         </div>
         <div className='second-half'>
            <img src={orange} alt="" className='img2'/>
         </div>

    </div>
  )
}
