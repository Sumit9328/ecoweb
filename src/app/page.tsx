

import React from 'react'
import Image from 'next/image';
import WordSlider from './components/wordslider';
import Footer from './components/footer';
import Header from './components/header';
const page = () => {
  return (
    <>

      <section className='overflow-hidden'>
        <div className='container-fluid'>
          <div className='row'>
            <Header />
          </div>
        </div>
      </section>


      <section className='overflow-hidden bg-[#131F81] sm:px-[80px] px-[20px]'>
        <div className='container-fluid'>

          <div className='row align-items-center'>
            <div className='col-md-6 mb-4'>
              <div className='col-md-12'>
                <div className='py-4'>

                  <button className='sm:w-[155px]  w-full font-[rhd]  hover:bg-[#131F81] hover:text-[#fff] py-2 sm:border text-[#131F81] text-[18px] rounded-[50px] bg-[#fff]'>Global Reach</button>
                </div>
                <p className='sm:text-[50px] text-[30px] font-[600] text-[#fff] font-[lf] sm:leading-[55px] leading-[35px]'>Become a Seller and Start Earning Today!</p>
                <p className='sm:text-[18px] text-[16px] font-[400] text-[#fff] font-[rhd]'>Are you ready to turn your passion into profit? Whether you&apos;re an artist, entrepreneur, or small business owner, our platform offers everything you need to grow your business and reach millions of customers worldwide.</p>

                <div className='flex gap-5'>
                  <button className='w-[155px] font-[rhd] hover:bg-[#131F81] hover:text-[#fff] h-[40px] sm:border text-[#131F81] text-[18px] rounded-[10px] bg-[#fff]'>Get in Touch</button>
                  <button className='w-[180px] font-[rhd] hover:bg-[#131F81] hover:text-[#fff] h-[40px] sm:border text-[#131F81] text-[18px] rounded-[10px] bg-[#fff]'>Browse Services</button>
                </div>
              </div>
            </div>
            <div className='col-md-6 mb-4'>
              <div className='sm:flex sm:justify-end'>
                <div className="col-md-10">
                  <Image
                    src="/assets/images/10307453_4435885 1.svg"
                    alt='...'
                    width={650}
                    height={10}
                    className='w-full' />
                </div>

              </div>

            </div>
          </div>
        </div>

      </section>


      <section className='overflow-hidden sm:px-[80px] px-[20px]'>
        <div className='container-fluid '>
          <div className='row'>

            <div className='col-md-12 flex justify-center'>
              <div className='col-md-8'>
                <div className='col-md-12 pt-[70px] sm:pb-4'>
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
                <div className='col-md-12 sm:flex flex-wrap py-5'>
                  <div className='col-md-3 py-5 px-5 flex justify-center sm:border-r sm:border-b'>
                    <Image
                      src="/assets/images/image 3.svg"
                      alt='..'
                      width={188}
                      height={20}
                      className=''
                    />
                  </div>
                  <div className='col-md-3 py-5 px-5 flex justify-center sm:border-r sm:border-b'>
                    <Image
                      src="/assets/images/image 4.svg"
                      alt='..'
                      width={188}
                      height={20}
                      className=''
                    />
                  </div>
                  <div className='col-md-3 py-5 px-5 flex justify-center sm:border-r sm:border-b'>
                    <Image
                      src="/assets/images/image 5.svg"
                      alt='..'
                      width={188}
                      height={20}
                      className=''
                    />
                  </div>
                  <div className='col-md-3 py-5 px-5 flex justify-center sm:border-b'>
                    <Image
                      src="/assets/images/image 6.svg"
                      alt='..'
                      width={188}
                      height={20}
                      className=''
                    />
                  </div>
                  <div className='col-md-3 py-5 px-5 flex justify-center sm:border-r'>
                    <Image
                      src="/assets/images/image 7.svg"
                      alt='..'
                      width={188}
                      height={20}
                      className=''
                    />
                  </div>
                  <div className='col-md-3 py-5 px-5 flex justify-center sm:border-r'>
                    <Image
                      src="/assets/images/image 8.svg"
                      alt='..'
                      width={188}
                      height={20}
                      className=''
                    />
                  </div>
                  <div className='col-md-3 py-5 px-5 flex justify-center sm:border-r'>
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


            <div className='col-md-12'>
              <div className="row">
                <div className='col-md-12 sm:mb-4 sm:pt-[100px]'>

                  <div className='col-md-12 sm:pb-5'>
                    <p className='sm:text-[62px] text-[40px] font-[lf] font-[700] text-center'>What’s Coming <span className='text-[#FF6A00]'> Next?</span> </p>
                  </div>
                </div>

                <div className='col-md-12 mb-4'>
                  <div className='row'>
                    <div className='col-md-3 mb-4'>
                      <div className='col-md-12 flex justify-center mb-4'>

                        <Image
                          src="/assets/images/Rectangle 9.svg"
                          alt='..'
                          width={300}
                          height={20}
                          className='w-full'
                        />
                      </div>
                      <div className='text-center'>
                        <p className='text-[25px] font-[800] font-[rhd] leading-[30px]'>Noise Colorfit Icon 2 1.8&apos;&apos;</p>
                        <p className='text-[18px] font-[400] font-[rhd]'>AI Voice Assistant Smartwatch (Deep Wine Strap, Regular)</p>
                        <p className='text-[23px] font-[800] font-[rhd]'> ₹1,399 <span className='text-[15px] text-[#00000085] font-[400] font-[rhd] '> ₹5,999</span> <span className='text-[#FF6A00] font-[400] text-[15px]'>70% Off</span> </p>
                      </div>
                    </div>

                    <div className='col-md-3 mb-4'>
                      <div className='col-md-12 flex justify-center mb-4'>

                        <Image
                          src="/assets/images/Rectangle 9.svg"
                          alt='..'
                          width={300}
                          height={20}
                          className='w-full'
                        />
                      </div>
                      <div className='text-center'>
                        <p className='text-[25px] font-[800] font-[rhd] leading-[30px]'>Noise Colorfit Icon 2 1.8&apos;&apos;</p>
                        <p className='text-[18px] font-[400] font-[rhd]'>AI Voice Assistant Smartwatch (Deep Wine Strap, Regular)</p>
                        <p className='text-[23px] font-[800] font-[rhd]'> ₹1,399 <span className='text-[15px] text-[#00000085] font-[400] font-[rhd] '> ₹5,999</span> <span className='text-[#FF6A00] font-[400] text-[15px]'>70% Off</span> </p>
                      </div>
                    </div>

                    <div className='col-md-3 mb-4'>
                      <div className='col-md-12 flex justify-center mb-4'>

                        <Image
                          src="/assets/images/Rectangle 9.svg"
                          alt='..'
                          width={300}
                          height={20}
                          className='w-full'
                        />
                      </div>
                      <div className='text-center'>
                        <p className='text-[25px] font-[800] font-[rhd] leading-[30px]'>Noise Colorfit Icon 2 1.8&apos;&apos;</p>
                        <p className='text-[18px] font-[400] font-[rhd]'>AI Voice Assistant Smartwatch (Deep Wine Strap, Regular)</p>
                        <p className='text-[23px] font-[800] font-[rhd]'> ₹1,399 <span className='text-[15px] text-[#00000085] font-[400] font-[rhd] '> ₹5,999</span> <span className='text-[#FF6A00] font-[400] text-[15px]'>70% Off</span> </p>
                      </div>
                    </div>

                    <div className='col-md-3 mb-4'>
                      <div className='col-md-12 flex justify-center mb-4'>

                        <Image
                          src="/assets/images/Rectangle 9.svg"
                          alt='..'
                          width={300}
                          height={20}
                          className='w-full'
                        />
                      </div>
                      <div className='text-center'>
                        <p className='text-[25px] font-[800] font-[rhd] leading-[30px]'>Noise Colorfit Icon 2 1.8&apos;&apos;</p>
                        <p className='text-[18px] font-[400] font-[rhd]'>AI Voice Assistant Smartwatch (Deep Wine Strap, Regular)</p>
                        <p className='text-[23px] font-[800] font-[rhd]'> ₹1,399 <span className='text-[15px] text-[#00000085] font-[400] font-[rhd] '> ₹5,999</span> <span className='text-[#FF6A00] font-[400] text-[15px]'>70% Off</span> </p>
                      </div>
                    </div>

                    <div className='col-md-3 mb-4'>
                      <div className='col-md-12 flex justify-center mb-4'>

                        <Image
                          src="/assets/images/Rectangle 9.svg"
                          alt='..'
                          width={300}
                          height={20}
                          className='w-full'
                        />
                      </div>
                      <div className='text-center'>
                        <p className='text-[25px] font-[800] font-[rhd] leading-[30px]'>Noise Colorfit Icon 2 1.8&apos;&apos;</p>
                        <p className='text-[18px] font-[400] font-[rhd]'>AI Voice Assistant Smartwatch (Deep Wine Strap, Regular)</p>
                        <p className='text-[23px] font-[800] font-[rhd]'> ₹1,399 <span className='text-[15px] text-[#00000085] font-[400] font-[rhd] '> ₹5,999</span> <span className='text-[#FF6A00] font-[400] text-[15px]'>70% Off</span> </p>
                      </div>
                    </div>

                    <div className='col-md-3 mb-4'>
                      <div className='col-md-12 flex justify-center mb-4'>

                        <Image
                          src="/assets/images/Rectangle 9.svg"
                          alt='..'
                          width={300}
                          height={20}
                          className='w-full'
                        />
                      </div>
                      <div className='text-center'>
                        <p className='text-[25px] font-[800] font-[rhd] leading-[30px]'>Noise Colorfit Icon 2 1.8&apos;&apos;</p>
                        <p className='text-[18px] font-[400] font-[rhd]'>AI Voice Assistant Smartwatch (Deep Wine Strap, Regular)</p>
                        <p className='text-[23px] font-[800] font-[rhd]'> ₹1,399 <span className='text-[15px] text-[#00000085] font-[400] font-[rhd] '> ₹5,999</span> <span className='text-[#FF6A00] font-[400] text-[15px]'>70% Off</span> </p>
                      </div>
                    </div>

                    <div className='col-md-3 mb-4'>
                      <div className='col-md-12 flex justify-center mb-4'>

                        <Image
                          src="/assets/images/Rectangle 9.svg"
                          alt='..'
                          width={300}
                          height={20}
                          className='w-full'
                        />
                      </div>
                      <div className='text-center'>
                        <p className='text-[25px] font-[800] font-[rhd] leading-[30px]'>Noise Colorfit Icon 2 1.8&apos;&apos;</p>
                        <p className='text-[18px] font-[400] font-[rhd]'>AI Voice Assistant Smartwatch (Deep Wine Strap, Regular)</p>
                        <p className='text-[23px] font-[800] font-[rhd]'> ₹1,399 <span className='text-[15px] text-[#00000085] font-[400] font-[rhd] '> ₹5,999</span> <span className='text-[#FF6A00] font-[400] text-[15px]'>70% Off</span> </p>
                      </div>
                    </div>

                    <div className='col-md-3 mb-4'>
                      <div className='col-md-12 flex justify-center mb-4'>

                        <Image
                          src="/assets/images/Rectangle 9.svg"
                          alt='..'
                          width={300}
                          height={20}
                          className='w-full'
                        />
                      </div>
                      <div className='text-center'>
                        <p className='text-[25px] font-[800] font-[rhd] leading-[30px]'>Noise Colorfit Icon 2 1.8&apos;&apos;</p>
                        <p className='text-[18px] font-[400] font-[rhd]'>AI Voice Assistant Smartwatch (Deep Wine Strap, Regular)</p>
                        <p className='text-[23px] font-[800] font-[rhd]'> ₹1,399 <span className='text-[15px] text-[#00000085] font-[400] font-[rhd] '> ₹5,999</span> <span className='text-[#FF6A00] font-[400] text-[15px]'>70% Off</span> </p>
                      </div>
                    </div>

                    <div className='col-md-3 mb-4'>
                      <div className='col-md-12 flex justify-center mb-4'>

                        <Image
                          src="/assets/images/Rectangle 9.svg"
                          alt='..'
                          width={300}
                          height={20}
                          className='w-full'
                        />
                      </div>
                      <div className='text-center'>
                        <p className='text-[25px] font-[800] font-[rhd] leading-[30px]'>Noise Colorfit Icon 2 1.8&apos;&apos;</p>
                        <p className='text-[18px] font-[400] font-[rhd]'>AI Voice Assistant Smartwatch (Deep Wine Strap, Regular)</p>
                        <p className='text-[23px] font-[800] font-[rhd]'> ₹1,399 <span className='text-[15px] text-[#00000085] font-[400] font-[rhd] '> ₹5,999</span> <span className='text-[#FF6A00] font-[400] text-[15px]'>70% Off</span> </p>
                      </div>
                    </div>

                    <div className='col-md-3 mb-4'>
                      <div className='col-md-12 flex justify-center mb-4'>

                        <Image
                          src="/assets/images/Rectangle 9.svg"
                          alt='..'
                          width={300}
                          height={20}
                          className='w-full'
                        />
                      </div>
                      <div className='text-center'>
                        <p className='text-[25px] font-[800] font-[rhd] leading-[30px]'>Noise Colorfit Icon 2 1.8&apos;&apos;</p>
                        <p className='text-[18px] font-[400] font-[rhd]'>AI Voice Assistant Smartwatch (Deep Wine Strap, Regular)</p>
                        <p className='text-[23px] font-[800] font-[rhd]'> ₹1,399 <span className='text-[15px] text-[#00000085] font-[400] font-[rhd] '> ₹5,999</span> <span className='text-[#FF6A00] font-[400] text-[15px]'>70% Off</span> </p>
                      </div>
                    </div>

                    <div className='col-md-3 mb-4'>
                      <div className='col-md-12 flex justify-center mb-4'>

                        <Image
                          src="/assets/images/Rectangle 9.svg"
                          alt='..'
                          width={300}
                          height={20}
                          className='w-full'
                        />
                      </div>
                      <div className='text-center'>
                        <p className='text-[25px] font-[800] font-[rhd] leading-[30px]'>Noise Colorfit Icon 2 1.8&apos;&apos;</p>
                        <p className='text-[18px] font-[400] font-[rhd]'>AI Voice Assistant Smartwatch (Deep Wine Strap, Regular)</p>
                        <p className='text-[23px] font-[800] font-[rhd]'> ₹1,399 <span className='text-[15px] text-[#00000085] font-[400] font-[rhd] '> ₹5,999</span> <span className='text-[#FF6A00] font-[400] text-[15px]'>70% Off</span> </p>
                      </div>
                    </div>

                    <div className='col-md-3 mb-4'>
                      <div className='col-md-12 flex justify-center mb-4'>

                        <Image
                          src="/assets/images/Rectangle 9.svg"
                          alt='..'
                          width={300}
                          height={20}
                          className='w-full'
                        />
                      </div>
                      <div className='text-center'>
                        <p className='text-[25px] font-[800] font-[rhd] leading-[30px]'>Noise Colorfit Icon 2 1.8&apos;&apos;</p>
                        <p className='text-[18px] font-[400] font-[rhd]'>AI Voice Assistant Smartwatch (Deep Wine Strap, Regular)</p>
                        <p className='text-[23px] font-[800] font-[rhd]'> ₹1,399 <span className='text-[15px] text-[#00000085] font-[400] font-[rhd] '> ₹5,999</span> <span className='text-[#FF6A00] font-[400] text-[15px]'>70% Off</span> </p>
                      </div>
                    </div>
                  </div>
                </div>


              </div>
            </div>



          </div>
        </div>
      </section>


      <section className='overflow-hidden'>
        <div className='container-fluid'>
          <div className='row'>

            <WordSlider />

          </div>
        </div>
      </section>






      <section className='overflow-hidden sm:px-[80px] px-[20px]  '>
        <div className='container-fluid'>

          <div className='row align-items-center '>
            <div className='col-md-6 mb-4'>
              <div className='col-md-10'>


                <p className=' font-[rhd] font-[600] text-[24px] rounded-[50px]'>customers worldwide</p>

                <p className='sm:text-[57px] text-[28px] font-[600] font-[lf] sm:leading-[62px] leading-[33px]'>Ready to <span className='text-[#FF6A00]'>Get Started?</span></p>
                <p className='sm:text-[18px] text-[16px] font-[400] font-[rhd]'>Sign up today and take the first step toward building your dream business. Your success story starts here!</p>

                <div className='flex gap-4'>
                  <button className='w-[155px] font-[rhd] hover:bg-[#FF6A00] hover:text-[#fff] h-[40px] border-1 border-[#FF6A00] text-[#FF6A00] text-[18px] rounded-[10px] bg-[#fff]'>Get in Touch</button>
                  <button className='w-[155px] font-[rhd] hover:bg-[#FF6A00] hover:text-[#fff] h-[40px] border-1 border-[#FF6A00] text-[#FF6A00] text-[18px] rounded-[10px] bg-[#fff]'>Browse Services</button>

                </div>
              </div>
            </div>
            <div className='col-md-6 mb-4'>
              <div className='sm:flex sm:justify-end'>
                <div className="col-md-10">
                  <Image
                    src="/assets/images/138219237_10281730 1.svg"
                    alt='...'
                    width={650}
                    className='w-full'
                    height={10} />
                </div>

              </div>
            </div>

          </div>
        </div>

      </section>








      <section className='overflow-hidden sm:px-[80px] px-[20px] py-[50px]'>
        <div className='container-fluid'>

          <div className='row align-items-start'>
            <div className='col-md-6 mb-4'>
              <div className="col-md-10">
                <Image
                  src="/assets/images/Group 153.svg"
                  alt='...'
                  width={650}
                  height={10}
                  className='rounded-[16px] w-full' />
              </div>
            </div>

            <div className='col-md-6 mb-4'>
              <div className='col-md-12'>
                <div className='col-md-12 bg-[#FF6A00] rounded-[18px] px-[60px] py-[20px] mb-4'>
                  <p className='text-[#fff] text-[20px] py-[0px]'>  ★  ★  ★  ★  ★</p>
                  <p className='text-[18px] font-[rhd] font-[400] text-[#fff]'>&ldquo;I’ve been using [Your Company Name]&apos;s products for years, and they never disappoint. If their future releases are anything like what they’ve teased, I can’t wait to try them!&ldquo;</p>
                  <div className='col-md-6 flex gap-2 items-center py-[20px]'>
                    <div className='col-md-3'>
                      <Image src="/assets/images/Ellipse 2.svg"
                        width={64}
                        alt='...'
                        height={10} />
                    </div>
                    <div className='col-md-9'>
                      <p className='text-[18px] font-[rhd] font-[700] text-[#fff] p-0 m-0'>Rishabh</p>
                      <p className='text-[18px] font-[rhd] font-[400] text-[#fff] p-0 m-0'>Long Time Customer</p>

                    </div>

                  </div>
                </div>


                <div className='col-md-12 bg-[#F6F6F6] rounded-[18px] px-[60px] py-[20px] mb-4'>
                  <p className='text-[#000] text-[20px] py-[0px]'>  ★  ★  ★  ★  ★</p>
                  <p className='text-[18px] font-[rhd] font-[400] text-[#000]'>&quot;I’ve been using [Your Company Name]&apos;s products for years, and they never disappoint. If their future releases are anything like what they’ve teased, I can’t wait to try them!&quot;</p>
                  <div className='col-md-6 flex gap-2 items-center py-[20px]'>
                    <div className='col-md-3'>
                      <Image src="/assets/images/Ellipse 2.svg"
                        width={64}
                        alt='...'
                        height={10} />
                    </div>
                    <div className='col-md-9'>
                      <p className='text-[18px] font-[rhd] font-[700] text-[#000] p-0 m-0'>Rishabh</p>
                      <p className='text-[18px] font-[rhd] font-[400] text-[#000] p-0 m-0'>Long Time Customer</p>

                    </div>

                  </div>
                </div>

                <div className='col-md-12 bg-[#F6F6F6] rounded-[18px] px-[60px] py-[20px] mb-4'>
                  <p className='text-[#000] text-[20px] py-[0px]'>  ★  ★  ★  ★  ★</p>
                  <p className='text-[18px] font-[rhd] font-[400] text-[#000]'>&quot;I’ve been using [Your Company Name]&apos;s products for years, and they never disappoint. If their future releases are anything like what they’ve teased, I can’t wait to try them!&quot;</p>
                  <div className='col-md-6 flex gap-2 items-center py-[20px]'>
                    <div className='col-md-3'>
                      <Image src="/assets/images/Ellipse 2.svg"
                        width={64}
                        alt='...'
                        height={10} />
                    </div>
                    <div className='col-md-9'>
                      <p className='text-[18px] font-[rhd] font-[700] text-[#000] p-0 m-0'>Rishabh</p>
                      <p className='text-[18px] font-[rhd] font-[400] text-[#000] p-0 m-0'>Long Time Customer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-12'>
              <Footer/>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}

export default page