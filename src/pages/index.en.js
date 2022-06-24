import * as React from 'react';
import gsap from 'gsap';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import { Header, Footer } from '../layout';
import '../sass/main.scss';
import './index.scss';

const IndexPage = () => {
  const element = React.useRef();
  const q = gsap.utils.selector(element);
  const timeline = React.useRef();

  React.useEffect(() => {
    timeline.current = gsap
      .timeline()
      .to(q('.hero_baseline-title'), {
        ease: 'power4.inOut',
        y: 0,
        opacity: 1,
        'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
        duration: 2,
      })
      .to(q('.section_hero-image'), {
        ease: 'elastic.out(1, 0.3)',
        y: 0,
        opacity: 1,
        duration: 2,
      })
      .to(q('.baseline_title-button'), {
        opacity: 1,
        duration: 1,
      });
  }, []);
  return (
    <>
      <Helmet>
        <html lang='en' />
        <title>Bouchard Mehdi - Portfolio</title>
        <meta
          name='description'
          content='Bouchard Mehdi, FrontEnd React developer and Webdesigner in the south of France.'
        />
      </Helmet>
      <Header />
      <main className='container'>
        <section className='section_hero'>
          <div className='section_hero-wrapper' ref={element}>
            <div className='section_hero-baseline'>
              <h1 className='hero_baseline-title'>
                <span className='greeting'>Hello Wolrd,</span>
                React Frontend Developer, Webdesigner
              </h1>
              <Link to='#contact' className='button baseline_title-button'>
                Meet me
              </Link>
            </div>
            <picture className='section_hero-image'>
              <source
                srcSet='https://imcodebreaker-portfolio.s3.eu-west-3.amazonaws.com/room.png'
                type='image/png'
                media='(min-width: 48em)'
              />
              <source
                srcSet='https://imcodebreaker-portfolio.s3.eu-west-3.amazonaws.com/room.webp'
                type='image/webp'
                media='(min-width: 48em)'
              />
              <source
                srcSet='https://imcodebreaker-portfolio.s3.eu-west-3.amazonaws.com/room_small.png'
                type='image/png'
              />
              <source
                srcSet='https://imcodebreaker-portfolio.s3.eu-west-3.amazonaws.com/room_small.webp'
                type='image/webp'
              />
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
            <h2>About Me</h2>
            <p>
              My name is Mehdi,{' '}
              <strong>React Frontend Developer and Webdesigner</strong> based in
              the south of France. Passionnate about web and graphic arts, i'm
              wearing two hats <strong>Developer/Designer</strong> which allow
              me to work from the design phase of the UI to the development
              phase.
            </p>
            <p>
              Able to work independently, my excellent communication skills
              allow me to easily integrate into a team. I like to use my free
              time to develop my skills and develop new projects and participate
              in Open Source projects.
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
          <h2>Latest Projects</h2>
          <p>
            Discover an overview of the latest projects on which I had the
            opportunity and pleasure to contribute.
          </p>
          <ul className='section_project-list'>
            <li className='project_list-item'>
              <h3>Le Naanifik</h3>
              <article className='list_item-description'>
                <p>Showcase website for a Food Truck</p>
                <ul className='list_item-details'>
                  <li>
                    <p>
                      <i className='ri-arrow-drop-right-fill'></i>
                      User Interface
                    </p>
                  </li>
                  <li>
                    <p>
                      <i className='ri-arrow-drop-right-fill'></i>
                      3D Modeling
                    </p>
                  </li>
                  <li>
                    <p>
                      <i className='ri-arrow-drop-right-fill'></i>
                      Development
                    </p>
                  </li>
                </ul>
                <div className='list_item-footer'>
                  <ul className='item_footer-tag'>
                    <li>
                      <span className='tag'>HTML</span>
                    </li>
                    <li>
                      <span className='tag'>CSS</span>
                    </li>
                    <li>
                      <span className='tag'>JS</span>
                    </li>
                    <li>
                      <span className='tag'>Figma</span>
                    </li>
                    <li>
                      <span className='tag'>Blender</span>
                    </li>
                  </ul>
                  <ul className='list_item-links'>
                    <li>
                      <a
                        href='https://www.lenaanifik.fr'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <i className='ri-link'></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://github.com/im-codebreaker/le-naanifik'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <i className='ri-github-fill'></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </article>

              <picture>
                <img
                  src='https://le-naanifik.s3.eu-west-3.amazonaws.com/naanifik_ui.jpg'
                  alt=''
                />
              </picture>
            </li>
            <li className='project_list-item'>
              <h3>Code Breaker</h3>
              <article className='list_item-description'>
                <p>Showcase website for my Web Agency</p>
                <ul className='list_item-details'>
                  <li>
                    <p>
                      <i className='ri-arrow-drop-right-fill'></i>
                      User Interface
                    </p>
                  </li>
                  <li>
                    <p>
                      <i className='ri-arrow-drop-right-fill'></i>
                      3D Modeling
                    </p>
                  </li>
                  <li>
                    <p>
                      <i className='ri-arrow-drop-right-fill'></i>
                      Development
                    </p>
                  </li>
                </ul>
                <div className='list_item-footer'>
                  <ul className='item_footer-tag'>
                    <li>
                      <span className='tag'>HTML</span>
                    </li>
                    <li>
                      <span className='tag'>CSS</span>
                    </li>
                    <li>
                      <span className='tag'>JS</span>
                    </li>
                    <li>
                      <span className='tag'>Figma</span>
                    </li>
                    <li>
                      <span className='tag'>Blender</span>
                    </li>
                  </ul>
                  <ul className='list_item-links'>
                    <li>
                      <a
                        href='https://www.codebreaker.fr'
                        target='_blank'
                        rel='noreferrer'
                      >
                        <i className='ri-link'></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://github.com/im-codebreaker/code-breaker'
                        target='_blank'
                        rel='noreferrer'
                      >
                        <i className='ri-github-fill'></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </article>

              <picture>
                <img
                  src='https://imcodebreaker.s3.eu-west-3.amazonaws.com/codebreaker_ui.jpg'
                  alt=''
                />
              </picture>
            </li>
            <li className='project_list-item'>
              <h3>Aceso App</h3>
              <article className='list_item-description'>
                <p>App for Liberal Nurse</p>
                <ul className='list_item-details'>
                  <li>
                    <p>
                      <i className='ri-arrow-drop-right-fill'></i>
                      User Interface
                    </p>
                  </li>
                  <li>
                    <p>
                      <i className='ri-arrow-drop-right-fill'></i>
                      Development
                    </p>
                  </li>
                </ul>
                <div className='list_item-footer'>
                  <ul className='item_footer-tag'>
                    <li>
                      <span className='tag'>HTML</span>
                    </li>
                    <li>
                      <span className='tag'>CSS</span>
                    </li>
                    <li>
                      <span className='tag'>JS</span>
                    </li>
                    <li>
                      <span className='tag'>React</span>
                    </li>
                    <li>
                      <span className='tag'>Figma</span>
                    </li>
                    <li>
                      <span className='tag'>Supabase</span>
                    </li>
                  </ul>
                  <ul className='list_item-links'>
                    <li>
                      <a
                        href='https://www.codebreaker.fr'
                        target='_blank'
                        rel='noreferrer'
                      >
                        <i className='ri-link'></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://github.com/im-codebreaker/aceso-app'
                        target='_blank'
                        rel='noreferrer'
                      >
                        <i className='ri-github-fill'></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </article>

              <picture>
                <img
                  src='https://imcodebreaker-portfolio.s3.eu-west-3.amazonaws.com/aceso_ui.jpg'
                  alt=''
                />
              </picture>
            </li>
            <li className='project_list-item'>
              <h3>Node Secure</h3>
              <article className='list_item-description'>
                <p>Contributions to various projects</p>
                <ul className='list_item-details'>
                  <li>
                    <p>
                      <i className='ri-arrow-drop-right-fill'></i>
                      User Interface
                    </p>
                  </li>
                  <li>
                    <p>
                      <i className='ri-arrow-drop-right-fill'></i>
                      Development
                    </p>
                  </li>
                </ul>
                <div className='list_item-footer'>
                  <ul className='item_footer-tag'>
                    <li>
                      <span className='tag'>Open Source</span>
                    </li>
                    <li>
                      <span className='tag'>JS</span>
                    </li>
                    <li>
                      <span className='tag'>Figma</span>
                    </li>
                  </ul>
                  <ul className='list_item-links'>
                    <li>
                      <a
                        href='https://github.com/NodeSecure'
                        target='_blank'
                        rel='noreferrer'
                      >
                        <i className='ri-link'></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://github.com/NodeSecure'
                        target='_blank'
                        rel='noreferrer'
                      >
                        <i className='ri-github-fill'></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </article>

              <picture>
                <img
                  src='https://imcodebreaker-portfolio.s3.eu-west-3.amazonaws.com/nodesecure_ui.jpg'
                  alt=''
                />
              </picture>
            </li>
          </ul>
        </section>
        <section id='contact' className='section_contact'>
          <h2>Meet me</h2>
          <div className='section_contact-content'>
            <div className='contact_content-cta'>
              <p>
                I am available for a job as{' '}
                <strong>React Frontend Developer</strong> in Marseille or in
                full remote. <br />
                Do not hesitate to contact me.
              </p>
              <a className='button' href='tel:0669535614'>
                <i className='ri-phone-fill'></i> Get in touch
              </a>
            </div>
            <div className='contact_content-img'>
              <picture className='image-box'>
                <img
                  src='https://imcodebreaker-portfolio.s3.eu-west-3.amazonaws.com/hand_waves.png'
                  alt=''
                />
              </picture>
            </div>
          </div>
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
