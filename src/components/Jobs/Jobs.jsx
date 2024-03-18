import React from 'react'
import {BiTimeFive} from 'react-icons/bi'
import Logo1 from '../../assets/logos.png'


const Data =[
{
  id:1,
  image: Logo1,
  title: 'Web Developer',
  time: 'Now',
  location: 'Kenya',
  desc: '  Lorem, ipsum dolor sit amet consectetur adipisicing elit. enim esse explicabo libero magni dignissimos rem quaerat',
  company: 'Dukatech Solutions'
},
{
  id:2,
  image: Logo1,
  title: 'Web Designer',
  time: 'Now',
  location: 'Kenya',
  desc: '  Lorem, ipsum dolor sit amet consectetur adipisicing elit. enim esse explicabo libero magni dignissimos rem quaerat',
  company: 'Nathans'
},
{
  id:3,
  image: Logo1,
  title: 'Graphic Designer',
  time: 'Now',
  location: 'Kenya',
  desc: '  Lorem, ipsum dolor sit amet consectetur adipisicing elit. enim esse explicabo libero magni dignissimos rem quaerat',
  company: 'Taifa Leo'
},
{
  id:4,
  image: Logo1,
  title: 'Blockchain',
  time: 'Now',
  location: 'Kenya',
  desc: '  Lorem, ipsum dolor sit amet consectetur adipisicing elit. enim esse explicabo libero magni dignissimos rem quaerat',
  company: 'Antler'
},
{
  id:5,
  image: Logo1,
  title: 'Front-End Dev.',
  time: 'Now',
  location: 'Kenya',
  desc: '  Lorem, ipsum dolor sit amet consectetur adipisicing elit. enim esse explicabo libero magni dignissimos rem quaerat',
  company: 'Match ltd.'
},
{
  id:6,
  image: Logo1,
  title: 'FullStack Dev.',
  time: 'Now',
  location: 'Kenya',
  desc: '  Lorem, ipsum dolor sit amet consectetur adipisicing elit. enim esse explicabo libero magni dignissimos rem quaerat',
  company: 'Equity Bank'
},
{
  id:7,
  image: Logo1,
  title: 'App Developer',
  time: 'Now',
  location: 'Kenya',
  desc: '  Lorem, ipsum dolor sit amet consectetur adipisicing elit. enim esse explicabo libero magni dignissimos rem quaerat',
  company: 'KPMG'
},
{
  id:8,
  image: Logo1,
  title: 'AI Developer',
  time: 'Now',
  location: 'Kenya',
  desc: '  Lorem, ipsum dolor sit amet consectetur adipisicing elit. enim esse explicabo libero magni dignissimos rem quaerat',
  company: 'Oracle'
},
]

function Jobs() {
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center mb-12
       py-10">

       
       {
        Data.map(({id,image,title,time,location,desc,company}) =>{
          return (
            <div key={id} className='group group/item singleJob w-[270px] p-[20px] bg-white rounded-[10px]
            hover:bg-[#27AAE1] shadow-lg shadow-slate-400/700 hover:shadow-lg'>
     
              <span className='flex justify-between items-center gap-4'>
                <h1 className='text-[16px] font-semibold text-black
                group-hover:text-white'>{title}</h1>
                <span className='flex items-center text-[#ccc] gap-1'>
                    <BiTimeFive/>{time}
                </span>
              </span>
              <h6 className='text-[#ccc] mt-[-40px]'>{location}</h6>
     
              <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px]
              group-hover:text-white'>
               {desc}
              </p>
     
              <div className='company flex items-center gap-2'>
                <img src={image} alt='Company Logo' className='w-[20px]'/>
                <span className='text-[14px] py-[1rem] block group-hover:text-white'> {company}</span>
     
             </div>
     
             <button className='border-[2px] border-black rounded-[10px] block p-[10px] w-full
              text-[14px] font-semibold text-black hover:bg-white group-hover/
              item:text-white group-hover:text-black'>
                Apply Now
             </button>
     
            </div>
          )
        })
       }

      </div>
    </div>
  )
}

export default Jobs