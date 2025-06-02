import React from 'react';
import HeroImage from '../assets/hero-image.png';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <div id="hero" className='bg-black text-white text-center py-16'>
      <img
        src={HeroImage}
        alt='Profile'
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105'
      />

      <h1 className='text-4xl font-bold'>
        I'm{' '}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
          <Typewriter
            words={['Fullstack Developer', 'Java Developer', 'Vice President Regex Club']}
            loop={true}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </span>
      </h1>

      <p className='mt-4 text-lg text-gray-300 max-w-2xl mx-auto'>
        Crafting seamless experiences where frontend elegance meets backend precision.  
        From pixel to database, turning ideas into interactive, scalable reality.
      </p>

      <div className='mt-8'>
        <a
          href='/resume.pdf'
          download
          className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-6 py-2 rounded-full inline-block'
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
