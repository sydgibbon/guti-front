import { Link, useLocation } from "react-router-dom";
import { appItems } from "../../contexts/AppItems";
import { Item } from "../../../domain/models/Others";

const Breadcrumb = () => {
  let location = useLocation().pathname;

  const renderBreadcrumb = (apps: Item[], location: string) =>
    apps.map(
      (app: Item, index: number) =>
        location.includes(app.link) && (
          <div className="item" key={index}>
            {app.link !== "/" && <span>&nbsp;/&nbsp;</span>}
            <Link to={app.link} className="flex items-center cursor-pointer">
              {app.icon("", "20")}
              <span className="inline ml-1 text-sm">{app.name}</span>

              {app.itemContent && renderBreadcrumb(app.itemContent, location)}
            </Link>{" "}
          </div>
        )
    );

  return <>{renderBreadcrumb(appItems, location)}</>;
};

export default Breadcrumb;
