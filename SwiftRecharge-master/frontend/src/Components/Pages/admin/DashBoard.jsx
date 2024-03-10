import React, { useState } from 'react'
import SideBar from './SideBar'
import Content from './Content'

const DashBoard = () => {

  const [activeLink, setActiveLink] = useState("link1");

  return (
    <div className='flex'>
      <div className='w-[20VW]'>
        <SideBar setActiveLink={setActiveLink} />
      </div>
      <div className='w-full'>
        <Content activeLink={activeLink} />
      </div>
    </div>
  )
}

export default DashBoard
