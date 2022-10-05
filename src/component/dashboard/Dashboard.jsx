import React from 'react'
import SideBar from './Sidebar'

const Dashboard = () => {
  return (
    <div className="Dashboard">
      <SideBar />
      <h1 className='underline text-3xl p-3 bg-secondary-dark-bg'>Hello World!</h1>
    </div>
  )
}

export default Dashboard