import * as React from "react";
import { Header, Footer } from "../layout";
import "../sass/main.scss";
import "./404.scss";

// markup
const NotFoundPage = () => {
  return (
    <>
      <Header />
      <main class="container">
        <section className="section_notfound"></section>
      </main>
      <Footer />
    </>
  );
};

export default NotFoundPage;
