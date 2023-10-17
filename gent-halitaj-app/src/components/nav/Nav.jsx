import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
  const [activeState, setActiveState] = useState('#')
  return (
    <nav>
      <a href='#header' onClick={()=>setActiveState('#header')} className={activeState==='#header'?'erina':''}><AiOutlineHome/></a>
      <a href='#about' onClick={()=>setActiveState('#about')} className={activeState==='#about'?'erina':''}><AiOutlineUser/></a>
      <a href='#experience' onClick={()=>setActiveState('#experience')} className={activeState==='#experience'?'erina':''}><BiBook/></a>
      <a href='#services' onClick={()=>setActiveState('#services')} className={activeState==='#services'?'erina':''}><RiServiceLine/></a>
      <a href='#contact' onClick={()=>setActiveState('#contact')} className={activeState==='#contact'?'erina':''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav
