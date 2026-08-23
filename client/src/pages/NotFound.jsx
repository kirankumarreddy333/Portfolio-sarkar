import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found-page">
      <div className="not-found-card">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you are looking for doesn't exist or has been moved.</p>
        <Link to="/" className="btn-primary">
          <i className="fa-solid fa-house"></i> Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
