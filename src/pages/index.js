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
        <html lang='fr' />
        <meta
          name='description'
          content='Bouchard Mehdi, Développeur FrontEnd React et Webdesigner dans le sud de la France.'
        />
      </Helmet>
      <Header />
      <main className='container'>
        <section className='section_hero'>
          <div className='section_hero-wrapper' ref={element}>
            <div className='section_hero-baseline'>
              <h1 className='hero_baseline-title'>
                <span className='greeting'>Hello Wolrd,</span>
                Développeur Frontend React, Webdesigner
              </h1>
              <Link to='#contact' className='button baseline_title-button'>
                Rencontrez-moi
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
            <h2>A propos de moi</h2>
            <p>
              Je m'appelle Mehdi,{' '}
              <strong>Développeur Frontend React et Webdesigner</strong> basé
              dans le sud de la France. Passionné par le web et les arts
              graphiques, je possède une double casquette{' '}
              <strong>Développeur/Designer</strong> me permettant d'intervenir
              depuis la phase de conception de l'interface graphique jusqu'à la
              phase d'intégration.
            </p>
            <p>
              Capable de travailler en toute autnomonie, mon excellent sens du
              relationnel me permet de facilement m'intégrer au sein d'une
              équipe. J' aimes utiliser mon temps libre pour monter en
              compétences, développer de nouveaux projets et participer à des
              projets Open Source.
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
            l'opportunité et le plaisir de contribuer.
          </p>
          <ul className='section_project-list'>
            <li className='project_list-item'>
              <h3>Le Naanifik</h3>
              <article className='list_item-description'>
                <p>Site vitrine pour un Food Truck</p>
                <ul className='list_item-details'>
                  <li>
                    <p>
                      <i className='ri-arrow-drop-right-fill'></i>
                      Interface Utilisateur
                    </p>
                  </li>
                  <li>
                    <p>
                      <i className='ri-arrow-drop-right-fill'></i>
                      Modélisation 3D
                    </p>
                  </li>
                  <li>
                    <p>
                      <i className='ri-arrow-drop-right-fill'></i>
                      Développement
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
                <p>Site vitrine pour mon Agence Web</p>
                <ul className='list_item-details'>
                  <li>
                    <p>
                      <i className='ri-arrow-drop-right-fill'></i>
                      Interface Utilisateur
                    </p>
                  </li>
                  <li>
                    <p>
                      <i className='ri-arrow-drop-right-fill'></i>
                      Modélisation 3D
                    </p>
                  </li>
                  <li>
                    <p>
                      <i className='ri-arrow-drop-right-fill'></i>
                      Développement
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
                <p>App pour Infirmier(e) Libéral(e)</p>
                <ul className='list_item-details'>
                  <li>
                    <p>
                      <i className='ri-arrow-drop-right-fill'></i>
                      Interface Utilisateur
                    </p>
                  </li>
                  <li>
                    <p>
                      <i className='ri-arrow-drop-right-fill'></i>
                      Développement
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
                <p>Contributions sur différents projets</p>
                <ul className='list_item-details'>
                  <li>
                    <p>
                      <i className='ri-arrow-drop-right-fill'></i>
                      Interface Utilisateur
                    </p>
                  </li>
                  <li>
                    <p>
                      <i className='ri-arrow-drop-right-fill'></i>
                      Développement
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
          <h2>Rencontrez-moi</h2>
          <div className='section_contact-content'>
            <div className='contact_content-cta'>
              <p>
                Je suis disponible pour un poste de{' '}
                <strong>Développeur Frontend React</strong> sur Marseille ou en
                full remote. <br />
                N'hésitez pas à prendre contact avec moi.
              </p>
              <a className='button' href='tel:0669535614'>
                <i className='ri-phone-fill'></i> Prendre contact
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
