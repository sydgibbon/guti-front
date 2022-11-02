import React from "react";
import { BsHouse } from 'react-icons/bs';

const Breadcrumb = () => {
    const apps = []
  return (
    <>
      <BsHouse className="inline" />
      <span className="text-sm ml-2 inline">Home</span>
    </>
  );
};

export default Breadcrumb;
