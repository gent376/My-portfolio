import React from 'react'
import {PiMedalFill} from 'react-icons/pi'
import {PiFolderSimplePlusFill} from 'react-icons/pi'
import {BsFillPeopleFill} from 'react-icons/bs'

const AboutTables = () => {
  return (
    <div className='tables'>
      <div className='table'>
        <span><PiMedalFill/></span>
        <p className='name'>Experience</p>
        <h5 className='exp'>1 Year of programming</h5>
      </div>
      <div className='table'>
        <span><BsFillPeopleFill/></span>
        <p className='name'>Clients</p>
        <h5 className='exp'>No clients yet</h5>
      </div>
      <div className='table'>
        <span><PiFolderSimplePlusFill/></span>
        <p className='name'>Projects</p>
        <h5 className='exp'>4 Projects</h5>
      </div>
    </div>
  )
}

export default AboutTables
