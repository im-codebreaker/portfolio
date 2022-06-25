import * as React from 'react';

function French() {
  return (
    <>
      <h2>Rencontrez-moi</h2>
      <div className='section_contact-content'>
        <div className='contact_content-cta'>
          <p>
            Je suis disponible pour un poste de{' '}
            <strong>Développeur Frontend React</strong> sur Marseille ou en full
            remote. <br />
            N'hésitez pas à prendre contact avec moi.
          </p>
          <a className='button' href='tel:0669535614'>
            <i className='ri-phone-fill'></i> Prendre contact
          </a>
        </div>
        <div className='contact_content-img'>
          <picture className='image-box'>
            <source
              srcSet='https://imcodebreaker-portfolio.s3.eu-west-3.amazonaws.com/hand_waves.webp'
              type='image/webp'
            />
            <img
              src='https://imcodebreaker-portfolio.s3.eu-west-3.amazonaws.com/hand_waves.png'
              alt='Emoji main en 3D'
              loading='lazy'
              width={320}
              height={320}
            />
          </picture>
        </div>
      </div>
    </>
  );
}

function English() {
  return (
    <>
      <h2>Meet me</h2>
      <div className='section_contact-content'>
        <div className='contact_content-cta'>
          <p>
            I am available for a job as{' '}
            <strong>React Frontend Developer</strong> in Marseille or in full
            remote. <br />
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
              alt='Emoji hand in 3D'
              loading='lazy'
              width={320}
              height={320}
            />
          </picture>
        </div>
      </div>
    </>
  );
}

function Contact({ lang = 'fr' }) {
  return (
    <section id='contact' className='section_contact'>
      {lang === 'fr' ? <French /> : <English />}
    </section>
  );
}

export { Contact };
