import React from 'react';

function About() {
  return (
    <div name='about' className='w-[full] h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div>
            <p className='sm:text-right text-4xl font-bold'>
              Hi. I'm Razvan, nice to meet you. Please take a look around my
              work.
            </p>
          </div>
          <div>
            <p>
              I have built a portfolio website using Javascript as a programming
              language with HTML & CSS for the design. The technologies were
              integrated into the React JS library. Also, the project is written
              using Tailwind CSS framework. After i finished up writing the
              source code i deployed it on Netlify in order to make it available
              for the potential employers. The source code of the project is
              also available on GitHub for an eventual check.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
