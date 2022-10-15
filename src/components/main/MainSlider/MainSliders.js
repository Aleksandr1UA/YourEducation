import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Virtual, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import SingleSlider from './SingleSlider';

SwiperCore.use([Virtual, Navigation]);

function MainSlider() {
    const [setSwiperRef] = useState(null);
    const [slides, setSlides] = useState([]);
        //Array.from({ length: 15 }).map((_, index) => `Slide ${index + 1}`));

    useEffect(() => {
        setSlides([
           {
               img: './images/slider_img_1.jpeg',
               course: 'Development',
               level: 'All level',
               title: 'Angular - The Complete Guide (2021 Edition)',
               rateStar: 4,
               ratePeople: 3500,
               student: 4500,
               timeCourse: '12h 45m',
               lectures: 65,
               userName: 'Billy Vasquez',
               price: 255
           },
           {
               img: './images/slider_img_2.jpeg',
               course: 'Design',
               level: 'Beginner',
               title: 'Time Management Mastery: Do More, Stress Less',
               rateStar: 4,
               ratePeople: 2000,
               student: 1200,
               timeCourse: '09h 56m',
               lectures: 21,
               userName: 'Frances Guerrero',
               price: 200
            },
            {
                img: './images/slider_img_3.jpeg',
                course: 'Design',
                level: 'Beginner',
                title: 'The complete Digital Marketing Course - 8 Course in 1',
                rateStar: 4.5,
                ratePeople: 6500,
                student: 6500,
                timeCourse: '6h 56m',
                lectures: 82,
                userName: 'Larry Lawson',
                price: 'Free'
            },
            {
                img: './images/slider_img_4.jpeg',
                course: 'Development',
                level: 'Pro',
                title: 'React - The Complete Guide (2022 Edition)',
                rateStar: 5,
                ratePeople: 3500,
                student: 3000,
                timeCourse: '30h 32m',
                lectures: 15,
                userName: 'Lori Stevens',
                price: 500
            }   
        ])  
    }, []);

    return <>
        <Swiper onSwiper={setSwiperRef}
                slidesPerView={3}
                spaceBetween={30}
                centeredSlides={false}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className={'mySwiper'}
                virtual
        >
        {slides.map((slide, index) => <SwiperSlide key={index}> 
                                        <SingleSlider slide={slide} />
                                    </SwiperSlide> )}
        </Swiper>
        
    </>
}

export default MainSlider;