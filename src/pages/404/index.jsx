import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div>
            <Link to={`/`}>Go Home</Link>
            <div className="divider"></div>
            <h1 className="not-found">404</h1>
            <h3 className="not-found">Page not found, you're lost</h3>
        </div>
    )
}

export default NotFoundPage;