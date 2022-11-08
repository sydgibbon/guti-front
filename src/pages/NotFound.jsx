import React from "react";
import {Link} from "react-router-dom"

const NotFound = () => {
  return (
    <div className="404 not-found m-4 flex">
      <div>
        <div className="text-9xl mb-4">OOPS!</div>
        <div className="mb-4">
          Looks like we can't find the page you're looking for
        </div>
        <Link to="/">
          <span className="text-primary hover:underline">
            Return to Home Page
          </span>
        </Link>
      </div>
    </div>

  );
};

export default NotFound;
