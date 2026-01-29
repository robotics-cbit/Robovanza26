import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaLinkedin, FaPhoneAlt, FaMap } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import Particles from '../../components/hero-section/Particles';
import { FaPeopleGroup } from 'react-icons/fa6';

export default function Footer(){
    return(
        <div className="bg-darkblue text-white">
            <div className="h-auto relative w-full nav-bg">
                <div className='flex flex-col lg:flex-row justify-around py-5'>
                    {/* Contact Section */}
                    <div className='p-5 font-Exo2 w-full lg:w-1/3'>
                        <h2 className='m-4 text-2xl md:text-3xl border-b-3 border-white'>CONTACT US</h2>
                        <Link href='/' className="m-4 flex flex-row items-center text-sm md:text-base hover:text-gray-300 transition-colors">
                            <FaPhoneAlt className="flex-shrink-0"/><span className='px-2'>N Thishan Reddy: +91 8639410265</span>
                        </Link>
                        <Link href='/' className="m-4 flex flex-row items-center text-sm md:text-base hover:text-gray-300 transition-colors">
                            <FaPhoneAlt className="flex-shrink-0"/><span className='px-2'>Peesari Sathvik Reddy: +91 7013816468</span>
                        </Link>
                        <Link href='/' className="m-4 flex flex-row items-center text-sm md:text-base hover:text-gray-300 transition-colors">
                            <FaPhoneAlt className="flex-shrink-0"/><span className='px-2'>Rithwik Vinnakota: +91 9573399747</span>
                        </Link>
                        <Link href='mailto:roboticscbit@gmail.com' className="m-4 flex flex-row items-center text-sm md:text-base hover:text-gray-300 transition-colors">
                            <FaEnvelope className="flex-shrink-0"/><span className='px-2'>roboticscbit@gmail.com</span>
                        </Link>
                        <Link href='/' className="m-4 flex flex-row items-center text-sm md:text-base hover:text-gray-300 transition-colors">
                            <FaMap className="flex-shrink-0"/><span className='px-2'>Chaitanya Bharathi Institute of Technology, Gandipet, Hyderabad</span>
                        </Link>
                    </div>

                    {/* Follow Us Section */}
                    <div className='p-5 font-Exo2 w-full lg:w-1/3'>
                        <h2 className='m-4 text-2xl md:text-3xl border-b-3 border-white'>FOLLOW US</h2>
                        <Link href='https://www.instagram.com/robotics_cbit' className="m-4 flex flex-row items-center text-sm md:text-base hover:text-gray-300 transition-colors">
                            <FaInstagram className="flex-shrink-0"/> <span className="px-2">Instagram</span>
                        </Link>
                        <Link href='https://www.linkedin.com/company/robotics-and-innovation-club-cbit/' className="m-4 flex flex-row items-center text-sm md:text-base hover:text-gray-300 transition-colors">
                            <FaLinkedin className="flex-shrink-0"/> <span className="px-2">LinkedIn</span>
                        </Link>
                        <h2 className='m-4 mt-5 text-2xl md:text-3xl border-b-3 border-white'>OUR TEAM</h2>
                        <Link href='/Team' className="m-4 flex flex-row items-center text-sm md:text-base hover:text-gray-300 transition-colors">
                            <FaPeopleGroup className="flex-shrink-0"/> <span className="px-2">Team</span>
                        </Link>
                    </div>

                    {/* Map Section */}
                    <div className="embed-map-responsive w-full lg:w-1/3 p-4 lg:max-w-[40vw]">
                        <div className="embed-map-container">
                            <iframe 
                                className="embed-map-frame" 
                                frameBorder="0" 
                                scrolling="no" 
                                marginHeight="0"
                                marginWidth="0" 
                                src="https://maps.google.com/maps?width=400&height=200&hl=en&q=Chaitanya%20Bharathi%20Institute%20of%20Technology&t=&z=16&ie=UTF8&iwloc=B&output=embed"
                                title="CBIT Location Map"
                            >
                            </iframe>
                        </div>
                        <style jsx>{`
                            .embed-map-responsive {
                                position: relative;
                                text-align: right;
                                width: 100%;
                                height: 0;
                                padding-bottom: 60%;
                            }
                            @media (min-width: 1024px) {
                                .embed-map-responsive {
                                    padding-bottom: 35%;
                                }
                            }
                            .embed-map-container {
                                overflow: hidden;
                                background: none !important;
                                width: 100%;
                                height: 100%;
                                position: absolute;
                                top: 0;
                                left: 0;
                            }
                            .embed-map-frame {
                                width: 100% !important;
                                height: 100% !important;
                                position: absolute;
                                top: 0;
                                left: 0;
                            }
                        `}</style>
                    </div>
                </div>
            </div>
        </div>
    )
}