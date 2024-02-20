import React from 'react';
import Img from '../assets/Willie.png'
import circle from '../assets/circle.png'
import img2 from '../assets/img2.png'

const Home = () => {
    return (
        <div className='md:px-10 px-7 my-14 md:h-screen bg-[#579196]' id='home'>
            <div>
                <div className='flex flex-col md:flex-row items-center justify-between w-full'>
                    {/* image & content */}
                    {/* text */}
                    <div className='text-white'>
                        <h6 className='text-3xl mt-12'>Hello, I'm</h6>
                        <h1 className='font-semibold md:text-5xl my-4 text-3xl mt-6'>Mohamed Huzaifa Ameer</h1>
                        <p className='md:w-96'>Freelance Fullstack developer. I create seamless web experiences for end-users.</p>
                        <div className='mt-8'>
                            <button className='btn transition-all duration-500 bg-[#01282B] py-2 px-4 rounded text-white hover:bg-white hover:text-[#01282B]'>About me</button>
                            <button className='btn outline py-1.5 px-6 rounded border-none ml-5 text-white '>Projects</button>
                        </div>
                    </div>
                    {/* img */}
                    <div className='order-first md:order-last relative w-80'>
                        <img src={img2} alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;