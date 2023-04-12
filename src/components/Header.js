import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
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
    const [showMenu, setShowMenu] = useState('md:hidden');

    const pathname = window.location.pathname;

    return (
        <div className='text-white font-mont shadow-lg z-20 relative '>
            <div
                className={`flex bg-theme justify-between items-center md:p-5 pl-20 ${
                    showMenu === '' && 'md:flex-col'
                }`}
            >
                <div className='flex justify-between items-center w-full '>
                    <Link to='/'>
                        <h1 className='text-4xl font-semibold hover:text-yellow-500 cursor-pointer '>
                            Nick Maslov
                        </h1>
                    </Link>

                    <FaBars
                        onClick={() => {
                            if (showMenu === 'md:hidden') {
                                setShowMenu('');
                            } else {
                                setShowMenu('md:hidden');
                            }
                        }}
                        className='lg:hidden xl:hidden 2xl:hidden md:flex cursor-pointer'
                    />
                </div>

                <div className='flex md:hidden'>
                    {menuItems.map((item) => (
                        <li
                            className={`list-none mx-5 px-5 ${
                                item.key === pathname &&
                                'bg-white text-black rounded-md'
                            }`}
                        >
                            <Link to={`${item.key}`}>{item.title}</Link>
                        </li>
                    ))}
                    <li
                        className={`list-none mx-5 border border-purple-300 hover:border-purple-400  rounded-md  text-purple-300 hover:text-purple-400 whitespace-nowrap`}
                    >
                        <a href={CV} download>
                            Download CV
                        </a>
                    </li>
                </div>

                <div
                    className={`mt-5 md:flex items-start justify-start w-full flex-col lg:hidden 2xl:hidden xl:hidden ${showMenu}`}
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
                        className={`list-none mt-5 rounded-md  text-purple-300 hover:text-purple-400 whitespace-nowrap `}
                    >
                        <a href={CV} download>
                            Download CV
                        </a>
                    </li>
                </div>
            </div>
        </div>
    );
}

export default Header;
