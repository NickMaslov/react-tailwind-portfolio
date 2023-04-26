import React, { useEffect } from 'react';
import Layout from '../components/Layout';
// import {
//     FaBootstrap,
//     FaCss3,
//     FaHtml5,
//     FaJsSquare,
//     FaNodeJs,
//     FaReact,
//     FaAngular,
//     FaJava,
// } from 'react-icons/fa';
import AOS from 'aos';
AOS.init({
    duration: 1000,
});
function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Layout>
            <div>
                {/* Intro section */}
                <div className='h-screen bg-theme'>
                    <div
                        className='md:grid ,grid-cols-1  md:grid-cols-2 h-screen items-center border-0 md:border-4
            md:mx-10 mx-5 z-10 bg-theme border-white transform md:rotate-12 rotate-0 md:w-11/12'
                    >
                        <div className='h-1/2'>
                            <lottie-player
                                src='https://assets8.lottiefiles.com/private_files/lf30_WdTEui.json'
                                background='transparent'
                                speed='1'
                                loop
                                autoplay
                            ></lottie-player>
                        </div>

                        <div className='font-bold text-white text-center'>
                            <h1
                                className='text-4xl md:text-7xl'
                                data-aos='slide-right'
                            >
                                Hi , I am
                                <h1 className='text-yellow-500'>NICK MASLOV</h1>
                            </h1>
                            <h1
                                className='text-xl md:text-4xl text-center'
                                data-aos='slide-left'
                            >
                                FullStack
                                <b className='text-red-500'>Developer</b>
                            </h1>
                        </div>
                    </div>
                </div>

                {/* Technologies */}

                {/* <div className='mt-20'>
                    <h1
                        className='text-4xl text-blue-800 font-bold text-center my-8'
                        data-aos='slide-up'
                    >
                        Technologies I USE
                    </h1>
                    <div className='grid md:grid-cols-1 grid-cols-4'>
                        <FaReact
                            size={180}
                            color='cyan'
                            className='w-full text-center mt-20'
                        />
                        <FaAngular
                            size={180}
                            color='red'
                            className='w-full text-center mt-20 animate-bounce'
                        />
                        <FaJava
                            size={180}
                            color='orange'
                            className='w-full text-center mt-20 animate-bounce'
                        />
                        <FaNodeJs
                            size={180}
                            color='green'
                            className='w-full text-center mt-20'
                        />
                        <FaBootstrap
                            size={180}
                            color='blue'
                            className='w-full text-center mt-20 animate-bounce'
                        />
                        <FaJsSquare
                            size={180}
                            color='green'
                            className='w-full text-center mt-20'
                        />
                        <FaHtml5
                            size={180}
                            color='orange'
                            className='w-full text-center mt-20'
                        />
                        <FaCss3
                            size={180}
                            color='blue'
                            className='w-full text-center mt-20 animate-bounce'
                        />
                    </div>
                </div> */}

                {/* {Javscript Buff} */}
                <div className='my-20'>
                    <div className='text-center h-52'>
                        <h1 className=' font-bold text-6xl py-10'>About me</h1>
                    </div>

                    <div className='md:mx-5 mx-32 shadow-2xl bg-gray-50 -mt-20 rounded-lg hover:bg-sky-700 hover:text-white'>
                        <div className='h-96' data-aos='zoom-in'>
                            <lottie-player
                                src='https://assets9.lottiefiles.com/packages/lf20_sSF6EG.json'
                                background='transparent'
                                speed='1'
                                loop
                                autoplay
                            ></lottie-player>
                        </div>

                        <p className='text-xl my-5 font-semibold md:px-5 px-14 py-10'>
                            JavaScript is one of the most top-ranked programming
                            languages because of its ubiquitous use on all
                            platforms and mass adoption. Main Use Cases: Web
                            Development.
                        </p>
                    </div>
                </div>

                {/* {Dev stack section} */}
                <div className='my-20'>
                    <div className='text-center h-52'>
                        <h1 className='font-bold text-6xl py-10'>
                            My DEV Stack
                        </h1>
                    </div>

                    <div className='md:mx-5 mx-32 shadow-2xl bg-gray-50 -mt-20 rounded-lg hover:bg-sky-700 hover:text-white'>
                        <div className='h-96' data-aos='zoom-in'>
                            <lottie-player
                                src='https://assets2.lottiefiles.com/packages/lf20_aptscmnx.json'
                                background='transparent'
                                speed='1'
                                loop
                                autoplay
                            ></lottie-player>
                        </div>

                        <div className='grid md:grid-cols-1 grid-cols-3 p-5'>
                            <div>
                                <h1 className='text-xl font-bold'>Front End</h1>
                                <hr />
                                <p className='font-semibold mt-2'>HTML/CSS</p>
                                <p className='font-semibold mt-2'>React</p>

                                <p className='font-semibold mt-2'>Javascript</p>
                                <p className='font-semibold mt-2'>Angualr</p>
                                <p className='font-semibold mt-2'>Redux</p>
                            </div>

                            <div className='text-center'>
                                <h1 className='text-xl font-bold'>UI / UX</h1>
                                <hr />
                                <p className='font-semibold mt-2'>Bootstrap</p>
                                <p className='font-semibold mt-2'>Tailwind</p>

                                <p className='font-semibold mt-2'>Ant Design</p>
                                <p className='font-semibold mt-2'>
                                    Material UI
                                </p>
                                <p className='font-semibold mt-2'>
                                    Semantic UI
                                </p>
                            </div>

                            <div className='text-right'>
                                <h1 className='text-xl font-bold'>
                                    Backedn and DB
                                </h1>
                                <hr />
                                <p className='font-semibold mt-2'>Node JS</p>
                                <p className='font-semibold mt-2'>Express JS</p>

                                <p className='font-semibold mt-2'>Python</p>
                                <p className='font-semibold mt-2'>Django</p>
                                <p className='font-semibold mt-2'>Mongo DB</p>
                                <p className='font-semibold mt-2'>
                                    PostgresSQL
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Dev Info */}

                <div>
                    <h1 className='text-4xl text-gray-500 text-center font-bold'>
                        Who is Nick ?
                    </h1>

                    <div className='h-screen relative text-gray-800'>
                        <div className='h-full'>
                            <lottie-player
                                src='https://assets3.lottiefiles.com/packages/lf20_dcatp5cr.json'
                                background='transparent'
                                speed='1'
                                loop
                                autoplay
                            ></lottie-player>
                        </div>
                        <div className='absolute inset-0 flex flex-col items-center justify-center'>
                            <h1 className='text-2xl font-bold'>
                                Hi , Hello , Namaste...
                                <hr />
                                <pre className='text-xl md:text-sm my-5 font-mont font-semibold'>
                                    {JSON.stringify(
                                        {
                                            name: 'Nick M',
                                            age: null,
                                            gender: 'Male',
                                            country: 'USA',
                                            born: 'Ukraine',
                                        },
                                        null,
                                        2
                                    )}
                                </pre>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Home;
