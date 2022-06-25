import * as React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import { Header, Footer } from '../layout';
import '../sass/main.scss';
import './404.scss';

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <html lang='fr' />
        <title>Page introuvable - Bouchard Mehdi</title>
      </Helmet>
      <Header />
      <main class='container'>
        <section className='section_notfound'>
          <picture>
            <img
              src='https://imcodebreaker-portfolio.s3.eu-west-3.amazonaws.com/porfolio_notfound.png'
              alt='Différents élements 3D en lien avec un status 404'
              width={640}
              height={640}
            />
          </picture>
          <div className='section_notfound-description'>
            <h1>Page introuvable</h1>
            <p>
              Pas de panique ! Qui cherche trouve.
              <br />
              En attendant que la page soit retrouvée merci de patienter sur la
              page d'accueil.
            </p>
            <Link to='/' className='button'>
              Retour à l'accueil
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default NotFoundPage;
