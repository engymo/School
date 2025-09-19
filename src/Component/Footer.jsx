import React from 'react';
import logoimg from '../assets/logo.svg';
import locimg from '../assets/icon-20.svg';
import textimg from '../assets/icon-19.svg';
import phoneimg from '../assets/icon-21.svg';


function Footer() {
  return (
    <>
      <div className='bg-white '>
        <div className='container
        mx-auto py-10 '>
          <div className='
        col-1 sm:col-1 md:col-3 lg:col-4
        justify-center gap-5 
        flex flex-col md:flex-row'>
            <div className='xs:w-full lg:w-1/2'>
              <img src={logoimg} alt="Logo" className='w-40 ' />
              <p className='text-gray-500 text-sm my-5'> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ut consequat mauris Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Ut consequat mauris
              </p>
              <p className='text-gray-500 text-sm '>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ut consequat mauris Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Ut consequat mauris
              </p>
            </div>

            <div className='text-sm  w-1/4 cursor-pointer'>
              <h3 className='text-blue-950 text-lg font-bold'>For Instructor</h3>
              <h6 className='text-gray-500 hover:text-red-500 py-2'>Profile</h6>
              <h6 className='text-gray-500 hover:text-red-500 py-2'>Login</h6>
              <h6 className='text-gray-500 hover:text-red-500 py-2'>Register</h6>
              <h6 className='text-gray-500 hover:text-red-500 py-2'>Instructor</h6>
              <h6 className='text-gray-500 hover:text-red-500 py-2'>Dashboard</h6>
            </div>

            <div className='text-sm w-1/4 cursor-pointer'>
              <h3 className='text-blue-950 text-lg font-bold'>For Student</h3>
              <h6 className='text-gray-500 hover:text-red-500 py-2'>Profile</h6>
              <h6 className='text-gray-500 hover:text-red-500 py-2'>Login</h6>
              <h6 className='text-gray-500 hover:text-red-500 py-2'>Register</h6>
              <h6 className='text-gray-500 hover:text-red-500 py-2'>Student</h6>
              <h6 className='text-gray-500 hover:text-red-500 py-2'>Dashboard</h6>
            </div>

            <div className='text-sm lg:w-1/4 xs:w-full'>
              <h3 className='text-blue-950 text-lg font-bold pb-2'>Address</h3>
              <input className='text-gray-800 outline-none border-2 border-gray-300 p-2 rounded-md text-sm' type="text" placeholder='Enter your Email Address' />
              <div className='flex flex-row gap-2'>
                <img src={locimg} className='w-5' />
                <p className='text-gray-500 text-sm py-2 '>3556 Beech Street, San Francisco, California, CA 94108</p>
              </div>
              <div className='flex flex-row gap-2'>
                <img src={textimg} className='w-5' />
                <p className='text-gray-500 text-sm py-2'>dreamslms@example.com</p>
              </div>
              <div className='flex flex-row gap-2'>
                <img src={phoneimg} className='w-5' />
                <p className='text-gray-500 text-sm py-2'>+19 123-456-7890</p>
              </div>
            </div>

          </div>
          <hr className='border-gray-300 my-5 ' />
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <p className='text-gray-500 text-xs'>© 2023 Dream LMS. All rights reserved.</p>
            <div className='flex flex-row gap-4 text-xs cursor-pointer'>
              <h6 className='text-gray-500 hover:text-red-500 py-2'>Privacy Policy</h6>
              <h6 className='text-gray-500 hover:text-red-500 py-2'>Terms of Use</h6>
              <h6 className='text-gray-500 hover:text-red-500 py-2'>Contact Us</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer
