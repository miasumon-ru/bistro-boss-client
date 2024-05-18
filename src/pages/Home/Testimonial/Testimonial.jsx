import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'



const Testimonial = () => {

    const [review, setReview] = useState([])

    useEffect(() => {

        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReview(data))

    }, [])

    console.log(review)
    return (
        <div>

            <SectionTitle
                subHeading={"What our client say"}
                heading={"Testimonial"}

            >

            </SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">



                {
                    review.map(comment => <SwiperSlide key={comment._id}>

                        <div className="flex flex-col items-center justify-center my-24 mx-32">

                            <Rating
                                style={{ maxWidth: 180 }}
                                value={comment.rating}
                                readOnly
                            />
                            <p className="mt-6"> {comment.details} </p>
                            <p className="text-yellow-600 text-2xl my-2">  {comment.name} </p>
                        </div>





                    </SwiperSlide>)
                }







            </Swiper>



        </div>
    );
};

export default Testimonial;