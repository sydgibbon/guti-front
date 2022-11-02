import React from "react";
import SideBar from "./Sidebar";
import Navbar from "./Navbar";

const Main = ({ content }) => {
  return (
    <div className="main flex">
      <SideBar />
      <div className="flex flex-col w-full h-screen overflow-y-auto">
        <Navbar />
        <div className="">{content}</div>
        <h1 className="underline text-3xl p-3 bg-secondary-dark-bg">
          Hello World!
        </h1>
      </div>
    </div>
  );
};

export default Main;
