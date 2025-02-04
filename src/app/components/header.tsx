
// "use client"
// import { useState } from 'react';
// import React from 'react'
// import Image from 'next/image'

// const Header = () => {
//     const [isSearchFocused, setIsSearchFocused] = useState(false);

//     return (
//         <div>
//             <div className='row justify-center bg-[#FF6A00]'>
//                 <div className='col-md-6'>
//                     <p className='text-center p-0 m-0 py-2 text-[#fff] text-[16px] font-[rhd]'>Get 50% Off on Selected Item | Shop Now </p>
//                 </div>
//             </div>

//             <div className='col-md-12 sm:px-[80px] px-[20px] flex justify-between '>
//                 <div className='col-md-2 flex items-center'>
//                     <div>
//                         <Image
//                             src="/assets/images/image 2.svg"
//                             alt='..'
//                             width={158}
//                             height={20}
//                         />
//                     </div>
//                 </div>

//                 <div className="col-md-8">
//                     <div className="flex items-center justify-between px-4 py-2 ">
//                         {/* Home Links */}
//                         <div
//                             className={`transition-all duration-300 ${isSearchFocused ? 'col-md-2' : 'col-md-6'
//                                 } flex items-center justify-between px-4 space-x-4`}
//                         >
//                             {!isSearchFocused && (
//                                 <>
//                                     <span className="text-[16px] font-[rhd] font-[400] text-gray-700 cursor-pointer">Home</span>
//                                     <span className="text-[16px] font-[rhd] font-[400] text-gray-700 cursor-pointer">Shop</span>
//                                     <span className="text-[16px] font-[rhd] font-[400] text-gray-700 cursor-pointer">Contact</span>
//                                     <span className="text-[16px] font-[rhd] font-[400] text-gray-700 cursor-pointer">Categories</span>
//                                 </>
//                             )}
//                             {isSearchFocused && (
//                                 <span className="text-[16px] font-[rhd] font-[400] text-gray-700 cursor-pointer">Home</span>
//                             )}
//                         </div>

//                         {/* Search Input */}
//                         <div
//                             className={`relative flex items-center transition-all duration-300 ${isSearchFocused ? 'col-md-10' : 'col-md-6'
//                                 }`}
//                         >
//                             <input
//                                 type="text"
//                                 placeholder="Search"
//                                 className="border rounded-full py-2 px-4 w-full focus:outline-none "
//                                 onFocus={() => setIsSearchFocused(true)}
//                                 onBlur={() => setIsSearchFocused(false)}
//                             />
//                         </div>
//                     </div>
//                 </div>

//                 <div className='col-md-2 flex items-center justify-end gap-4 '>
//                     <div className='flex gap-2'>
//                         <Image
//                             src="/assets/images/Vector.svg"
//                             alt='..'
//                             width={16}
//                             height={20}
//                         />
//                         <p className='text-[15px] font-[rhd] font-[400] m-0 p-0'>my account</p>
//                     </div>
//                     <div className='flex gap-2'>
//                         <Image
//                             src="/assets/images/Vector (1).svg"
//                             alt='..'
//                             width={20}
//                             height={20}
//                         />
//                         <p className='text-[15px] font-[rhd] font-[400] m-0 p-0'>Cart</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Header;





"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (


