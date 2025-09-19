import React from 'react';
import { Link } from 'react-router-dom';
import { CardData } from './CardData';
import { CiHeart } from "react-icons/ci";
import { MdOutlineMenuBook } from "react-icons/md";
import { MdTimer } from "react-icons/md";



function Course() {
  return (
    <>
      <div className='flex flex-col lg:flex-row justify-between items-center mt-15 container mx-auto'>
        <div className='w-full lg:w-1/2'>
          <h5 className='text-red-500 font-semibold'>What's New</h5>
          <h2 className='text-3xl text-blue-950 font-bold mb-2'>Featured Courses</h2>
          <p className='text-gray-600'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan
            bibendum gravida maecenas augue elementum et neque. Suspendisse imperdiet.
          </p>
        </div>
        <button className='sm:mt-5 sm:self-start'>
          <Link to='/AllCourses' className="px-4 py-2 
                    rounded-full transition duration-300 
                    text-gray-600 hover:bg-purple-400
                    hover:text-white border-3
                    border-solid border-purple-300">
            All Courses
          </Link>
        </button>
      </div>





      {/* card */}
      <div className=" container mx-auto my-15 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CardData.map((card, id) => (
          <div key={id} className="bg-white rounded-lg cursor-pointer shadow-md p-4 hover:bg-blue-950 hover:text-white transition duration-500">
            <div className="w-full h-48 overflow-hidden rounded-md mb-3">
              <img src={card.mainimg} alt="course" className="w-full h-full object-cover" />
            </div>

            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-3">
                <img src={card.nameimg} alt="Instructor" className="w-12 h-12 rounded-full transition-transform duration-300 " />
                <div>
                  <h6 className="font-bold text-sm">{card.tittle}</h6>
                  <p className="text-gray-500 text-xs">{card.text}</p>
                </div>
              </div>
              <CiHeart className="text-xl text-red-400 cursor-pointer" />
            </div>

            <p className="text-xl font-bold mb-4">{card.description}</p>

            <div className="flex justify-between mb-2">
              <div className="flex items-center gap-1">
                <MdOutlineMenuBook size={20} className="text-red-400" />
                <span className=''>{card.lesson}</span>
                
              </div>
              <div className="flex items-center gap-1">
                <span><MdTimer size={20} className='text-gray-500'/></span>
               <span> {card.time}</span>
              </div>
            </div>

            <hr className="mb-4 text-gray-400" />

            <div className="flex justify-between items-center">
              <span>{card.rating}</span>
              <button className="px-4 py-3 rounded-full bg-white text-gray-500 border text-sm hover:bg-purple-400 hover:text-white transition duration-300">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>


    </>
  )
}

export default Course
