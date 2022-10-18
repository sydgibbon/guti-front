import React from 'react'
import SideBar from './Sidebar'
import Navbar from './Navbar'


const Main = ({content}) => {
  return (
    <div className="main flex">
      <SideBar />
      <div className="h-screen">
        {content}
      </div>
      <Navbar />
      <h1 className='underline text-3xl p-3 bg-secondary-dark-bg'>Hello World!</h1>
    </div>
  )
}

export default Main