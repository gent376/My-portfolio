import React from 'react'
import CV from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
      <a className='btn btn-primary' href={CV}>DOWNLOAD CV</a>
      <a className='btn' href='#contact'>LET'S TALK</a>
    </div>
  )
}

export default CTA
