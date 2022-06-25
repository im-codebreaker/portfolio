import * as React from 'react';
import './Footer.scss';

function Footer({ lang = 'fr' }) {
  return (
    <footer className='footer'>
      {lang === 'fr' ? (
        <p>
          Développé avec <span>💖</span> et 🎵
        </p>
      ) : (
        <p>
          Developed with <span>💖</span> and 🎵
        </p>
      )}
    </footer>
  );
}

export { Footer };
