import { Link } from "react-router-dom";

const NotFoundView = () => {
  return (
    <div className="flex m-4 404 not-found">
      <div>
        <div className="mb-4 text-9xl">OOPS!</div>
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

export default NotFoundView;
