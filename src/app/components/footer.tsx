import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <section className="overflow-hidden sm:px-[80px] px-[20px]">
            <div className="bg-white py-10 border-top border-gray-200">

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 sm:flex">
                        <div className="col-md-4">
                            {/* Logo and Testimonial Section */}
                            <div className="col-md-10">
                                <div className="d-flex align-items-center mb-3">
                                    <Image
                                        src="/assets/images/Group 45.svg"
                                        alt="Agile Logo"
                                        width={42}
                                        height={42}
                                        className="p-0 m-0"
                                    />
                                    <h2 className="ms-2 text-primary">Agile</h2>
                                </div>
                                <p className="text-[15px] font-[400] font-[rhd]">
                                    "I've been using [Your Company Name]'s products for years, and they never disappoint. If their future releases are anything like what they've teased, I can’t wait to try them!"
                                </p>
                                <div className="d-flex gap-3 mt-4">
                                    <Link href="#" className="text-secondary">
                                    <Image
                                        src="/assets/images/Vector (2).svg"
                                        alt="Agile Logo"
                                        width={24}
                                        height={42}
                                        className="p-0 m-0"
                                    />
                                    </Link>
                                    <Link href="#" className="text-secondary">
                                    <Image
                                        src="/assets/images/p.svg"
                                        alt="Agile Logo"
                                        width={24}
                                        height={42}
                                        className="p-0 m-0"
                                    />
                                    </Link>
                                    <Link href="#" className="text-secondary">
                                    <Image
                                        src="/assets/images/i.svg"
                                        alt="Agile Logo"
                                        width={24}
                                        height={42}
                                        className="p-0 m-0"
                                    />
                                    </Link>
                                    <Link href="#" className="text-secondary">
                                    <Image
                                        src="/assets/images/f.svg"
                                        alt="Agile Logo"
                                        width={24}
                                        height={42}
                                        className="p-0 m-0"
                                    />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8 sm:flex jusify-center py-4">
                            {/* Company Links Section */}
                            <div className="col-md-4">
                                <h5 className="text-[18px] font-[700] text-[#FF6A00] font-[rhd]">Company</h5>
                                <ul className="list-unstyled mt-3">

                                    <Link href="" className="text-[15px] text-[#000] font-[400] font-[rhd] no-underline">
                                        <li>Shop</li>
                                    </Link>

                                    <Link href="" className="text-[15px] text-[#000] font-[400] font-[rhd] no-underline">
                                        <li>Services</li>
                                    </Link>

                                    <Link href="" className="text-[15px] text-[#000] font-[400] font-[rhd] no-underline">
                                        <li>Contact Us</li>
                                    </Link>

                                    <Link href="" className="text-[15px] text-[#000] font-[400] font-[rhd] no-underline">
                                        <li>Categories</li>
                                    </Link>

                                </ul>
                            </div>

                            {/* Support Links Section */}
                            <div className="col-md-4">
                                <h5 className="text-[18px] font-[700] text-[#FF6A00] font-[rhd]">Support</h5>
                                <ul className="list-unstyled mt-3">
                                    <Link href="" className="text-[15px] text-[#000] font-[400] font-[rhd] no-underline">
                                        <li>Terms of Service</li>
                                    </Link>

                                    <Link href="" className="text-[15px] text-[#000] font-[400] font-[rhd] no-underline">
                                        <li>Return & Refund Policy</li>
                                    </Link>

                                    <Link href="" className="text-[15px] text-[#000] font-[400] font-[rhd] no-underline">
                                        <li>Privacy Policy</li>
                                    </Link>

                                    <Link href="" className="text-[15px] text-[#000] font-[400] font-[rhd] no-underline">
                                        <li>Shipping Policy</li>
                                    </Link>


                                </ul>
                            </div>

                            {/* Newsletter Section */}
                            <div className="col-md-4">
                                <h5 className="text-[18px] font-[700] text-[#FF6A00] font-[rhd]">Newsletter</h5>
                                <p className="text-[15px] font-[400] font-[rhd] mt-3">
                                    Sign up to receive occasional emails on special promos, early access to new products, and much more :)
                                </p>
                                <form className=" mt-3">
                                    <input
                                        type="email"
                                        placeholder="E-mail"
                                        className="form-control me-2 mb-3"
                                    />
                                    <button type="submit" className="px-4 rounded-[2px] py-1 bg-[#FF6A00] text-white">
                                        Subscribe
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>



                </div>

                <div className="row mt-5 pt-4 border-top">
                    <div className="col-md-6 text-center text-md-start text-[15px] font-[400] font-[rhd]">
                        &copy; 2025 - Agile.
                    </div>
                    <div className="col-md-6 d-flex justify-content-center justify-content-md-end mt-3 mt-md-0">
                    <Image
                                        src="/assets/images/Untitled-1 1.svg"
                                        alt="Agile Logo"
                                        width={300}
                                        height={42}
                                        className="p-0 m-0"
                                    />
                      
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
}
