

'use client';
import { useState } from 'react';
import React from 'react'
import Image from 'next/image';
import WordSlider from './components/wordslider';
const page = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  return (
    <>
      <section className='overflow-hidden'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-12'>

              <div className='row justify-center bg-[#FF6A00]'>
                <div className='col-md-6'>
                  <p className='text-center p-0 m-0 py-2 text-[#fff] text-[16px] font-[rhd]'>Get 50% Off on Selected Item | Shop Now </p>
                </div>
              </div>

              <div className='col-md-12 px-20 flex justify-between '>
                <div className='col-md-2 flex items-center'>
                  <div>
                    <Image
                      src="/assets/images/image 2.svg"
                      alt='..'
                      width={158}
                      height={20}
                    />
                  </div>
                </div>

                <div className="col-md-8">
                  <div className="flex items-center justify-between px-4 py-2 ">
                    {/* Home Links */}
                    <div
                      className={`transition-all duration-300 ${isSearchFocused ? 'col-md-2' : 'col-md-6'
                        } flex items-center justify-between px-4 space-x-4`}
                    >
                      {!isSearchFocused && (
                        <>
                          <span className="text-[16px] font-[rhd] font-[400] text-gray-700 cursor-pointer">Home</span>
                          <span className="text-[16px] font-[rhd] font-[400] text-gray-700 cursor-pointer">Shop</span>
                          <span className="text-[16px] font-[rhd] font-[400] text-gray-700 cursor-pointer">Contact</span>
                          <span className="text-[16px] font-[rhd] font-[400] text-gray-700 cursor-pointer">Categories</span>
                        </>
                      )}
                      {isSearchFocused && (
                        <span className="text-[16px] font-[rhd] font-[400] text-gray-700 cursor-pointer">Home</span>
                      )}
                    </div>

                    {/* Search Input */}
                    <div
                      className={`relative flex items-center transition-all duration-300 ${isSearchFocused ? 'col-md-10' : 'col-md-6'
                        }`}
                    >
                      <input
                        type="text"
                        placeholder="Search"
                        className="border rounded-full py-2 px-4 w-full focus:outline-none "
                        onFocus={() => setIsSearchFocused(true)}
                        onBlur={() => setIsSearchFocused(false)}
                      />
                    </div>
                  </div>
                </div>

                <div className='col-md-2 flex items-center justify-end gap-5 '>
                  <div className='flex gap-2'>
                    <Image
                      src="/assets/images/Vector.svg"
                      alt='..'
                      width={16}
                      height={20}
                    />
                    <p className='text-[16px] font-[rhd] font-[400] m-0 p-0'>my account</p>
                  </div>
                  <div className='flex gap-2'>
                    <Image
                      src="/assets/images/Vector (1).svg"
                      alt='..'
                      width={20}
                      height={20}
                    />
                    <p className='text-[16px] font-[rhd] font-[400] m-0 p-0'>Cart</p>
                  </div>
                </div>
              </div>

              <div className='row bg-[#131F81]'>
                <div className='col-md-6 flex justify-center items-center'>
                  <div className='col-md-10'>
                    <div className='py-4'>

                      <button className='w-[155px] font-[rhd]  hover:bg-[#131F81] hover:text-[#fff] h-[40px] border text-[#131F81] text-[18px] rounded-[50px] bg-[#fff]'>Global Reach</button>
                    </div>
                    <p className='text-[62px] font-[600] text-[#fff] font-[lf] leading-[78px]'>Become a Seller and Start Earning Today!</p>
                    <p className='text-[18px] font-[400] text-[#fff] font-[rhd] leading-[26px]'>Are you ready to turn your passion into profit? Whether you're an artist, entrepreneur, or small business owner, our platform offers everything you need to grow your business and reach millions of customers worldwide.</p>

                    <div className='flex gap-5'>
                      <button className='w-[155px] font-[rhd] hover:bg-[#131F81] hover:text-[#fff] h-[40px] border text-[#131F81] text-[18px] rounded-[10px] bg-[#fff]'>Get in Touch</button>
                      <button className='w-[180px] font-[rhd] hover:bg-[#131F81] hover:text-[#fff] h-[40px] border text-[#131F81] text-[18px] rounded-[10px] bg-[#fff]'>Browse Services</button>
                    </div>
                  </div>
                </div>
                <div className='col-md-6 flex justify-center'>
                  <div className="colmd-10">
                    <Image
                      src="/assets/images/10307453_4435885 1.svg"
                      alt='...'
                      width={650}
                      height={10} />
                  </div>
                </div>
              </div>


              <div className='col-md-12 flex justify-center'>
                <div className='col-md-8'>
                  <div className='col-md-12 pt-[70px] pb-4'>
                    <div className='col-md-12 '>
                      <p className='text-[62px] font-[lf] font-[700] text-center'>Meet Our <span className='text-[#ff725e]'>Customers</span> </p>
                    </div>
                    <div className='col-md-10 flex'>
                      <div className='col-md-8'></div>
                      <div className='col-md-4 p-0 m-0'>
                        <Image src="/assets/images/Group 10.svg"
                          alt='...'
                          width={216}
                          height={10} />
                      </div>

                    </div>

                  </div>
                  <div className='col-md-12 flex flex-wrap py-5'>
                    <div className='col-md-3 py-5 px-5 flex justify-center border-r border-b'>
                      <Image
                        src="/assets/images/image 3.svg"
                        alt='..'
                        width={188}
                        height={20}
                        className=''
                      />
                    </div>
                    <div className='col-md-3 py-5 px-5 flex justify-center border-r border-b'>
                      <Image
                        src="/assets/images/image 4.svg"
                        alt='..'
                        width={188}
                        height={20}
                        className=''
                      />
                    </div>
                    <div className='col-md-3 py-5 px-5 flex justify-center border-r border-b'>
                      <Image
                        src="/assets/images/image 5.svg"
                        alt='..'
                        width={188}
                        height={20}
                        className=''
                      />
                    </div>
                    <div className='col-md-3 py-5 px-5 flex justify-center border-b'>
                      <Image
                        src="/assets/images/image 6.svg"
                        alt='..'
                        width={188}
                        height={20}
                        className=''
                      />
                    </div>
                    <div className='col-md-3 py-5 px-5 flex justify-center border-r'>
                      <Image
                        src="/assets/images/image 7.svg"
                        alt='..'
                        width={188}
                        height={20}
                        className=''
                      />
                    </div>
                    <div className='col-md-3 py-5 px-5 flex justify-center border-r'>
                      <Image
                        src="/assets/images/image 8.svg"
                        alt='..'
                        width={188}
                        height={20}
                        className=''
                      />
                    </div>
                    <div className='col-md-3 py-5 px-5 flex justify-center border-r'>
                      <Image
                        src="/assets/images/image 9.svg"
                        alt='..'
                        width={188}
                        height={20}
                        className=''
                      />
                    </div>
                    <div className='col-md-3 py-5 px-5 flex justify-center'>
                      <Image
                        src="/assets/images/image 10.svg"
                        alt='..'
                        width={188}
                        height={20}
                        className=''
                      />
                    </div>


                  </div>
                </div>
              </div>


              <div className='col-md-12 flex justify-center pb-5'>
                <div className="col-md-12">
                  <div className='col-md-12 pt-[100px]'>
                    <div className='col-md-12  pb-5'>
                      <p className='text-[62px] font-[lf] font-[700] text-center'>What’s Coming <span className='text-[#ff725e]'> Next?</span> </p>
                    </div>

                    <div className='col-md-12 flex justify-center'>
                      <div className='col-md-12 flex flex-wrap'>
                        <div className='col-md-3 mb-4'>
                          <div className='col-md-12 flex justify-center mb-4'>

                            <Image
                              src="/assets/images/Rectangle 9.svg"
                              alt='..'
                              width={300}
                              height={20}
                              className=''
                            />
                          </div>
                          <div className='text-center px-5'>
                            <p className='text-[24px] font-[800] font-[rhd] leading-[25px]'>Noise Colorfit Icon 2 1.8''</p>
                            <p className='px-5 text-[18px] font-[400] font-[rhd] leading-[25px]'>AI Voice Assistant Smartwatch  (Deep Wine Strap, Regular)</p>
                            <p className='text-[23px] font-[800] font-[rhd] leading-[25px]'> ₹1,399 <span className='text-[15px] text-[#00000085] font-[400] font-[rhd] '> ₹5,999</span> <span className='text-[#FF6A00] font-[400] text-[15px]'>70% Off</span> </p>
                          </div>
                        </div>
                        <div className='col-md-3 mb-4'>
                          <div className='col-md-12 flex justify-center mb-4'>

                            <Image
                              src="/assets/images/Rectangle 9.svg"
                              alt='..'
                              width={300}
                              height={20}
                              className=''
                            />
                          </div>
                          <div className='text-center px-5'>
                            <p className='text-[24px] font-[800] font-[rhd] leading-[25px]'>Noise Colorfit Icon 2 1.8''</p>
                            <p className='px-5 text-[18px] font-[400] font-[rhd] leading-[25px]'>AI Voice Assistant Smartwatch  (Deep Wine Strap, Regular)</p>
                            <p className='text-[23px] font-[800] font-[rhd] leading-[25px]'> ₹1,399 <span className='text-[15px] text-[#00000085] font-[400] font-[rhd] '> ₹5,999</span> <span className='text-[#FF6A00] font-[400] text-[15px]'>70% Off</span> </p>
                          </div>
                        </div>

                        <div className='col-md-3 mb-4'>
                          <div className='col-md-12 flex justify-center mb-4'>

                            <Image
                              src="/assets/images/Rectangle 9.svg"
                              alt='..'
                              width={300}
                              height={20}
                              className=''
                            />
                          </div>
                          <div className='text-center px-5'>
                            <p className='text-[24px] font-[800] font-[rhd] leading-[25px]'>Noise Colorfit Icon 2 1.8''</p>
                            <p className='px-5 text-[18px] font-[400] font-[rhd] leading-[25px]'>AI Voice Assistant Smartwatch  (Deep Wine Strap, Regular)</p>
                            <p className='text-[23px] font-[800] font-[rhd] leading-[25px]'> ₹1,399 <span className='text-[15px] text-[#00000085] font-[400] font-[rhd] '> ₹5,999</span> <span className='text-[#FF6A00] font-[400] text-[15px]'>70% Off</span> </p>
                          </div>
                        </div>

                        <div className='col-md-3 mb-4'>
                          <div className='col-md-12 flex justify-center mb-4'>

                            <Image
                              src="/assets/images/Rectangle 9.svg"
                              alt='..'
                              width={300}
                              height={20}
                              className=''
                            />
                          </div>
                          <div className='text-center px-5'>
                            <p className='text-[24px] font-[800] font-[rhd] leading-[25px]'>Noise Colorfit Icon 2 1.8''</p>
                            <p className='px-5 text-[18px] font-[400] font-[rhd] leading-[25px]'>AI Voice Assistant Smartwatch  (Deep Wine Strap, Regular)</p>
                            <p className='text-[23px] font-[800] font-[rhd] leading-[25px]'> ₹1,399 <span className='text-[15px] text-[#00000085] font-[400] font-[rhd] '> ₹5,999</span> <span className='text-[#FF6A00] font-[400] text-[15px]'>70% Off</span> </p>
                          </div>
                        </div>

                        <div className='col-md-3 mb-4'>
                          <div className='col-md-12 flex justify-center mb-4'>

                            <Image
                              src="/assets/images/Rectangle 9.svg"
                              alt='..'
                              width={300}
                              height={20}
                              className=''
                            />
                          </div>
                          <div className='text-center px-5'>
                            <p className='text-[24px] font-[800] font-[rhd] leading-[25px]'>Noise Colorfit Icon 2 1.8''</p>
                            <p className='px-5 text-[18px] font-[400] font-[rhd] leading-[25px]'>AI Voice Assistant Smartwatch  (Deep Wine Strap, Regular)</p>
                            <p className='text-[23px] font-[800] font-[rhd] leading-[25px]'> ₹1,399 <span className='text-[15px] text-[#00000085] font-[400] font-[rhd] '> ₹5,999</span> <span className='text-[#FF6A00] font-[400] text-[15px]'>70% Off</span> </p>
                          </div>
                        </div>

                        <div className='col-md-3 mb-4'>
                          <div className='col-md-12 flex justify-center mb-4'>

                            <Image
                              src="/assets/images/Rectangle 9.svg"
                              alt='..'
                              width={300}
                              height={20}
                              className=''
                            />
                          </div>
                          <div className='text-center px-5'>
                            <p className='text-[24px] font-[800] font-[rhd] leading-[25px]'>Noise Colorfit Icon 2 1.8''</p>
                            <p className='px-5 text-[18px] font-[400] font-[rhd] leading-[25px]'>AI Voice Assistant Smartwatch  (Deep Wine Strap, Regular)</p>
                            <p className='text-[23px] font-[800] font-[rhd] leading-[25px]'> ₹1,399 <span className='text-[15px] text-[#00000085] font-[400] font-[rhd] '> ₹5,999</span> <span className='text-[#FF6A00] font-[400] text-[15px]'>70% Off</span> </p>
                          </div>
                        </div>

                        <div className='col-md-3 mb-4'>
                          <div className='col-md-12 flex justify-center mb-4'>

                            <Image
                              src="/assets/images/Rectangle 9.svg"
                              alt='..'
                              width={300}
                              height={20}
                              className=''
                            />
                          </div>
                          <div className='text-center px-5'>
                            <p className='text-[24px] font-[800] font-[rhd] leading-[25px]'>Noise Colorfit Icon 2 1.8''</p>
                            <p className='px-5 text-[18px] font-[400] font-[rhd] leading-[25px]'>AI Voice Assistant Smartwatch  (Deep Wine Strap, Regular)</p>
                            <p className='text-[23px] font-[800] font-[rhd] leading-[25px]'> ₹1,399 <span className='text-[15px] text-[#00000085] font-[400] font-[rhd] '> ₹5,999</span> <span className='text-[#FF6A00] font-[400] text-[15px]'>70% Off</span> </p>
                          </div>
                        </div>

                        <div className='col-md-3 mb-4'>
                          <div className='col-md-12 flex justify-center mb-4'>

                            <Image
                              src="/assets/images/Rectangle 9.svg"
                              alt='..'
                              width={300}
                              height={20}
                              className=''
                            />
                          </div>
                          <div className='text-center px-5'>
                            <p className='text-[24px] font-[800] font-[rhd] leading-[25px]'>Noise Colorfit Icon 2 1.8''</p>
                            <p className='px-5 text-[18px] font-[400] font-[rhd] leading-[25px]'>AI Voice Assistant Smartwatch  (Deep Wine Strap, Regular)</p>
                            <p className='text-[23px] font-[800] font-[rhd] leading-[25px]'> ₹1,399 <span className='text-[15px] text-[#00000085] font-[400] font-[rhd] '> ₹5,999</span> <span className='text-[#FF6A00] font-[400] text-[15px]'>70% Off</span> </p>
                          </div>
                        </div>

                        <div className='col-md-3 mb-4'>
                          <div className='col-md-12 flex justify-center mb-4'>

                            <Image
                              src="/assets/images/Rectangle 9.svg"
                              alt='..'
                              width={300}
                              height={20}
                              className=''
                            />
                          </div>
                          <div className='text-center px-5'>
                            <p className='text-[24px] font-[800] font-[rhd] leading-[25px]'>Noise Colorfit Icon 2 1.8''</p>
                            <p className='px-5 text-[18px] font-[400] font-[rhd] leading-[25px]'>AI Voice Assistant Smartwatch  (Deep Wine Strap, Regular)</p>
                            <p className='text-[23px] font-[800] font-[rhd] leading-[25px]'> ₹1,399 <span className='text-[15px] text-[#00000085] font-[400] font-[rhd] '> ₹5,999</span> <span className='text-[#FF6A00] font-[400] text-[15px]'>70% Off</span> </p>
                          </div>
                        </div>

                        <div className='col-md-3 mb-4'>
                          <div className='col-md-12 flex justify-center mb-4'>

                            <Image
                              src="/assets/images/Rectangle 9.svg"
                              alt='..'
                              width={300}
                              height={20}
                              className=''
                            />
                          </div>
                          <div className='text-center px-5'>
                            <p className='text-[24px] font-[800] font-[rhd] leading-[25px]'>Noise Colorfit Icon 2 1.8''</p>
                            <p className='px-5 text-[18px] font-[400] font-[rhd] leading-[25px]'>AI Voice Assistant Smartwatch  (Deep Wine Strap, Regular)</p>
                            <p className='text-[23px] font-[800] font-[rhd] leading-[25px]'> ₹1,399 <span className='text-[15px] text-[#00000085] font-[400] font-[rhd] '> ₹5,999</span> <span className='text-[#FF6A00] font-[400] text-[15px]'>70% Off</span> </p>
                          </div>
                        </div>

                        <div className='col-md-3 mb-4'>
                          <div className='col-md-12 flex justify-center mb-4'>

                            <Image
                              src="/assets/images/Rectangle 9.svg"
                              alt='..'
                              width={300}
                              height={20}
                              className=''
                            />
                          </div>
                          <div className='text-center px-5'>
                            <p className='text-[24px] font-[800] font-[rhd] leading-[25px]'>Noise Colorfit Icon 2 1.8''</p>
                            <p className='px-5 text-[18px] font-[400] font-[rhd] leading-[25px]'>AI Voice Assistant Smartwatch  (Deep Wine Strap, Regular)</p>
                            <p className='text-[23px] font-[800] font-[rhd] leading-[25px]'> ₹1,399 <span className='text-[15px] text-[#00000085] font-[400] font-[rhd] '> ₹5,999</span> <span className='text-[#FF6A00] font-[400] text-[15px]'>70% Off</span> </p>
                          </div>
                        </div>

                        <div className='col-md-3 mb-4'>
                          <div className='col-md-12 flex justify-center mb-4'>

                            <Image
                              src="/assets/images/Rectangle 9.svg"
                              alt='..'
                              width={300}
                              height={20}
                              className=''
                            />
                          </div>
                          <div className='text-center px-5'>
                            <p className='text-[24px] font-[800] font-[rhd] leading-[25px]'>Noise Colorfit Icon 2 1.8''</p>
                            <p className='px-5 text-[18px] font-[400] font-[rhd] leading-[25px]'>AI Voice Assistant Smartwatch  (Deep Wine Strap, Regular)</p>
                            <p className='text-[23px] font-[800] font-[rhd] leading-[25px]'> ₹1,399 <span className='text-[15px] text-[#00000085] font-[400] font-[rhd] '> ₹5,999</span> <span className='text-[#FF6A00] font-[400] text-[15px]'>70% Off</span> </p>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

<div className='col-md-12'>
<WordSlider/>
</div>

            </div>

          </div>
        </div>

      </section>
    </>
  )
}

export default page