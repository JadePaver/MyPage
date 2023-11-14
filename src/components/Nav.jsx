import  { useEffect, useState } from 'react';
import logo from '../assets/logo.svg';

export const Nav = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollPos > currentScrollPos;

      setPrevScrollPos(currentScrollPos);
      setVisible(visible);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <nav id='nav' className={`nav main-nav ${visible ? '' : 'nav-hidden'}`}>
      <img className="logo" src={logo} alt="Your Logo" width="40" height="40" />
      <ul>
        <li><a href="index.html">Profile</a></li>
        <li><a href="store.html">Projects</a></li>
        <li><a href="about.html">Design</a></li>
        <li><a href="about.html">About</a></li>
      </ul>
    </nav>
  );
};
