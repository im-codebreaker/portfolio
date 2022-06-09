import * as React from 'react';
import gsap from 'gsap';
import { Link } from 'gatsby';
import { Header, Footer } from '../layout';
import '../sass/main.scss';
import './index.scss';

const IndexPage = () => {

  const element = React.useRef();
  const q = gsap.utils.selector(element);
  const timeline =  React.useRef();

  React.useEffect(()=>{
    timeline.current = gsap.timeline()
      .to(q('.hero_baseline-title'),{
        ease:"power4.inOut",
        y:0,
        opacity:1,
        'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
        duration:2
      })
      .to(q('.section_hero-image'),{
        ease: "elastic.out(1, 0.3)",
        y:0,
        opacity:1,
        duration:2
      })
      .to(q('.baseline_title-button'),{
        opacity:1,
        duration:1
      })      
  },[]);
  return (
    <>
    <Header />   
      <main className='container'>
        <section className='section_hero'>
          <div className='section_hero-wrapper' ref={element}>
            <div className='section_hero-baseline'>
              <h1 className='hero_baseline-title'>
                <span className='greeting'>Hello Wolrd,</span>
                Développeur Frontend React, Webdesigner
              </h1>
              <Link to='#contact' className='baseline_title-button'>Rencontrez-moi</Link>
            </div>
            <picture className='section_hero-image'>
            <source srcset="https://imcodebreaker-portfolio.s3.eu-west-3.amazonaws.com/room.png" type="image/png" media="(min-width: 48em)" />
            <source srcset="https://imcodebreaker-portfolio.s3.eu-west-3.amazonaws.com/room.webp" type="image/webp" media="(min-width: 48em)"/>
            <source srcset="https://imcodebreaker-portfolio.s3.eu-west-3.amazonaws.com/room_small.png" type="image/png" />
            <source srcset="https://imcodebreaker-portfolio.s3.eu-west-3.amazonaws.com/room_small.webp" type="image/webp" />
              <img
                src='https://imcodebreaker-portfolio.s3.eu-west-3.amazonaws.com/room_small.png'
                width={660}
                height={660}
                alt='Rendu 3D de mon espace de travail'
              />
            </picture>
          </div>
        </section>
        <section className='section_about'>
          <article className='section_about-description'>
            <h2>A propos de moi</h2>
            <p>
              Je m'appel Mehdi,{' '}
              <strong>Développeur Frontend React et Webdesigner</strong> basé
              dans le sud de la France. Passionné par le web et les arts
              graphiques, vous pourrez me voir graviter sur la toile également
              sous la dénomination <span className='code_breaker'>Code Breaker</span>.
            </p>
            <p>
              Propulsé dans le domaine du web par la porte du Webdesign, mon
              envie de me perfectionner et de monter en compétences m'ont
              conduis sur le chemin du développement Front.
            </p>
          </article>
          <picture className='section_about-image'>
            <img
              src='https://imcodebreaker-portfolio.s3.eu-west-3.amazonaws.com/codebreaker_card.png'
              alt=''
            />
          </picture>
        </section>
        <section className='section_project'>
          <h2>Derniers Projets</h2>
          <p>
            Découvrez un aperçu des derniers projets sur lesquels j'ai pu avoir
            l'opportunité et le plaisir de contribuer
          </p>
          <ul className='section_project-list'>
            <li className='project_list-item'>
              <h3>Le Naanifk</h3>
              <p>Conception d'un site vitrine pour un Foodtruck</p>
              <picture>
                <img src='https://le-naanifik.s3.eu-west-3.amazonaws.com/naanifik_ui.jpg' alt='' />
              </picture>
            </li>
            <li className='project_list-item'>
              <h3>Website #2</h3>
              <p>Lorem ipsum dolor sit amet,tortor molestie pellentesque.</p>
              <picture>
                <img src='https://le-naanifik.s3.eu-west-3.amazonaws.com/naanifik_ui.jpg' alt='' />
              </picture>
            </li>
            <li className='project_list-item'>
              <h3>Website #3</h3>
              <p>Lorem ipsum dolor sit amet,tortor molestie pellentesque.</p>
              <picture>
                <img src='https://le-naanifik.s3.eu-west-3.amazonaws.com/naanifik_ui.jpg' alt='' />
              </picture>
            </li>
            <li className='project_list-item'>
              <h3>Website #4</h3>
              <p>Lorem ipsum dolor sit amet,tortor molestie pellentesque.</p>
              <picture>
                <img src='https://le-naanifik.s3.eu-west-3.amazonaws.com/naanifik_ui.jpg' alt='' />
              </picture>
            </li>
          </ul>
        </section>
        <section id="contact" className='section_contact'>
          <h2>Rencontrez-moi</h2>
        </section>
      </main>
      <aside className='aside_nav'>
        <nav className='aside_nav-links'>
          <ul className='hero_links-social'>
            <li>
              <Link to='/'>
                <i className='ri-linkedin-fill'></i>
              </Link>
            </li>
            <li>
              <Link to='/'>
                <i className='ri-twitter-fill'></i>
              </Link>
            </li>
            <li>
              <Link to='/'>
                <i className='ri-github-fill'></i>
              </Link>
            </li>
          </ul>
          <div className='hero_links-languages'>
            <Link to='/'>FR | </Link>
            <Link to='/en'>EN</Link>
          </div>
        </nav>
      </aside>
    <Footer />
    </>
  );
};

export default IndexPage;
