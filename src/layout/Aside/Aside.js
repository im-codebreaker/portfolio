import * as React from 'react';
import { Link } from 'gatsby';

function Aside() {
  return (
    <aside className='aside_nav'>
      <nav className='aside_nav-links'>
        <ul className='hero_links-social'>
          <li>
            <a
              href='https://www.linkedin.com/in/mehdi-bouchard/'
              aria-label='Linkedin'
              target='_blank'
              rel='noreferrer'
            >
              <i className='ri-linkedin-fill'></i>
              <span className='display-none'>Linkedin</span>
            </a>
          </li>
          <li>
            <a
              href='https://twitter.com/ImCodebreaker'
              aria-label='Twitter'
              target='_blank'
              rel='noreferrer'
            >
              <i className='ri-twitter-fill'></i>
              <span className='display-none'>Twitter</span>
            </a>
          </li>
          <li>
            <a
              href='https://github.com/im-codebreaker'
              aria-label='Github'
              target='_blank'
              rel='noreferrer'
            >
              <i className='ri-github-fill'></i>
              <span className='display-none'>Github</span>
            </a>
          </li>
        </ul>
        <div className='hero_links-languages'>
          <Link to='/'>FR | </Link>
          <Link to='/en'>EN</Link>
        </div>
      </nav>
    </aside>
  );
}

export { Aside };
