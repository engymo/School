import React from "react";
import Headerimg from '../../assets/object.png';
import { GoArrowRight } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import Hero from "../HeroSection/Hero";
import Categories from "../Categories/Categories";
import Course from "../Courses/Course";

export default function Home() {
  return (
    <>
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between mt-20 lg:mt-40">
        {/* Left Section */}
        <div className="flex flex-col ">
          <h3 className="mb-6 text-blue-950 text-base sm:text-lg">The Leader in Online Learning</h3>
          <h1 className="text-5xl font-extrabold tracking-wide  text-blue-950 ">
            Engaging &<br /> Accessible Online<br /> Courses For All
          </h1>

          <div className="relative flex items-center mt-15 w-full lg:w-170">
            <input
              className="p-4 pb-4 pe-6 ps-12 sm:pt-5 sm:pb-5 sm:pe-6 sm:ps-12 lg:pt-6 lg:pb-6 lg:pe-6 lg:ps-12 w-full max-w-xl bg-white border-none outline-none rounded-full shadow-md"
              placeholder="search school, Online education centers etc..."
              type="search"
              name="search"
            />

            {/* Search Icon */}
            <span className="absolute left-6 text-red-500 font-extrabold cursor-pointer hidden sm:inline">
              <IoSearch size={20} />
            </span>

            {/* Arrow Icon */}
            <span className="absolute right-30 font-extrabold text-white bg-red-400 hover:bg-red-500 rounded-full p-2 cursor-pointer hidden lg:inline">
              <GoArrowRight size={30} />
            </span>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 mt-0 flex justify-center">
          <img src={Headerimg} alt="Header" className="w-full max-w-md md:max-w-lg lg:max-w-md h-auto " />
        </div>
      </div>
      <Hero />
      <Categories />
      <Course />
    </>
  );
}
