import React from "react";
import { BsHouse, BsBoxSeam, BsLaptop } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom"

const Breadcrumb = () => {
  const apps = [
    {
      name: "Home",
      icon: function() {
        return <BsHouse/>;
      },
      link: "/",
      itemContent: [
        {
          name: "Assets",
          icon: function() {
            return <BsBoxSeam/>;
          },
          link: "/assets",
          itemContent: [
            {
              name: "Computers",
              icon: function() {
                return <BsLaptop/>;
              },
              link: "/computers",
            },
          ],
        },
      ],
    },
  ];
  
   let location = useLocation().pathname;

  const renderBreadcrumb = (apps, loc) => apps.map((app) => (
    loc.includes(app.link) ? 
    <>
    {app.link !== "/" && <span>&nbsp;/&nbsp;</span>}
      <Link to={app.link} className="flex items-center cursor-pointer">
      {app.icon()}
    <span className="text-sm ml-1 inline">{app.name}</span>
    {app.itemContent ? <> {renderBreadcrumb(app.itemContent, loc)} </> : "" }
    </Link>
    </> : ""
    ));

    return (
      <>
      {location.pathname}
      {renderBreadcrumb(apps, location)}
      </>
    );
};

export default Breadcrumb;
