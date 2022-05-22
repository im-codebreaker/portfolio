import * as React from "react";
import "../sass/main.scss";
import "./404.scss";

// markup
const NotFoundPage = () => {
  return (
    <>
      <header></header>
      <main class="container">
        <section className="section_notfound"></section>
      </main>
      <footer className="footer"></footer>
    </>
  );
};

export default NotFoundPage;
