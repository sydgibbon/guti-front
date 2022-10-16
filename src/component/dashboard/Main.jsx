import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Children } from 'react'
import SideBar from './Sidebar'
import SearchCard from "./assets/SearchCard";


const Main = ({content}) => {
  return (
    <div className="main flex">
      <SideBar />
      <div className="h-screen">
        {content}
      </div>
    </div>
  )
}

export default Main