/* eslint-disable @next/next/no-img-element */
"use client"
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import 'swiper/css';
import 'swiper/css/navigation';
import Link from 'next/link';

const slides = [
    {
        img: '../assets/1.png',
        span: 'Bose',
        title: 'Bose QuietComfort 45 Wireless Bluetooth Noise Cancelling Headphones',
        desc: 'Bose QuietComfort 45 Wireless Bluetooth Noise Cancelling Headphones, Over-Ear Headphones with Microphone, Personalized Noise Cancellation and Sound, White Smoke',
    },
    {
        img: '../assets/2.png',
        span: 'Bose',
        title: 'Bose QuietComfort 45 Wireless Bluetooth Noise Cancelling Headphones',
        desc: 'Bose QuietComfort 45 Wireless Bluetooth Noise Cancelling Headphones, Over-Ear Headphones with Microphone, Personalized Noise Cancellation and Sound, Triple Black',
    },
    {
        img: '../assets/3.png',
        span: 'Eaorul',
        title: 'EAORUL Active Noise Cancelling Headphones, 100H Playtime Headphones Wireless Bluetooth',
        desc: 'EAORUL Active Noise Cancelling Headphones, 100H Playtime Headphones Wireless Bluetooth, Bluetooth Headphones with Microphone, Over- Ear Wireless Headphones with Deep Bass for Travel (Black)',
    },
    {
        img: '../assets/4.png',
        span: 'Runolim',
        title: 'RUNOLIM Hybrid Active Noise Cancelling Headphones',
        desc: 'RUNOLIM Hybrid Active Noise Cancelling Headphones, Wireless Over Ear Bluetooth Headphones with Microphone, 65H Playtime, Foldable Headphones with HiFi Audio, Deep Bass for Home Travel Office',
    },
    {
        img: '../assets/1.png',
        span: 'Bose',
        title: 'Bose QuietComfort 45 Wireless Bluetooth Noise Cancelling Headphones',
        desc: 'Bose QuietComfort 45 Wireless Bluetooth Noise Cancelling Headphones, Over-Ear Headphones with Microphone, Personalized Noise Cancellation and Sound, White Smoke',
    },
    {
        img: '../assets/2.png',
        span: 'Bose',
        title: 'Bose QuietComfort 45 Wireless Bluetooth Noise Cancelling Headphones',
        desc: 'Bose QuietComfort 45 Wireless Bluetooth Noise Cancelling Headphones, Over-Ear Headphones with Microphone, Personalized Noise Cancellation and Sound, Triple Black',
    },
];

const Slider = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animationKey, setAnimationKey] = useState(0);

    const handleSlideChange = (swiper) => {
        setActiveIndex(swiper.realIndex);
        // Trigger the exit animation by changing the key
        setAnimationKey((prevKey) => prevKey + 1);
    };

    const formatNumberWithZero = (number) => {
        return number < 10 ? `0${number}` : `${number}`;
    };

    return (
        <>
            {/**slider and content ===> */}
            <div className="flex flex-col text-center items-center lg:text-start lg:flex-row lg:items-start relative">
                <AnimatePresence exitBeforeEnter={false} mode="wait">
                    <motion.div
                        key={activeIndex}
                        className="w-full lg:w-1/3 mt-36"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }} >
                        <motion.span
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.1, delay: 0.1 }}
                            className="text-gray-500 font-medium text-md tracking-wider" >
                            {slides[activeIndex].span}
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.4 }}
                            className="text-black font-bold text-xl mt-2" >
                            {slides[activeIndex].title}
                        </motion.h2>
                        <motion.p
                            className="mt-2 mb-7 text-sm leading-6 text-gray-500"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.7 }} >
                            {slides[activeIndex].desc}
                        </motion.p>
                        <Link href="/headPhones" class="relative py-1 font-bold text-sm tracking-wider overflow-hidden group">
                            <span class="absolute left-0 bottom-0 h-[2px] w-0 bg-black transition-all duration-700 group-hover:w-full"></span>
                            See details
                        </Link>


                    </motion.div>
                </AnimatePresence>
                <Swiper
                    onSlideChange={(swiper) => handleSlideChange(swiper)}
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: -100,
                        depth: 500,
                        modifier: 3.5,
                        slideShadows: false,
                    }}
                    speed={1000}
                    navigation={{
                        prevEl: '.prev-swiper',
                        nextEl: '.next-swiper',
                    }}
                    modules={[EffectCoverflow, Navigation]}
                    className="swiper_container overflow-hidden"
                >
                    {slides.map((image, index) => (
                        <SwiperSlide key={index} className="blur-lg">
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                <motion.img
                                    id="image"
                                    initial={{ opacity: 0.5 }}
                                    animate={{ x: -100, opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                    src={image.img}
                                    alt={`Slide ${index + 1}`}
                                />
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="overlay-one">
                    <img className="object-cover w-full h-full" src="../assets/Frame 2.png" alt="" />
                </div>
            </div>
            {/**counter ===> */}
            <div className="absolute -bottom-52 lg:bottom-5 right-5 ">
                <AnimatePresence exitBeforeEnter={false} mode="wait">
                    <motion.span
                        key={animationKey}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.7 }}
                        className="font-bold text-3xl"
                    >
                        {`${formatNumberWithZero(activeIndex + 1)}`}
                    </motion.span>
                </AnimatePresence>
                <span className="text-gray-400 text-sm">{`/${formatNumberWithZero(slides.length)}`}</span>
            </div>
            {/**buttons of swiper ===> ///*/}
            <button className="prev-swiper">
                <IoIosArrowBack className="text-gray-300" size={20} />
            </button>
            <button className="next-swiper">
                <IoIosArrowForward className="text-gray-300" size={20} />
            </button>
        </>
    );
};

export default Slider;
