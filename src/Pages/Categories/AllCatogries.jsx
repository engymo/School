import React from 'react';
import { Link } from 'react-router-dom';
// import bgimg from "../assets/download3.jpeg";

import categories1 from "../../assets/categories-icon.png";
import categories2 from "../../assets/categories-icon-02.png";
import categories3 from "../../assets/categories-icon-03.png";
import categories4 from "../../assets/categories-icon-04.png";
import categories5 from "../../assets/categories-icon-01.png";

const cato = [
    { title: 'GatsBy', courses: 2, img: categories1 },
    { title: 'GraphQL', courses: 2, img: categories2 },
    { title: 'Angular', courses: 4, img: categories3 },
    { title: 'Bootstrap', courses: 3, img: categories4 },
    { title: 'React', courses: 6, img: categories5 },
    { title: 'GatsBy', courses: 2, img: categories1 },
    { title: 'Next.js', courses: 5, img: categories2 },
    { title: 'Vue.js', courses: 3, img: categories3 },
    { title: 'Tailwind CSS', courses: 4, img: categories4 },
    { title: 'Sass', courses: 2, img: categories5 },
    { title: 'Node.js', courses: 6, img: categories1 },
    { title: 'Express.js', courses: 4, img: categories2 },
    { title: 'Django', courses: 3, img: categories3 },
    { title: 'Flask', courses: 5, img: categories4 },
    { title: 'Ruby on Rails', courses: 2, img: categories5 },
];

function AllCatogries() {
    return (
        <>
            <div className='container mx-auto flex flex-col md:flex-row items-center justify-between mt-22 lg:mt-25'>
                <h1 className='mx-auto pb-10 text-4xl font-extrabold text-blue-950'>Categories</h1>
            </div>
            <div className='flex flex-row justify-center items-center gap-3'>
                <Link to="/" className=' font-bold text-blue-950'>Home</Link>
                <span className='mx-2 w-2 h-1 border-2 border-red-400'></span>
                <Link to="/Categories" className='font-bold text-blue-950 opacity-70'>Categories</Link>
            </div>

            <div className='container mx-auto mt-10 md:mt-10 grid grid-cols-1 
            sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 justify-center gap-2 '>
                {cato.map((cat) => (
                    <div key={cat.id} className='bg-white rounded-xl px-3 py-5 mb-2
                    flex flex-col lg:flex-row items-center gap-3 border-2 border-solid border-gray-200'>
                        <span className='text-red-500 rounded-3xl'>
                            <img src={cat.img} alt={cat.title} className="w-20 h-20" />
                        </span>
                        <div className='flex flex-col lg:flex-row items-center justify-between cursor-pointer'>
                            <h2 className='text-l font-bold'>{cat.title}</h2>
                            <p className='bg-red-500 text-white font-bold rounded-full px-3 py-1'>
                                2
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
export default AllCatogries;