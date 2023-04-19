import React from 'react';
import {
    FaFacebook,
    FaInstagram,
    FaGithub,
    FaLinkedin,
    FaMailBulk,
} from 'react-icons/fa';

function Footer() {
    return (
        <>
            <div className=' h-40 md:h-24 sm:h-12'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
                    <path
                        fill='#003566'
                        fill-opacity='1'
                        d='M0,128L0,128L288,128L288,256L576,256L576,64L864,64L864,160L1152,160L1152,64L1440,64L1440,320L1152,320L1152,320L864,320L864,320L576,320L576,320L288,320L288,320L0,320L0,320Z'
                    ></path>
                </svg>
            </div>
            <div className='bg-theme w-screen flex justify-center'>
                <div className='w-1/2 md:w-full'>
                    <div className='p-5 font-mont text-center'>
                        <p className='text-gray-50 pb-5'></p>

                        <div className='h-1 border-2 border-white border-dotted'></div>

                        <div className='flex text-white w-full justify-between py-3'>
                            <a href='https://facebook'>
                                <FaFacebook />
                            </a>
                            <a
                                href='mailto:nickmmaslov@gmail.com'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <FaMailBulk />
                            </a>
                            <a href='https://facebook'>
                                <FaInstagram />
                            </a>
                            <a href='https://facebook'>
                                <FaLinkedin />
                            </a>
                            <a href='https://github.com/NickMaslov'>
                                <FaGithub />
                            </a>
                        </div>

                        <div className='h-1 border-2 border-gray-50 border-dotted'></div>

                        <p className='text-gray-50 my-2'>
                            Designed and Developed By Nick Maslov &copy; 2023
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
