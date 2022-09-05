import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

function Home() {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, my name is </p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Calota Razvan
        </h1>
        <h2 className='text-4xl sm:7xl font-bold text-[#8892b0]'>
          I'm a Frontend Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px] '>
          I'm specialized in Javascript, HTML and CSS integrated in the React
          library. I also know how to design using Tailwind CSS. Currently i'm
          taking a Typescript course in order to expand my knowledge and become
          a top Frontend Developer. The next step i want to dive in, in my web
          Development career, is to also learn a Backend programming language
          like NODE.js in order to become a Full Stack Developer.
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            View Work
            <span className='hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
