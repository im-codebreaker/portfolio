import * as React from "react";
import { Link } from "gatsby";
import "../sass/main.scss";
import "./index.scss";

const IndexPage = () => {
  const [theme, setTheme] = React.useState("light");

  function handleThemeSwitch() {
    if (document.documentElement.dataset.theme === "light") {
      document.documentElement.dataset.theme = "dark";
      setTheme("dark");
    } else {
      document.documentElement.dataset.theme = "light";
      setTheme("light");
    }
  }

  return (
    <>
      <header className="header">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
        >
          <path
            className={`logo ${theme}`}
            d="M0 40V0H30V15H40V40H10V22H16V35H34V20H20V15H24V5H16V15H10V5H6V40H0Z"
          />
        </svg>
        <button className="switcher_theme" onClick={handleThemeSwitch}>
          {theme}
        </button>
      </header>
      <main className="container">
        <section className="section_hero">
          <div className="section_hero-wrapper">
            <div className="section_hero-baseline">
              <h1 className="hero_baseline-title">
                <span className="greeting">Hello Wolrd,</span>
                Développeur Frontend React, Webdesigner
              </h1>
              <button className="baseline_title-button">Rencontrez-moi</button>
            </div>
            <picture className="section_hero-image">
              <img src="https://via.placeholder.com/640" alt="" />
            </picture>
          </div>
          <nav className="section_hero-links">
            <ul className="hero_links-social">
              <li>
                <Link to="/">
                  <i class="ri-linkedin-fill"></i>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i class="ri-twitter-fill"></i>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i class="ri-github-fill"></i>
                </Link>
              </li>
            </ul>
            <div className="hero_links-languages">
              <Link to="/">FR</Link> | <Link to="/en">EN</Link>
            </div>
          </nav>
        </section>
        <section className="section_about">
          <article className="section_about-description">
            <h2>A propos de moi</h2>
            <p>
              Je m'appel Mehdi, Développeur Frontend React et Webdesigner basé
              dans le sud de la France. Passionné par le web et les arts
              graphiques, vous pourrez me voir graviter sur la toile également
              sous la dénomination Code Breaker.
              <br />
              Propulsé dans le domaine du web par la porte du Webdesign, mon
              envie de me perfectionner et de monter en compétences m'ont
              conduis sur le chemin du développement Front.
            </p>
          </article>
          <picture className="section_about-image">
            <img src="https://via.placeholder.com/640" alt="" />
          </picture>
        </section>
        <section className="section_project">
          <h2>Derniers Projets</h2>
          <p>
            Découvrez un aperçu des derniers projets sur lesquels j'ai pu avoir
            l'opportunité et le plaisir de contribuer
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
          <h2>Rencontrez-moi</h2>
        </section>
      </main>
      <footer className="footer">
        <p>Copyright 2022 - Réalisé avec ❤ et 🎵</p>
        <a href="#top">Back to top</a>
      </footer>
    </>
  );
};

export default IndexPage;
