import React, { useState, useEffect } from 'react';
import logo from '../../images/logo.png';
import Icon from '../Icon';
import NavItems from './NavItems';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-gray-900 shadow-lg' : 'bg-black-200'
      }`}
    >
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="mx-10 flex items-center justify-between">
          <a href="#main" className="flex-shrink-0">
            <img src={logo} alt="logo" className="h-8 w-auto sm:h-12" />
          </a>

          <div className="hidden md:block">
            <ul className="flex items-center space-x-6 lg:space-x-8">
              <NavItems title="Home" sectionId="home" />
              <NavItems title="About" sectionId="about" />
              <NavItems title="Projects" sectionId="projects" />
              {/* <NavItems title="Contact" sectionId="contact" /> */}
            </ul>
          </div>

          <button
            className="focus:outline-none md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <Icon
              icon={isMenuOpen ? 'close' : 'menu'}
              className="h-6 w-6 fill-slate-200 hover:fill-yellow-300 sm:h-7 sm:w-7"
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} `}>
        <div className="absolute left-0 right-0 h-dvh bg-gray-800 px-4 py-3 text-center font-mova text-xl font-black shadow-lg">
          <ul className="space-y-2">
            <NavItems title="Home" sectionId="home" />
            <NavItems title="About" sectionId="about" />
            <NavItems title="Projects" sectionId="projects" />
            <NavItems title="Contact" sectionId="contact" />
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
