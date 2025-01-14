

import React from 'react'
import Image from 'next/image';
import Footer from '@/app/components/footer';
import Header from '@/app/components/header';
import WordSlider from '@/app/components/wordslider';
const page = () => {
    return (
        <>


            <Header />



            <section className='overflow-hidden bg-[#131F81] sm:px-[80px] px-[20px]'>
                <div className='container-fluid'>

                    <div className='row align-items-center'>
                        <div className='col-md-6 mb-4'>
                            <div className='col-md-12'>
                                <div className='py-4'>

                                    <button className='sm:w-[350px] font-[700] w-full font-[rhd]  hover:bg-[#131F81] hover:text-[#fff] py-2 sm:border text-[#131F81] text-[18px] rounded-[50px] bg-[#fff]'>believe in delivering only the best</button>
                                </div>
                                <p className='sm:text-[50px] text-[30px] font-[600] text-[#fff] font-[lf] sm:leading-[55px] leading-[35px]'>About us</p>
                                <p className='sm:text-[18px] text-[16px] font-[400] text-[#fff] font-[rhd]'>Welcome to [Your Store Name], where quality meets convenience! Our mission is simple: to provide you with an exceptional shopping experience by offering a diverse selection of top-quality products that cater to your unique needs and lifestyle.</p>

                            </div>
                        </div>
                        <div className='col-md-6 mb-4 py-[80px]'>
                            <div className='sm:flex sm:justify-end'>
                                <div className="col-md-10">
                                    <Image
                                        src="/assets/images/18771503_6029653 1.svg"
                                        alt="..."
                                        width={650}
                                        height={10}
                                        className="w-full drop-shadow-[0_4px_6px_rgba(155,155,155,1)]"
                                    />
                                </div>


                            </div>

                        </div>
                    </div>
                </div>

            </section>





            <section className='overflow-hidden sm:px-[80px] px-[20px] pt-[80px] '>
                <div className='container-fluid'>

                    <div className='row align-items-center '>
                        <div className='col-md-6 mb-4'>
                            <div className='col-md-12'>


                                <p className=' font-[rhd] font-[600] text-[25px]'>customers worldwide</p>

                                <p className='sm:text-[57px] text-[28px] font-[600] font-[lf] sm:leading-[62px] leading-[33px]'>Quality You Can<span className='text-[#FF6A00]'>Trust</span></p>
                                <p className='sm:text-[18px] text-[16px] font-[400] font-[rhd]'>We partner with top brands and manufacturers to bring you products that are built to last.</p>


                            </div>
                        </div>
                        <div className='col-md-6 mb-4'>
                            <div className='sm:flex sm:justify-end justify-center'>
                                <div className="col-md-10">
                                    <Image
                                        src="/assets/images/Group 154.svg"
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





            <section className='overflow-hidden sm:px-[80px] px-[20px] py-5'>
                <div className='container-fluid '>
                    <div className='row'>

                        <div className='col-md-12'>
                            <div className="row">
                                <div className='col-md-12 sm:mb-4 sm:pt-[60px]'>

                                    <div className='col-md-12 sm:pb-5 py-5'>
                                        <p className='sm:text-[62px] text-[40px] font-[lf] font-[700] text-center'>Why <span className='text-[#FF6A00]'>Choose</span>  Us? </p>
                                    </div>
                                </div>

                                <div className='col-md-12 flex justify-center'>
                                    <div className="col-md-10 sm:flex ">
                                        <div className='col-md-4 flex justify-center py-4 '>
                                            <div className='col-md-8'>

                                                <div className='flex justify-center h-[200px]'>

                                                    <Image
                                                        src="/assets/images/Group 155.svg"
                                                        width={170}
                                                        height={10}
                                                        className=''
                                                        alt='...' />
                                                </div>
                                                <div className='h-[70px]'>
                                                    <p className='font-[lf] text-center font-[600] leading-[31px] text-[26px]'>Customer-Centered Service</p>
                                                </div>
                                                <p className='font-[rhd] text-center font-[400] text-[16px]'>Your satisfaction is our top priority. Our team is here to assist you every step of the way.</p>
                                            </div>
                                        </div>

                                        <div className='col-md-4 flex justify-center py-4 '>
                                            <div className='col-md-8 '>

                                                <div className='flex justify-center h-[200px]'>

                                                    <Image
                                                        src="/assets/images/Group 156.svg"
                                                        width={170}
                                                        height={10}
                                                        className=''
                                                        alt='...' />
                                                </div>
                                                <div className='h-[70px]'>
                                                    <p className='font-[lf] text-center font-[600] leading-[31px] text-[26px]'>Affordable Prices</p>
                                                </div>
                                                <p className='font-[rhd] text-center font-[400] text-[16px]'>We believe in making high-quality products accessible without breaking the bank</p>
                                            </div>
                                        </div>

                                        <div className='col-md-4 flex justify-center py-4 '>
                                            <div className='col-md-8'>

                                                <div className='flex justify-center h-[200px]'>

                                                    <Image
                                                        src="/assets/images/Group 157.svg"
                                                        width={170}
                                                        height={10}
                                                        className=''
                                                        alt='...' />
                                                </div>
                                                <div className='h-[70px] '>
                                                    <p className='font-[lf] text-center font-[600] leading-[31px] text-[26px]'>Fast & Secure Shipping</p>
                                                </div>
                                                <p className='font-[rhd] text-center font-[400] text-[16px]'>Enjoy reliable and fast shipping on all orders, so you can get what you need when you need it</p>
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







            <section className='overflow-hidden'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='col-md-12 flex justify-center'>
                                <div className='col-md-10'>
                                    <div className='col-md-12'><p className='text-center'>our team</p></div>
                                    <div className='sm:grid grid-cols-2 gap-5'>
                                        <div className=' sm:flex justify-center'>
                                            <div className='col-md-4'>
                                                <div>
                                                    <Image
                                                        src="/assets/images/Rectangle 62.svg"
                                                        alt="..."
                                                        width={650}
                                                        height={10}
                                                        className="w-full"
                                                    />
                                                </div>
                                            </div>
                                            <div className='col-md-8 flex justify-center items-center'>
                                                <div className='col-md-10 px-4 py-3'>
                                                    <p className='font-[lf] font-[600] text-[20px] leading-[25px]'>Abhishek Kumar</p>
                                                    <p className='font-[lf] font-[400] text-[16px]'>Operations Director</p>
                                                    <p className='font-[rhd] font-[400] text-[16px]'>With over [X] years of experience in [industry], [Name] leads our company with a vision focused on quality, innovation, and customer satisfaction.</p>

                                                </div>
                                            </div>
                                        </div>

                                        <div className=' sm:flex justify-center'>
                                            <div className='col-md-4'>
                                                <div>
                                                    <Image
                                                        src="/assets/images/Rectangle 62.svg"
                                                        alt="..."
                                                        width={650}
                                                        height={10}
                                                        className="w-full"
                                                    />
                                                </div>
                                            </div>
                                            <div className='col-md-8 flex justify-center items-center'>
                                                <div className='col-md-10 px-4 py-3'>
                                                    <p className='font-[lf] font-[600] text-[20px] leading-[25px]'>Abhishek Kumar</p>
                                                    <p className='font-[lf] font-[400] text-[16px]'>Operations Director</p>
                                                    <p className='font-[rhd] font-[400] text-[16px]'>With over [X] years of experience in [industry], [Name] leads our company with a vision focused on quality, innovation, and customer satisfaction.</p>

                                                </div>
                                            </div>
                                        </div>

                                        <div className=' sm:flex justify-center'>
                                            <div className='col-md-4'>
                                                <div>
                                                    <Image
                                                        src="/assets/images/Rectangle 62.svg"
                                                        alt="..."
                                                        width={650}
                                                        height={10}
                                                        className="w-full"
                                                    />
                                                </div>
                                            </div>
                                            <div className='col-md-8 flex justify-center items-center'>
                                                <div className='col-md-10 px-4 py-3'>
                                                    <p className='font-[lf] font-[600] text-[20px] leading-[25px]'>Abhishek Kumar</p>
                                                    <p className='font-[lf] font-[400] text-[16px]'>Operations Director</p>
                                                    <p className='font-[rhd] font-[400] text-[16px]'>With over [X] years of experience in [industry], [Name] leads our company with a vision focused on quality, innovation, and customer satisfaction.</p>

                                                </div>
                                            </div>
                                        </div>

                                        <div className=' sm:flex justify-center'>
                                            <div className='col-md-4'>
                                                <div>
                                                    <Image
                                                        src="/assets/images/Rectangle 62.svg"
                                                        alt="..."
                                                        width={650}
                                                        height={10}
                                                        className="w-full"
                                                    />
                                                </div>
                                            </div>
                                            <div className='col-md-8 flex justify-center items-center'>
                                                <div className='col-md-10 px-4 py-3'>
                                                    <p className='font-[lf] font-[600] text-[20px] leading-[25px]'>Abhishek Kumar</p>
                                                    <p className='font-[lf] font-[400] text-[16px]'>Operations Director</p>
                                                    <p className='font-[rhd] font-[400] text-[16px]'>With over [X] years of experience in [industry], [Name] leads our company with a vision focused on quality, innovation, and customer satisfaction.</p>

                                                </div>
                                            </div>
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
                            <Footer />
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default page