<>
         <section className='overflow-hidden'>
                <div className='container-fluid p-0 m-0'>
                  <div className="row justify-center bg-[#FF6A00]">
                    <div className="col-md-6">
                      <p className="text-center p-0 m-0 py-2 text-[#fff] text-[16px] font-[rhd] pt-[100px] ">
                        Get 50% Off on Selected Item | Shop Now
                      </p>
                    </div>
                  </div>
                </div>
              </section>

        <section className='overflow-hidden sm:px-[80px] px-[20px]'>
            <div className='container-fluid'>
                <div className='row'>

                    {/* Top Banner
                    <div className="row justify-center bg-[#FF6A00]">
                        <div className="col-md-6">
                            <p className="text-center p-0 m-0 py-2 text-[#fff] text-[16px] font-[rhd]">
                                Get 50% Off on Selected Item | Shop Now
                            </p>
                        </div>
                    </div> */}

                    {/* Header Section */}
                    <div className="col-md-12  flex justify-between items-center">
                        {/* Logo */}
                        
                        <div className="col-md-2 flex items-center">
                        <Link href="/" className="no-underline">
                            <Image
                                src="/assets/images/LOGO.svg"
                                alt=".."
                                width={128}
                                height={20}
                                className="py-3"
                            />
                            </Link>
                        </div>

                        {/* Navigation Links - Hidden on Mobile */}
                        <div
                            className={`col-md-8 hidden md:flex items-center justify-between px-4 py-2`}
                        >
                            <div
                                className={`transition-all duration-300 ${isSearchFocused ? 'col-md-2' : 'col-md-6'
                                    } flex items-center justify-between px-4 space-x-4`}
                            >
                                {!isSearchFocused && (
                                    <>

                                        <Link href="/" className="no-underline">
                                            <span className="text-[16px] font-[rhd] font-[400] text-gray-700 cursor-pointer">Home</span>
                                        </Link>

                                        <Link href="/allmaincomponents/about" className="no-underline">
                                            <span className="text-[16px] font-[rhd] font-[400] text-gray-700 cursor-pointer">About Us</span>
                                        </Link>

                                        <Link href="/allmaincomponents/shop" className="no-underline">
                                            <span className="text-[16px] font-[rhd] font-[400] text-gray-700 cursor-pointer">Shop</span>
                                        </Link>

                                        <Link href="/allmaincomponents/contact" className="no-underline">
                                            <span className="text-[16px] font-[rhd] font-[400] text-gray-700 cursor-pointer">Contact Us</span>
                                        </Link>
                                    </>
                                )}
                                {isSearchFocused && (
                                    <Link href="/" className="no-underline">
                                    <span className="text-[16px] font-[rhd] font-[400] text-gray-700 cursor-pointer">Home</span>
                                </Link>
                                )}
                            </div>

                            {/* Search Input */}
                            <div
                                className={`relative flex items-center transition-all duration-300 ${isSearchFocused ? "col-md-10" : "col-md-6"
                                    }`}
                            >
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="border rounded-full py-2 px-4 w-full focus:outline-none"
                                    onFocus={() => setIsSearchFocused(true)}
                                    onBlur={() => setIsSearchFocused(false)}
                                />
                            </div>
                        </div>

                        {/* Account and Cart - Hidden on Mobile */}
                        <div className="col-md-2 hidden md:flex items-center justify-end gap-4">
                            <div className="flex gap-2">
                                <Image
                                    src="/assets/images/Vector.svg"
                                    alt=".."
                                    width={16}
                                    height={20}
                                />
                                <p className="text-[15px] font-[rhd] font-[400] m-0 p-0">my account</p>
                            </div>
                            <div className="flex gap-2">
                                <Image
                                    src="/assets/images/Vector (1).svg"
                                    alt=".."
                                    width={20}
                                    height={20}
                                />
                                <p className="text-[15px] font-[rhd] font-[400] m-0 p-0">Cart</p>
                            </div>
                        </div>

                        {/* Hamburger Menu for Mobile */}
                        <div className="flex md:hidden items-center">
                            <button
                                className="text-gray-700 focus:outline-none"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="md:hidden bg-white shadow-lg p-4">
                            <div className="flex flex-col space-y-4">
                            <Link href="/" className="no-underline">
                                            <span className="text-[16px] font-[rhd] font-[400] text-gray-700 cursor-pointer">Home</span>
                                        </Link>
                                <Link href="/allmaincomponents/shop" className="no-underline">
                                    <span className="text-[16px] font-[rhd] font-[400] text-gray-700 cursor-pointer">Shop</span>
                                </Link>
                                <Link href="/allmaincomponents/contact" className="no-underline">
                                            <span className="text-[16px] font-[rhd] font-[400] text-gray-700 cursor-pointer">Contact Us</span>
                                        </Link>
                                        <Link href="/allmaincomponents/about" className="no-underline">
                                            <span className="text-[16px] font-[rhd] font-[400] text-gray-700 cursor-pointer">About Us</span>
                                        </Link>
                                <div className="flex gap-2 items-center">
                                    <Image
                                        src="/assets/images/Vector.svg"
                                        alt=".."
                                        width={16}
                                        height={20}
                                    />
                                    <p className="text-[15px] font-[rhd] font-[400] m-0 p-0">my account</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <Image
                                        src="/assets/images/Vector (1).svg"
                                        alt=".."
                                        width={20}
                                        height={20}
                                    />
                                    <p className="text-[15px] font-[rhd] font-[400] m-0 p-0">Cart</p>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </section >
</>
    );
};

export default Header;
