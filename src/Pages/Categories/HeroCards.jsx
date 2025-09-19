import React from 'react';
import { GiPencilRuler } from "react-icons/gi";
import { IoPerson } from "react-icons/io5";
import { PiCertificateBold } from "react-icons/pi";
import { PiStudent } from "react-icons/pi";
import { Link } from 'react-router-dom';

const cards = [
  {
    id: 1,
    title: '10k',
    description: 'Online ',
    des: 'Courses',
    icon: <GiPencilRuler />,
    iconClass: 'text-red-500 bg-red-100 rounded-3xl p-4'
  },
  {
    id: 2,
    title: '186+',
    description: 'Expert tours',
    icon: <IoPerson />,
    iconClass: 'text-blue-800 bg-blue-100 rounded-3xl p-4'

  },
  {
    id: 3,
    title: '5K+',
    description: 'Ceritified ',
    des: 'Courses',
    icon: <PiCertificateBold />,
    iconClass: 'text-purple-950 bg-purple-100 rounded-3xl p-4'
  },
  {
    id: 4,
    title: '55K+',
    description: 'Online ',
    des: 'Students',
    icon: <PiStudent />,
    iconClass: 'text-sky-800 bg-sky-100 rounded-3xl p-4'
  },
]
function HeroCards() {
  return (
    <>
      <div className='container mx-auto mt-10 md:mt-20 flex flex-wrap justify-center gap-2 lg:gap-5'>
        {cards.map((card) => (
          <div
            key={card.id}
            className='sm:-mt-0 md:-mt-0 lg:-mt-10 bg-white rounded-3xl px-3 py-5 flex sm:flex-col lg:flex-row items-center gap-2 border-2 border-gray-200 
        transform transition duration-1000 hover:-translate-y-1 lg:hover:-translate-y-4
        sm:w-[100%] md:w-[100%] lg:w-[23%] max-w-[100%] '
          >
            <span className={card.iconClass}>
              {React.cloneElement(card.icon, { size: 40 })}
            </span>
            <div>
              <h2 className='text-xl font-bold'>{card.title}</h2>
              <p className='text-gray-600 text-sm'>{card.description}</p>
              <p className='text-gray-600 text-sm'>{card.des}</p>
            </div>
          </div>
        ))}
      </div>
    </>

  );
}

export default HeroCards;