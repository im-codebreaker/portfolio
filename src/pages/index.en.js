import * as React from "react";
import { Link } from "gatsby";
import "../sass/main.scss";
import "./index.scss";

const IndexPage = () => {
  return (
    <>
      <header class="header">
        <img class="logo" href="" alt="" width="" height="" />
        <button class="switcher_theme">Light</button>
      </header>
      <main class="container">
        <section className="section_hero">
          <div className="section_hero-wrapper">
            <div className="section_hero-baseline">
              <h1>
                Hello Wolrd,
                <br />
                React Frontend Developer, Webdesigner
              </h1>
              <p>Lorem ipsum dolor sit amet</p>
              <button>Meet-me</button>
            </div>
            <picture className="section_hero-image">
              <img src="https://via.placeholder.com/640" alt="" />
            </picture>
          </div>
          <nav className="section_hero-links">
            <ul className="hero_links-social">
              <li>
                <Link to="/">Linkedin</Link>
              </li>
              <li>
                <Link to="/">Twitter</Link>
              </li>
              <li>
                <Link to="/">Github</Link>
              </li>
            </ul>
            <div className="hero_links-languages">
              <Link to="/">FR</Link> | <Link to="/en">EN</Link>
            </div>
          </nav>
        </section>
        <section className="section_about">
          <article className="section_about-description">
            <h2>About me</h2>
            <p>
              My name is Mehdi, React Frontend Developer and Webdesigner based
              in the south of France. Passionate about the web and graphic arts,
              you can see me gravitating on the web under the name of Code
              Breaker.
              <br />
              Propel into the web domain through the Webdesign door, my desire
              to improve myself and increase my skills led me to the path of the
              Frontend develpmont{" "}
            </p>
          </article>
          <picture className="section_about-image">
            <img src="https://via.placeholder.com/640" alt="" />
          </picture>
        </section>
        <section className="section_project">
          <h2>Last Projects</h2>
          <p>
            Here is an overview of the latest projects on which i had the
            opportunity and pleasure to contribute.
          </p>
          <div className="section_project-list">
            <div className="project_list-item">
              <h3>Website #1</h3>
              <p>Lorem ipsum dolor sit amet,tortor molestie pellentesque.</p>
              <picture>
                <img src="https://via.placeholder.com/640x360" alt="" />
              </picture>
            </div>
            <div className="project_list-item">
              <h3>Website #2</h3>
              <p>Lorem ipsum dolor sit amet,tortor molestie pellentesque.</p>
              <picture>
                <img src="https://via.placeholder.com/640x360" alt="" />
              </picture>
            </div>
            <div className="project_list-item">
              <h3>Website #3</h3>
              <p>Lorem ipsum dolor sit amet,tortor molestie pellentesque.</p>
              <picture>
                <img src="https://via.placeholder.com/640x360" alt="" />
              </picture>
            </div>
            <div className="project_list-item">
              <h3>Website #4</h3>
              <p>Lorem ipsum dolor sit amet,tortor molestie pellentesque.</p>
              <picture>
                <img src="https://via.placeholder.com/640x360" alt="" />
              </picture>
            </div>
          </div>
        </section>
        <section className="section_contact">
          <section className="section_contact">
            <h2>Meet-me</h2>
          </section>
        </section>
      </main>
      <footer className="footer">
        <p>Copyright 2022 - Made with ❤ and 🎵</p>
        <a href="#top">Back to top</a>
      </footer>
    </>
  );
};

export default IndexPage;
