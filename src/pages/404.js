import * as React from "react";
import { Link } from "gatsby";
import "../sass/main.scss";
import "./404.scss";

// markup
const NotFoundPage = () => {
  return (
    <main>
      <h1>Not found</h1>
      <Link to="/">Go Home</Link>
    </main>
  );
};

export default NotFoundPage;
