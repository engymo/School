import { useState, useEffect } from "react";
import navlogo from "../assets/logo.svg";
import { Link } from 'react-router-dom';
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { GoChevronDown } from "react-icons/go";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md" : "bg-transparent"}`}>
            <div className="container mx-auto py-4 flex justify-between items-center">

                <img src={navlogo} alt="Logo" style={{ width: 170 }} />

                {!isOpen && (
                    <div className="lg:hidden flex justify-between items-center ml-auto">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-700 hover:text-red-500 transition-colors duration-300"
                        >
                            <HiMenu size={30} />
                        </button>
                    </div>
                )}

                {isOpen && (
                    <>
                        <div
                            onClick={toggleMenu}
                            className="absolute top-5 right-5 z-30 lg:hidden text-gray-700 hover:text-red-500 transition-colors duration-300 cursor-pointer"
                        >
                            <IoClose size={30} />
                        </div>

                        <div className="fixed gap-6 w-screen min-h-screen overflow-y-hidden items-center top-0 right-0 z-20 bg-white flex flex-col duration-300 ease-in-out font-semibold">
                            <Link to="/" className="mt-20 text-gray-700 hover:text-red-500 transition-colors duration-300">Home</Link>
                            <Link to="/about" className="text-gray-700 hover:text-red-500 transition-colors duration-300">About Us</Link>
                            <Link to="/Instructors" className="text-gray-700 hover:text-red-500 transition-colors duration-300">Instructors</Link>
                            <Link to="/Students" className="text-gray-700 hover:text-red-500 transition-colors duration-300">Students</Link>
                            <Link to="/Pages" className="text-gray-700 hover:text-red-500 transition-colors duration-300">Pages</Link>
                            <Link to="/Blog" className="text-gray-700 hover:text-red-500 transition-colors duration-300">Blog</Link>
                            <Link to="/Contact" className="text-gray-700 hover:text-red-500 transition-colors duration-300">Contact Us</Link>

                            <Link
                                to="/Login"
                                className={`px-8 py-2 rounded-full font-bold transition duration-300 ${scrolled ? "bg-purple-400 text-black" : "bg-white text-black"
                                    } hover:bg-red-500 hover:text-white`}
                            >
                                Login
                            </Link>

                            <Link
                                to="/Register"
                                className="px-5 py-1 border-2 border-purple-400 rounded-full text-purple-500 font-bold hover:bg-red-500 hover:text-white hover:border-red-500 transition duration-300"
                            >
                                Register
                            </Link>
                        </div>
                    </>
                )}

                {/* Desktop Menu */}
                <div className="hidden lg:flex gap-3 font-semibold">
                    <Link to='/'className="text-gray-700 hover:text-red-500 transition-colors duration-300">Home</Link>
                    <Link to="/about" className="text-gray-700 hover:text-red-500 transition-colors duration-300">About Us</Link>
                    <Link to="/Instructors" className="text-gray-700 hover:text-red-500 transition-colors duration-300">
                        <span className="flex items-center gap-1">Instructors <GoChevronDown size={15} /></span>
                    </Link>
                    <Link to="/Students" className="text-gray-700 hover:text-red-500 transition-colors duration-300">
                        <span className="flex items-center gap-1">Students <GoChevronDown size={15} /></span>
                    </Link>
                    <Link to="/Pages" className="text-gray-700 hover:text-red-500 transition-colors duration-300">
                        <span className="flex items-center gap-1">Pages <GoChevronDown size={15} /></span>
                    </Link>
                    <Link to="/Blog" className="text-gray-700 hover:text-red-500 transition-colors duration-300">
                        <span className="flex items-center gap-1">Blog <GoChevronDown size={15} /></span>
                    </Link>
                    <Link to="/Contact" className="text-gray-700 hover:text-red-500 transition-colors duration-300">Contact Us</Link>
                </div>

                <div className="hidden lg:flex gap-4">
                    <Link
                        to="/Login"
                        className={`px-8 py-3 rounded-full font-bold transition duration-300 ${scrolled ? "bg-purple-400 text-black" : "bg-white text-black"
                            } hover:bg-red-500 hover:text-white`}
                    >
                        Login
                    </Link>
                    <Link
                        to="/Register"
                        className="px-5 py-3 border-2 border-purple-400 rounded-full text-purple-500 font-bold hover:bg-red-500 hover:text-white hover:border-red-500 transition duration-300"
                    >
                        Register
                    </Link>
                </div>
            </div>
        </nav>
    );
}
