import React from "react";
import { Link } from "react-router-dom";
import Helmet from "../../components/Helmet/Helmet";

const NotFound = () => {
  return (
    <Helmet title="NotFound">
      <div className="not-found">
        <h1 className="not-found_error-number">404</h1>
        <p className="not-found_title">Oops! Something is wrong.</p>
        <Link to="/">
          <button className="not-found_btn" href="true">
            <i className="fas fa-home"></i>Go back in initial page, is better.
          </button>
        </Link>
      </div>
    </Helmet>
  );
};

export default NotFound;
