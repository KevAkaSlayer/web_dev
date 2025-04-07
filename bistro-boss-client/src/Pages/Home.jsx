import React, { useEffect } from 'react';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import featuredImage from '../assets/home/featured.jpg';
import slide1 from '../assets/home/slide1.jpg';
import slide2 from '../assets/home/slide2.jpg';
import slide3 from '../assets/home/slide3.jpg';
import slide4 from '../assets/home/slide4.jpg';
import slide5 from '../assets/home/slide5.jpg';
import SectionTitle from '../Components/SectionTitle/SectionTitle';
import MenuItem from '../Components/Shared/MenuItem/MenuItem';


const Home = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => setMenu(data.filter(item => item.category === 'popular'))) // Filter for popular items)
    }), [];


    return (
        <>
            <div className="container mx-auto ">
                <div className="carousel h-[600px]">
                    {/* Slide 1 */}
                    <div id="slide1" className="carousel-item relative w-full h-full">
                        <img
                            src="./src/assets/home/01.jpg"
                            className="w-full h-full object-cover "
                            alt="Slide 1"
                        />
                        <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
                            <a href="#slide6" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    {/* Slide 2 */}
                    <div id="slide2" className="carousel-item relative w-full h-full">
                        <img
                            src="./src/assets/home/02.jpg"
                            className="w-full h-full object-cover "
                            alt="Slide 2"
                        />
                        <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    {/* Slide 3 */}
                    <div id="slide3" className="carousel-item relative w-full h-full">
                        <img
                            src="./src/assets/home/03.png"
                            className="w-full h-full object-cover "
                            alt="Slide 3"
                        />
                        <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    {/* Slide 4 */}
                    <div id="slide4" className="carousel-item relative w-full h-full">
                        <img
                            src="./src/assets/home/04.jpg"
                            className="w-full h-full object-cover "
                            alt="Slide 4"
                        />
                        <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide5" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    {/* Slide 5 */}
                    <div id="slide5" className="carousel-item relative w-full h-full">
                        <img
                            src="./src/assets/home/05.png"
                            className="w-full h-full object-cover"
                            alt="Slide 5"
                        />
                        <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide6" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide6" className="carousel-item relative w-full h-full">
                        <img
                            src="./src/assets/home/06.png"
                            className="w-full h-full object-cover"
                            alt="Slide 5"
                        />
                        <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
                            <a href="#slide5" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* swiper slider */}
            <section>
                <SectionTitle
                    heading={"Order Online"}
                    SubHeading={"From 11.00am to 10.00pm"}
                >
                </SectionTitle>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper mt-10 mb-24"
                >
                    <SwiperSlide>
                        <img src={slide1} alt="" />
                        <h3 className='text-4xl uppercase text-center -mt-16 text-white '>salads</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide2} alt="" />
                        <h3 className='text-4xl uppercase text-center -mt-16 text-white '>pizza</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide3} alt="" />
                        <h3 className='text-4xl uppercase text-center -mt-16 text-white '>soup</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide4} alt="" />
                        <h3 className='text-4xl uppercase text-center -mt-16 text-white '>brownie</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide5} alt="" />
                        <h3 className='text-4xl uppercase text-center -mt-16 text-white '>salads</h3>
                    </SwiperSlide>

                </Swiper>
            </section>

            {/* popular menu */}

            <section className='mb-10'>
                <SectionTitle
                    heading={"From Our Menu"}
                    SubHeading={"Popular Items"}
                ></SectionTitle>

                <div className='grid md:grid-cols-2 gap-10 mx-10'>
                    {
                        menu.map(item => (
                            <MenuItem key={item._id} item={item} ></MenuItem>

                        ))
                    }

                </div>
            </section>


            {/* featured section */}

            <section className='bg-[url("./src/assets/home/featured.jpg")] bg-fixed bg-cover bg-center h-[600px] mb-10 z-10 pt-8'>
                <SectionTitle
                    heading={"Featured Items"}
                    SubHeading={"Check it out"}
                >
                </SectionTitle>

                <div className='md:flex justify-center items-center bg-fixed py-20 px-36 text-white mb-10'>
                    <div>
                        <img src={featuredImage} alt="" />
                    </div>
                    <div className='md:ml-10 '>
                        <p>
                            April 8, 2025
                        </p>
                        <p className='uppercase'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sapiente quo animi, vel fuga nesciunt repudiandae esse earum optio ipsum eveniet, commodi suscipit quam voluptates numquam recusandae distinctio, hic quod rem. Cumque ab saepe doloribus beatae nisi quo id sed atque, debitis nihil voluptatem architecto velit eius quasi illum? Corrupti?</p>
                        <button className='btn btn-outline'>Order Now</button>
                    </div>
                </div>

            </section>
        </>
    );
};

export default Home;
