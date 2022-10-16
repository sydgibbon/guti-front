import React from 'react'
import SideBar from './Sidebar'
import Navbar from './Navbar'

const Main = () => {
  return (
    <div className="main flex">
      <SideBar />
      <Navbar />
      <h1 className='underline text-3xl p-3 bg-secondary-dark-bg'>Hello World!</h1>
    </div>
  )
}

export default Main