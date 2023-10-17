import React from 'react'
import "./about.css"
import AT from '../about/AboutTables'
import ME from '../../assets/genti.jpg'

const About = () => {
  return (
    <article id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className='about about__container'>
        <div className='image'>
        <div className='image-of-me'>
          <img src={ME} alt="Gent Halitaj"/>
        </div>
        </div>
        <div className='about-me'>
          <AT/>
          <p >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Dolore doloribus consequuntur officia optio numquam voluptate 
            labore possimus tenetur error accusamus quod fugiat, fugit,
            quibusdam natus atque?Quos nemo obcaecati cum officiis dolor
            ex debitis ipsam quis repellat, illum vel porro.
            </p>
          <a className='btn btn-primary' href='#contact'>LET'S TALK</a>
        </div>
      </div>
    </article>
  )
}

export default About
