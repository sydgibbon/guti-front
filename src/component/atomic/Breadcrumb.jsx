import React from "react";
import { Link, useLocation } from "react-router-dom";
import { appItems } from "../../contexts/AppItems";

const Breadcrumb = () => {

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
      {renderBreadcrumb(appItems, location)}
      </>
    );
};

export default Breadcrumb;
