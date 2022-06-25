import * as React from 'react';

function French() {
  return (
    <>
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
                    aria-label='Lien vers le site'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <i className='ri-link'></i>
                    <span className='display-none'>Lien vers le site</span>
                  </a>
                </li>
                <li>
                  <a
                    href='https://github.com/im-codebreaker/le-naanifik'
                    aria-label='Lien vers le repository'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <i className='ri-github-fill'></i>
                    <span className='display-none'>
                      Lien vers le repository
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </article>

          <picture>
            <source
              srcSet='https://le-naanifik.s3.eu-west-3.amazonaws.com/naanifik_ui.webp'
              type='image/webp'
            />
            <img
              src='https://le-naanifik.s3.eu-west-3.amazonaws.com/naanifik_ui.jpg'
              alt='UI design du site LeNaanifik'
              loading='lazy'
              width={680}
              height={680}
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
                    aria-label='Lien vers le site'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <i className='ri-link'></i>
                    <span className='display-none'>Lien vers le site</span>
                  </a>
                </li>
                <li>
                  <a
                    href='https://github.com/im-codebreaker/code-breaker'
                    aria-label='Lien vers le repository'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <i className='ri-github-fill'></i>
                    <span className='display-none'>
                      Lien vers le repository
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </article>

          <picture>
            <source
              srcSet='https://imcodebreaker.s3.eu-west-3.amazonaws.com/codebreaker_ui.webp'
              type='image/webp'
            />
            <img
              src='https://imcodebreaker.s3.eu-west-3.amazonaws.com/codebreaker_ui.jpg'
              alt='UI design du site Code Breaker'
              loading='lazy'
              width={680}
              height={680}
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
                    aria-label='Lien vers le site'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <i className='ri-link'></i>
                    <span className='display-none'>Lien vers le site</span>
                  </a>
                </li>
                <li>
                  <a
                    href='https://github.com/im-codebreaker/aceso-app'
                    aria-label='Lien vers le repository'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <i className='ri-github-fill'></i>
                    <span className='display-none'>
                      Lien vers le repository
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </article>
          <picture>
            <source
              srcSet='https://imcodebreaker-portfolio.s3.eu-west-3.amazonaws.com/aceso_ui.webp'
              type='image/webp'
            />
            <img
              src='https://imcodebreaker-portfolio.s3.eu-west-3.amazonaws.com/aceso_ui.jpg'
              alt="UI design de l'app Aceso"
              loading='lazy'
              width={680}
              height={680}
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
                    aria-label='Lien vers le site'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <i className='ri-link'></i>
                    <span className='display-none'>Lien vers le site</span>
                  </a>
                </li>
                <li>
                  <a
                    href='https://github.com/NodeSecure'
                    aria-label='Lien vers le repository'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <i className='ri-github-fill'></i>
                    <span className='display-none'>
                      Lien vers le repository
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </article>

          <picture>
            <source
              srcSet='https://imcodebreaker-portfolio.s3.eu-west-3.amazonaws.com/nodesecure_ui.webp'
              type='image/webp'
            />
            <img
              src='https://imcodebreaker-portfolio.s3.eu-west-3.amazonaws.com/nodesecure_ui.jpg'
              alt="Logo de l'organisation NodeSecure"
              loading='lazy'
              width={680}
              height={680}
            />
          </picture>
        </li>
      </ul>
    </>
  );
}

function English() {
  return (
    <>
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
                    aria-label='Link to the site'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <i className='ri-link'></i>
                    <span className='display-none'>Link to the site</span>
                  </a>
                </li>
                <li>
                  <a
                    href='https://github.com/im-codebreaker/le-naanifik'
                    aria-label='Link to the repository'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <i className='ri-github-fill'></i>
                    <span className='display-none'>Link to the repository</span>
                  </a>
                </li>
              </ul>
            </div>
          </article>

          <picture>
            <source
              srcSet='https://le-naanifik.s3.eu-west-3.amazonaws.com/naanifik_ui.webp'
              type='image/webp'
            />
            <img
              src='https://le-naanifik.s3.eu-west-3.amazonaws.com/naanifik_ui.jpg'
              alt='UI design of LeNaanifik website'
              loading='lazy'
              width={680}
              height={680}
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
                    aria-label='Link to the site'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <i className='ri-link'></i>
                    <span className='display-none'>Link to the site</span>
                  </a>
                </li>
                <li>
                  <a
                    href='https://github.com/im-codebreaker/code-breaker'
                    aria-label='Link to the repository'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <i className='ri-github-fill'></i>
                    <span className='display-none'>Link to the repository</span>
                  </a>
                </li>
              </ul>
            </div>
          </article>

          <picture>
            <source
              srcSet='https://imcodebreaker.s3.eu-west-3.amazonaws.com/codebreaker_ui.webp'
              type='image/webp'
            />
            <img
              src='https://imcodebreaker.s3.eu-west-3.amazonaws.com/codebreaker_ui.jpg'
              alt='UI design of Code Breaker website'
              loading='lazy'
              width={680}
              height={680}
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
                    href='https://github.com/im-codebreaker/aceso-app'
                    aria-label='Link to the site'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <i className='ri-link'></i>
                    <span className='display-none'>Link to the site</span>
                  </a>
                </li>
                <li>
                  <a
                    href='https://github.com/im-codebreaker/aceso-app'
                    aria-label='Link to the repository'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <i className='ri-github-fill'></i>
                    <span className='display-none'>Link to the repository</span>
                  </a>
                </li>
              </ul>
            </div>
          </article>

          <picture>
            <source
              srcSet='https://imcodebreaker-portfolio.s3.eu-west-3.amazonaws.com/aceso_ui.webp'
              type='image/webp'
            />
            <img
              src='https://imcodebreaker-portfolio.s3.eu-west-3.amazonaws.com/aceso_ui.jpg'
              alt='UI design of the Aceso app'
              loading='lazy'
              width={680}
              height={680}
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
                    aria-label='Link to the site'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <i className='ri-link'></i>
                    <span className='display-none'>Link to the site</span>
                  </a>
                </li>
                <li>
                  <a
                    href='https://github.com/NodeSecure'
                    aria-label='Link to the repository'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <i className='ri-github-fill'></i>
                    <span className='display-none'>Link to the repository</span>
                  </a>
                </li>
              </ul>
            </div>
          </article>

          <picture>
            <source
              srcSet='https://imcodebreaker-portfolio.s3.eu-west-3.amazonaws.com/nodesecure_ui.webp'
              type='image/webp'
            />
            <img
              src='https://imcodebreaker-portfolio.s3.eu-west-3.amazonaws.com/nodesecure_ui.jpg'
              alt='Logo of the NodeSecure organization'
              loading='lazy'
              width={680}
              height={680}
            />
          </picture>
        </li>
      </ul>
    </>
  );
}

function Projects({ lang = 'fr' }) {
  return (
    <section className='section_project'>
      {lang === 'fr' ? <French /> : <English />}
    </section>
  );
}

export { Projects };
