import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "./swipercourses";
import HeroCards from './HeroCards';

function Categories() {
    return (
        <div className='bg-white'>
            <HeroCards/>
            <div className='flex flex-col lg:flex-row justify-between items-center mt-15 container mx-auto'>
                <div className='w-full lg:w-1/2'>
                    <h5 className='text-red-500 font-semibold'>Favourite Course</h5>
                    <h2 className='text-3xl text-blue-950 font-bold mb-2'>Top Category</h2>
                    <p className='text-gray-600'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan
                        bibendum gravida maecenas augue elementum et neque. Suspendisse imperdiet.
                    </p>
                </div>

                <button className='sm:mt-5 sm:self-start'>
                    <Link to='/Categories/AllCatogries' className="px-4 py-2 
                    rounded-full transition duration-300 
                    bg-white
                    text-gray-600 hover:bg-purple-400
                    hover:text-white border-3
                    border-solid border-purple-300">
                        All Categories
                    </Link>
                </button>
            </div>

            <Slider />
        </div>
    );
}

export default Categories;
