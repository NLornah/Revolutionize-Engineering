import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { BsHouseDoor } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';

function Search() {
  return (
    <div className='searchDiv grid gap-10 bg-slate-200 rounded-[10px] p-[3rem]'>
      <form action=''>
        <div className='firstDiv flex flex-col md:flex-row bg-white justify-between items-center rounded-[8px] gap-[10px] p-5 shadow-lg shadow-greyIsh-700'>

          <div className='flex gap-4 items-center'>
            <AiOutlineSearch className='text-[25px] icon' />
            <input
              type='text'
              className='bg-transparent text-[#27AAE1] focus:outline-none w-full md:w-auto'
              placeholder='Search job Here...'
            />
            <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon' />
          </div>

          <div className='flex gap-4 items-center'>
            <BsHouseDoor className='text-[25px] icon' />
            <input
              type='text'
              className='bg-transparent text-[#27AAE1] focus:outline-none w-full md:w-auto'
              placeholder='Search by Company'
            />
            <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon' />
          </div>

          <div className='flex gap-4 items-center'>
            <CiLocationOn className='text-[25px] icon' />
            <input
              type='text'
              className='bg-transparent text-[#27AAE1] focus:outline-none w-full md:w-auto'
              placeholder='Search by Location'
            />
            <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon' />
          </div>

          <button className='bg-[#27AAE1] h-full p-5 px-10 rounded-[10px] text-white cursor-pointer hover:bg-blue-300'>
            Search
          </button>

        </div>
      </form>

       <div className='secDiv flex flex-col md:flex-row items-center gap-4 md:gap-2 justify-center'>

        <div className='singleSearch flex items-center gap-2'>
          <label htmlFor='relevance' className='text-[#808080] font-semibold'>Sort by: </label>
          <select name='' id="relevance" className='bg-white rounded-[3px] px-4 py-1'>
            <option value="">Relevance</option>
            <option value="">Inclusive</option>
            <option value="">Starts With</option>
            <option value="">Contains</option>
          </select>
        </div>

        <div className='singleSearch flex items-center gap-2'>
          <label htmlFor='type' className='text-[#808080] font-semibold'>Type by: </label>
          <select name='' id="type" className='bg-white rounded-[3px] px-4 py-1'>
            <option value="">Full-time</option>
            <option value="">Remote</option>
            <option value="">Contract</option>
            <option value="">Part-time</option>
          </select>
        </div>

        <div className='singleSearch flex items-center gap-2'>
          <label htmlFor='level' className='text-[#808080] font-semibold'>Level by: </label>
          <select name='' id="level" className='bg-white rounded-[3px] px-4 py-1'>
            <option value="">Senior</option>
            <option value="">Beginner</option>
            <option value="">Intermediate</option>
            <option value="">Advocate</option>
          </select>
        </div>

        <span className='text-[#a1a1a1] cursor-pointer'>Clear All</span>
      </div>
    </div>
  );
}

export default Search;
