import React from 'react';
import hero from '../../assets/Group 1.png';

function Home() {
  return (
    <div className="flex justify-center items-center h-screen lg:ml-36 sm:mt-2">
      <div className="md:flex items-center">
        <div>
          <div className="sm:text-[2.5rem] text-[1.825rem] font-bold text-center">
            Revolutionize Engineering-<br/>  Building Practical Skills <br/>  for the IT Sector
          </div>
          <p className="text-md  text-gray max-w-sm text-center">
          Top Talent Acquisition Pipeline and Student Community in Africa.
          </p>
          <div className="mt-6 flex justify-center">
            <button className="px-6 py-3 font-bold text-black bg-Teal rounded-lg mr-4 text-sm">
              Get Started
            </button>
            <button className="px-6 py-3 font-bold border border-solid border-gray rounded-lg text-sm">
              Discover
            </button>
          </div>
        </div>
        <div className="md:w-[45%]  ml-8">
          <img
            src={hero}
            alt=""
            className="max-w-full h-auto rounded-md"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
