import React from 'react';
import { NavHashLink } from 'react-router-hash-link';
import up from '../images/up-icon.png';
import close from '../images/close.png'

function Navbar() {

  const showMenu = () => {
    document.getElementById('nav-menu').classList.add('show-menu');
  }

  const hideMenu = () => {
    document.getElementById('nav-menu').classList.remove('show-menu');
  }

  return (
    <header className='header' id='header'>
      <nav className='container nav'>
        <a href='/#home' className='nav__logo'>Abhishek</a>
        <div className='nav__menu' id='nav-menu'>
          <ul className='nav__list grid'>
            <li className="nav__items">
              <NavHashLink to='/#home' className="nav__link" onClick={hideMenu}>
                  <img src='https://www.svgrepo.com/show/207517/home-house.svg' alt='home' /> Home
              </NavHashLink>
            </li>
            <li className="nav__items">
              <NavHashLink to='/#about' className="nav__link" onClick={hideMenu}>
                  <img src='https://www.svgrepo.com/show/24604/user.svg' alt='user' /> About
              </NavHashLink>
            </li>
            <li className="nav__items">
              <NavHashLink to='/#experience'className="nav__link" onClick={hideMenu}>
                <img src='https://www.svgrepo.com/show/218238/suitcase-briefcase.svg' alt='experience' /> Experience
              </NavHashLink>
            </li>
            <li className="nav__items">
              <NavHashLink to='/#skils'className="nav__link" onClick={hideMenu}>
                <img src='https://www.svgrepo.com/show/218253/skills.svg' alt='skills' /> Skills
              </NavHashLink>
            </li>
            <li className="nav__items">
              <NavHashLink to='/#portfolio' className="nav__link" onClick={hideMenu}>
                  <img src='https://www.svgrepo.com/show/3132/pass.svg' alt='portfolio' /> Portfolio
              </NavHashLink>
            </li>
            <li className="nav__items">
              <NavHashLink to='/#contact' className="nav__link" onClick={hideMenu}>
                  <img src='https://www.svgrepo.com/show/164036/contacts.svg' alt='contact' /> Contact Me
              </NavHashLink>
            </li>
          </ul>
          <img className='nav__close'
               onClick={hideMenu}
               src='https://www.svgrepo.com/show/286790/cross-close.svg'
               alt='close' id='nav-close'/>
        </div>
        <div className='nav__btns'>
          <div className="nav__toggle" id='nav-toggle' onClick={showMenu}>
            <img src={up}/>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
