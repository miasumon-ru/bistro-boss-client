import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'


const Slider = () => {
    return (
        <div className='my-16'>

            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"

            >

                <SwiperSlide className='relative'>
                   <img src={slide1} alt="" />
                   <h3 className="md:text-3xl text-xl left-5 bottom-8 md:left-12 md:bottom-8 absolute lg:bottom-12 lg:left-28 text-white text-center">Salad</h3>

                </SwiperSlide>

                <SwiperSlide className='relative'>
                   <img src={slide2} alt="" />

                   <h3 className="md:text-3xl text-xl left-5 bottom-8 md:left-12 md:bottom-8 absolute lg:bottom-12 lg:left-28 text-white text-center">Soups</h3>

                </SwiperSlide>

                <SwiperSlide className='relative' >
                   <img src={slide3} alt="" />
                   <h3 className="md:text-3xl text-xl left-5 bottom-8 md:left-12 md:bottom-8 absolute lg:bottom-12 lg:left-28 text-white text-center">Pizza</h3>

                </SwiperSlide>

                <SwiperSlide className='relative'>
                   <img src={slide4} alt="" />
                   <h3 className="md:text-3xl text-xl left-2 bottom-8 md:left-12 md:bottom-8 absolute lg:bottom-12 lg:left-28 text-white text-center">Deserts</h3>

                </SwiperSlide>

                <SwiperSlide className='relative'>
                   <img src={slide5} alt="" />
                   <h3 className="md:text-3xl text-xl left-5 bottom-8 md:left-12 md:bottom-8 absolute lg:bottom-12 lg:left-28 text-white text-center">Salad</h3>

                </SwiperSlide>


            </Swiper>

        </div>
    );
};

export default Slider;