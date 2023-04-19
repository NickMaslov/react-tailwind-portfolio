import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CloudArrowDownIcon, Bars3Icon } from '@heroicons/react/24/solid';

import CV from '../resources/cv.pdf';

const menuItems = [
    {
        title: 'Home',
        key: '/',
    },
    {
        title: 'Projects',
        key: '/projects',
    },
    {
        title: 'Blog',
        key: '/blog',
    },
    {
        title: 'Contact',
        key: '/contact',
    },
];

function Header() {
    const [showMenu, setShowMenu] = useState('hidden');

    const pathname = window.location.pathname;

    return (
        <div className='text-white font-mont shadow-lg z-20 relative '>
            <div
                className={`flex bg-theme justify-between items-center px-5  ${
                    showMenu === '' && 'flex-col md:flex-row'
                }`}
            >
                <div className='flex justify-between items-center w-full '>
                    <Link to='/'>
                        <h1 className='text-4xl font-semibold hover:text-yellow-500 cursor-pointer whitespace-nowrap py-5 transition duration-100 '>
                            Nick Maslov
                        </h1>
                    </Link>

                    <Bars3Icon
                        onClick={() => {
                            if (showMenu === 'hidden') {
                                setShowMenu('');
                            } else {
                                setShowMenu('hidden');
                            }
                        }}
                        className='h-8 w-8 stroke-white  flex md:hidden cursor-pointer'
                    />
                </div>

                <div className='hidden md:flex'>
                    {menuItems.map((item) => (
                        <li
                            className={`list-none  px-5 ${
                                item.key === pathname &&
                                'bg-white text-black rounded-md'
                            }`}
                        >
                            <Link to={`${item.key}`}>{item.title}</Link>
                        </li>
                    ))}
                    <li
                        className={`flex list-none px-5  rounded-md  text-purple-300 hover:text-purple-400 whitespace-nowrap`}
                    >
                        <a href={CV} download>
                            Download CV
                        </a>
                        <CloudArrowDownIcon className='h-6 w-6 ml-1' />
                    </li>
                </div>

                <div
                    className={`flex items-start justify-start w-full flex-col md:hidden ${showMenu}`}
                >
                    {menuItems.map((item) => {
                        return (
                            <li
                                key={item.key}
                                className={`list-none mt-5 ${
                                    item.key === pathname &&
                                    'bg-white text-black rounded-md px-5'
                                }`}
                            >
                                <Link to={`${item.key}`}>{item.title}</Link>
                            </li>
                        );
                    })}
                    <li
                        className={`flex list-none my-5 rounded-md  text-purple-300 hover:text-purple-400 whitespace-nowrap`}
                    >
                        <a href={CV} download>
                            Download CV
                        </a>
                        <CloudArrowDownIcon className='h-6 w-6 ml-1' />
                    </li>
                </div>
            </div>
        </div>
    );
}

export default Header;
