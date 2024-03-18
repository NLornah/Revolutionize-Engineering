import React from 'react';
import Holder from '../../assets/div.image-holder.png';
// import { Tween } from 'jquery';y

const BlueContainer = () => {
  return (
    <div className="flex justify-center mt-8">
      <div className="container mx-auto bg-[#27AAE1] text-white p-8 pb-12 flex flex-col lg:flex-row items-center rounded-xl" style={{ height: '350px', width: '90vw', maxWidth: '800px', marginTop: '80px' }}>
        <div className="w-full lg:w-1/2 pr-8 mb-6 lg:mb-0 lg:pr-0 lg:order-last">
          <h2 className="text-4xl font-bold mb-4">Get your Matched Jobs in a few minutes.</h2>
          <p className="text-lg">Find your dream job & earn from world leading brands.</p>
          <button className="mt-4 bg-white text-[#27AAE1] py-2 px-4 rounded-lg hover:bg-blue-100 transition duration-300">Upload your CV</button>
        </div>
        <div className="w-full lg:w-1/2">
          <img src={Holder} alt="" className="w-full rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default BlueContainer;

