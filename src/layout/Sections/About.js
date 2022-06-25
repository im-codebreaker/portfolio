import * as React from 'react';

function French() {
  return (
    <>
      <article className='section_about-description'>
        <h2>A propos de moi</h2>
        <p>
          Je m'appelle Mehdi,{' '}
          <strong>Développeur Frontend React et Webdesigner</strong> basé dans
          le sud de la France. Passionné par le web et les arts graphiques, je
          possède une double casquette <strong>Développeur/Designer</strong> me
          permettant d'intervenir depuis la phase de conception de l'interface
          graphique jusqu'à la phase d'intégration.
        </p>
        <p>
          Capable de travailler en toute autonomie, mon excellent sens du
          relationnel me permet de facilement m'intégrer au sein d'une équipe.
          J' aimes utiliser mon temps libre pour monter en compétences,
          développer de nouveaux projets et participer à des projets Open
          Source.
        </p>
      </article>
      <picture className='section_about-image'>
        <source
          srcSet='https://imcodebreaker-portfolio.s3.eu-west-3.amazonaws.com/codebreaker_card.webp'
          type='image/webp'
        />
        <img
          src='https://imcodebreaker-portfolio.s3.eu-west-3.amazonaws.com/codebreaker_card.png'
          alt='Avatar en 3D'
          loading='lazy'
          width={434}
          height={554}
        />
      </picture>
    </>
  );
}

function English() {
  return (
    <>
      <article className='section_about-description'>
        <h2>About Me</h2>
        <p>
          My name is Mehdi,{' '}
          <strong>React Frontend Developer and Webdesigner</strong> based in the
          south of France. Passionnate about web and graphic arts, i'm wearing
          two hats <strong>Developer/Designer</strong> which allow me to work
          from the design phase of the UI to the development phase.
        </p>
        <p>
          Able to work independently, my excellent communication skills allow me
          to easily integrate into a team. I like to use my free time to develop
          my skills and develop new projects and participate in Open Source
          projects.
        </p>
      </article>
      <picture className='section_about-image'>
        <img
          src='https://imcodebreaker-portfolio.s3.eu-west-3.amazonaws.com/codebreaker_card.png'
          alt='Avatar in 3D'
          loading='lazy'
          width={434}
          height={554}
        />
      </picture>
    </>
  );
}

function About({ lang = 'fr' }) {
  return (
    <section className='section_about'>
      {lang === 'fr' ? <French /> : <English />}
    </section>
  );
}

export { About };
