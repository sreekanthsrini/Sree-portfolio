import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About Me', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#project' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24 shadow-md sticky top-0 z-50'>
      <div className='py-3 flex justify-between items-center'>

        {/* Left Logo */}
        <div className='text-6xl font-extrabold animate-bounce-slow bg-gradient-to-r from-blue-500 via-white to-blue-700 text-transparent bg-clip-text drop-shadow-lg'>
          S
        </div>

        {/* Desktop Nav Links */}
        <div className='hidden md:flex gap-6 text-lg font-medium'>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className='hover:text-blue-400 transition-all duration-300'
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Icons */}
        <div className='hidden md:flex items-center gap-4'>
          <a href="https://www.linkedin.com/in/sreekanth-r-s/" target="_blank" rel="noopener noreferrer" className='hover:text-blue-400 transition-transform hover:scale-110'>
            <FaLinkedin size={20} />
          </a>
          <a href="https://github.com/sreekanthsrini" target="_blank" rel="noopener noreferrer" className='hover:text-blue-400 transition-transform hover:scale-110'>
            <FaGithub size={20} />
          </a>
          <a href="mailto:sreekanthofficial010@gmail.com" className='hover:text-blue-400 transition-transform hover:scale-110'>
            <FaEnvelope size={20} />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className='md:hidden'>
          <button onClick={toggleMenu}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className='md:hidden flex flex-col gap-4 px-6 pb-6 text-lg font-medium bg-black'>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              className='hover:text-blue-400 transition-all duration-300'
            >
              {link.name}
            </a>
          ))}

          {/* Mobile Icons */}
          <div className='flex gap-4 mt-4'>
            <a href="https://www.linkedin.com/in/sreekanth-r-s/" target="_blank" rel="noopener noreferrer" className='hover:text-blue-400 transition-transform hover:scale-110'>
              <FaLinkedin size={20} />
            </a>
            <a href="https://github.com/sreekanthsrini" target="_blank" rel="noopener noreferrer" className='hover:text-blue-400 transition-transform hover:scale-110'>
              <FaGithub size={20} />
            </a>
            <a href="mailto:sreekanthofficial010@gmail.com" className='hover:text-blue-400 transition-transform hover:scale-110'>
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
