import React from 'react';
import Layout from '../components/Layout';
import projectsData from '../resources/projects';

function Projects() {
    return (
        <Layout>
            <div className='flex justify-center'>
                <div className='w-full md:w-2/3 lg:w-1/2'>
                    <lottie-player
                        src='https://assets1.lottiefiles.com/packages/lf20_pwohahvd.json'
                        background='transparent'
                        speed='1'
                        loop
                        autoplay
                    />
                </div>
            </div>
            {/* <div className='mt-20'>
                <div className='h-screen'>
                    <div className='h-3/4'>
                        <lottie-player
                            src='https://assets1.lottiefiles.com/packages/lf20_pwohahvd.json'
                            background='transparent'
                            speed='1'
                            // style='width: 300px; height: 300px;'
                            loop
                            // controls
                            autoplay
                        ></lottie-player>
                    </div>
                    <p className='text-xl font-semibold text-center'>
                        Good ideas are not adopted automatically. They must be
                        driven into practice with courageous patience
                    </p>
                    <h1
                        className='text-4xl text-center font-bold mt-5'
                        data-aos='slide-up'
                    >
                        Because
                    </h1>
                </div>
                <div className='font-bold text-center bg-red-500 mx-20 p-20 text-white rounded-tl-full rounded-br-full md:mx-5'>
                    <h1 className='text-8xl md:text-3xl' data-aos='slide-left'>
                        THE GAME IS...
                    </h1>
                    <h1 className='text-8xl md:text-3xl' data-aos='slide-right'>
                        CONSISTANCY
                    </h1>
                </div>
            </div> */}

            <div className='grid mt-20 grid-cols-1 md:grid-cols-3 items-center justify-center gap-10 mx-5 md:mx-20'>
                {projectsData.map((project) => {
                    return (
                        <div>
                            <div className='relative p-10 border-2 text-center rounded-tr-3xl rounded-bl-3xl border-gray-400'>
                                <img
                                    src={project.image}
                                    alt=''
                                    className='w-full h-52 text-center'
                                />

                                <div className='absolute inset-0 flex items-center justify-center flex-col opacity-0 bg-black hover:opacity-80 rounded-tr-3xl rounded-bl-3xl'>
                                    <h1 className='text-4xl font-semibold text-white'>
                                        {project.title}
                                    </h1>
                                    <button className='border-2 rounded border-white py-2 hover:bg-green-500 px-5 mt-5 text-white'>
                                        DEMO
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </Layout>
    );
}

export default Projects;
