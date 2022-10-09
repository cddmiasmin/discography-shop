import React from 'react'

import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

const ReleasesShowcase = (props) => {
    return (
        <Swiper
            slidesPerView={2}
            spaceBetween={10}
            navigation={true}
            loop={true}
            loopFillGroupWithBlank={true}
            modules={[Navigation]}
            className="mySwiper w-100"
            style={{ hight: '30vh' }}
        >
            {props.data.releases.map((banner, key) => (
                <SwiperSlide
                    key={key}
                    style={{ width: '50%', height: '50vh', cursor: 'pointer' }}
                >
                    <Link to='/produto'>
                        <img className='w-100 h-100' src={banner.imgUrl} alt="" />
                    </Link>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default ReleasesShowcase