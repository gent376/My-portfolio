import React from 'react'
import {MdVerified} from 'react-icons/md'

const ExpCards = () => {
  return (
    <div className='cards'>
      <div className='card'>
        <h2>Front-end skills</h2>
        <div className='fe-skills'> 
            <ul>
                <span><MdVerified/></span>
                <li>HTML</li>
            </ul>
            <ul>
                <span><MdVerified/></span>
                <li>CSS</li>
            </ul>
            <ul>
                <span><MdVerified/></span>
                <li>JavaScript</li>
            </ul>
            <ul>
                <span><MdVerified/></span>
                <li>ReactJS</li>
            </ul>
            <ul>
                <span><MdVerified/></span>
                <li>SCSS</li>
            </ul>
        </div>
    </div>
    <div className='card'>
        <h2>Other skills</h2>
        <div className='fe-skills'> 
            <ul>
                <span><MdVerified/></span>
                <li>Figma</li>
            </ul>
            <ul>
                <span><MdVerified/></span>
                <li>Adobe XD</li>
            </ul>
            <ul>
                <span><MdVerified/></span>
                <li>English Language</li>
            </ul>
            <ul>
                <span><MdVerified/></span>
                <li>Microsoft Office</li>
            </ul>
            <ul>
                <span><MdVerified/></span>
                <li>Learning MySQL...</li>
            </ul>
         
        </div>
    </div>
   </div>
  )
}

export default ExpCards
