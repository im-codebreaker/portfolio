import * as React from 'react';

function French({ element }) {
  return (
    <div className='section_hero-wrapper' ref={element}>
      <div className='section_hero-baseline'>
        <h1 className='hero_baseline-title'>
          <span className='greeting'>Hello Wolrd,</span>
          Développeur Frontend React, Webdesigner
        </h1>
        <a href='#contact' className='button baseline_title-button'>
          Rencontrez-moi
        </a>
      </div>
      <picture className='section_hero-image'>
        <source
          srcSet='https://imcodebreaker-portfolio.s3.eu-west-3.amazonaws.com/room.webp'
          type='image/webp'
          media='(min-width: 48em)'
        />
        <source
          srcSet='https://imcodebreaker-portfolio.s3.eu-west-3.amazonaws.com/room_small.webp'
          type='image/webp'
        />
        <img
          src='https://imcodebreaker-portfolio.s3.eu-west-3.amazonaws.com/room_small.png'
          width={1080}
          height={1080}
          alt='Rendu 3D de mon espace de travail'
        />
      </picture>
    </div>
  );
}

function English({ element }) {
  return (
    <div className='section_hero-wrapper' ref={element}>
      <div className='section_hero-baseline'>
        <h1 className='hero_baseline-title'>
          <span className='greeting'>Hello Wolrd,</span>
          React Frontend Developer, Webdesigner
        </h1>
        <a href='#contact' className='button baseline_title-button'>
          Meet me
        </a>
      </div>
      <picture className='section_hero-image'>
        <source
          srcSet='https://imcodebreaker-portfolio.s3.eu-west-3.amazonaws.com/room.webp'
          type='image/webp'
          media='(min-width: 48em)'
        />
        <source
          srcSet='https://imcodebreaker-portfolio.s3.eu-west-3.amazonaws.com/room_small.webp'
          type='image/webp'
        />
        <img
          src='https://imcodebreaker-portfolio.s3.eu-west-3.amazonaws.com/room_small.png'
          width={660}
          height={660}
          alt='3D render of my workspace'
        />
      </picture>
    </div>
  );
}
function Hero({ element, lang = 'fr' }) {
  return (
    <section className='section_hero'>
      {lang === 'fr' ? (
        <French element={element} />
      ) : (
        <English element={element} />
      )}
    </section>
  );
}

export { Hero };
