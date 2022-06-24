import * as React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import '../../sass/main.scss';
import '../404.scss';

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <html lang='en' />
        <title>Page not found - Bouchard Mehdi</title>
      </Helmet>
      <main className='container'>
        <section className='section_notfound'>
          <picture>
            <img
              src='https://imcodebreaker-portfolio.s3.eu-west-3.amazonaws.com/porfolio_notfound.png'
              alt=''
              width={640}
              height={640}
            />
          </picture>
          <div className='section_notfound-description'>
            <h1>Page not found</h1>
            <p>
              No need to panic! Who seeks finds.
              <br />
              While waiting for the page to be found, please wait on the home
              page.
            </p>
            <Link to='/en' className='button'>
              Back to home
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default NotFoundPage;
