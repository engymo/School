import React from 'react'
import { FaStar } from "react-icons/fa";


function Hero() {
    return (
        <div className="container mx-auto items-center justify-between  mt-4 lg:mt-3 ">
            <h4 className=" text-blue-950 opacity-75 text-xl font-bold">
                Trusted by over 15K Users<br />
                worldwide since 2022
            </h4>
            <div className="flex gap-10 items-center">
                <p className="text-blue-950 text-5xl font-extrabold">20+</p>
                <p className="text-blue-950 text-5xl font-extrabold">4.5 </p>
                <span className="text-yellow-500 flex gap-2 ">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </span>
            </div>
        </div>
    )
}

export default Hero;
