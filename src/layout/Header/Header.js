import * as React from 'react';
import './Header.scss';

function Header() {
  const [theme, setTheme] = React.useState('light');

  function handleThemeSwitch() {
    if (document.documentElement.dataset.theme === 'light') {
      document.documentElement.dataset.theme = 'dark';
      setTheme('dark');
    } else {
      document.documentElement.dataset.theme = 'light';
      setTheme('light');
    }
  }
  return (
    <header className='header'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='40'
        height='40'
        viewBox='0 0 40 40'
      >
        <path
          className='logo'
          d='M0 40V0H30V15H40V40H10V22H16V35H34V20H20V15H24V5H16V15H10V5H6V40H0Z'
        />
      </svg>
      <button className='theme_switcher' onClick={handleThemeSwitch}>
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>
    </header>
  );
}

export { Header };
