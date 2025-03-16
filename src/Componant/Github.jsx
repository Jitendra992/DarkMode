import React, { useState } from "react";
import { BsSunFill } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FiLink } from "react-icons/fi";
import { IoMoonSharp } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";
import { PiBuildingsBold } from "react-icons/pi";

const UserProfile = () => {
    const [darkMode, setDarkMode] = useState('');

    const handlechange = () => {
        setDarkMode(!darkMode);
    }

    return (
        <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}  h-full w-full lg:h-screen lg:w-full flex flex-col justify-center items-center transition-all duration-300 px-5 overflow-hidden`}>
            <header className="lg:w-[50%] flex justify-between items-center mb-6 gap-20">
                <h1 className="text-3xl font-semibold font-mono mt-5">DevDetective</h1>

                <div className="flex items-center gap-4 cursor-pointer text-lg font-mono font-semibold mt-5"> Dark

                    {darkMode ? 
                    (<BsSunFill onClick={handlechange} className="text-yellow-400 text-2xl cursor-pointer" />) :   
                                          
                     (<IoMoonSharp onClick={handlechange} className="text-gray-400 text-2xl cursor-pointer" /> )
                   }
                </div>
            </header>

            <div className={`flex items-center shadow-md p-2 rounded-xl lg:w-[50%] ${darkMode ? 'bg-gray-800  text-white' : 'bg-white text-black '}`}>
                <CiSearch className="text-[#0079FF] text-2xl" />
                <input type="search" placeholder="jitendra992" className="flex-1 p-2 outline-none text-lg bg-transparent" />
                <button className="bg-blue-600 text-white px-4 py-3 rounded-lg font-serif w-30 font-semibold">Search</button>
            </div>

            <div className={`shadow-lg rounded-xl p-6 mt-6 lg:w-[50%] lg:h-[70%] ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black '}`}>
                <div className="flex items-center lg:ml-12 lg:gap-10 gap-5">
                    <img src="https://avatars.githubusercontent.com/u/179298995?v=4" className="w-30 h-30 rounded-full" />
                    <div className="w-full">
                        <h2 className="text-lg lg:text-2xl font-bold">Jitendra Kumar</h2>
                        <p className="text-blue-600 lg:text-lg text-sm">@Jitendra992</p>
                        <p className="lg:text-lg text-sm">Front-end Developer</p>
                        <p className="lg:text-lg text-sm">||React.js|| ||HTML|| ||CSS|| ||JavaScript|| SQL</p>
                    </div>
                    <p className="ml-auto lg:text-lg text-xs">Joined 24 Aug 2024</p>
                </div>

                <div className={`lg:w-[70%] flex lg:p-10 gap-10 p-10 mt-5 lg:gap-25 lg:ml-50 lg:mt-10 rounded-lg justify-center items-center ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                    <div>
                        <p className="text-gray-400">Repos</p>
                        <p className="text-2xl font-mono ml-2">11</p>
                    </div>
                    <div>
                        <p className="text-gray-400 font-mono">Followers</p>
                        <p className="text-2xl font-mono ml-4">2</p>
                    </div>
                    <div>
                        <p className="text-gray-400 font-mono">Following</p>
                        <p className="text-2xl font-mono ml-4">2</p>
                    </div>
                </div>

                <div className={`lg:w-[70%] w-full h-full grid grid-cols-2 p-4 lg:ml-50 lg:mt-10 rounded-lg  lg:gap-5 gap-5 justify-center items-center ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
                    <div className="mb-5 flex justify-center items-center text-lg font-mono ">
                        <p className="flex gap-1"><MdLocationOn className="mt-1" /> Not Available</p>
                    </div>
                    <div className="mb-5 flex justify-center items-center text-lg font-mono">
                        <p className="flex gap-1"><FiLink className="mt-1" /> Not Available</p>
                    </div>
                    <div className="mb-5 flex justify-center items-center text-lg font-mono">
                        <p className="flex gap-1"><FaTwitter className="mt-1" />Not Available</p>
                    </div>
                    <div className="mb-5 flex justify-center items-center text-lg font-mono">
                        <p className="flex gap-1"><PiBuildingsBold className="mt-1" />Not Available</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
