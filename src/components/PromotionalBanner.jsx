import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import './styles/promotionalBanner.css'

import './../data/dataPromotionalBanner'

import { Autoplay, Pagination } from "swiper";

const PromotionalBanner = () => {
  return (
    <div className='promotional-banner 
                    container-fluid' >
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true
        }}
        modules={[Autoplay, Pagination]}
        className="MySwiper"
      >

        <SwiperSlide
          className="MySwiperSlide
                    d-flex justify-content-center align-items-center"
        >
          <img
            className='h-100 w-100'
            src="src\assets\images\PromotionalBanner\bp-dance-fever-fatm.jpg"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide
          className="MySwiperSlide
                    d-flex justify-content-center align-items-center"
        >
          <img
            className='h-100 w-100'
            src="src\assets\images\PromotionalBanner\bt-midnights-ts.jpg"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide
          className="MySwiperSlide
                    d-flex justify-content-center align-items-center"
        >
          <img
            className='h-100 w-100'
            src="src\assets\images\PromotionalBanner\bp-holyfvck-dm.jpg"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide
          className="MySwiperSlide
                    d-flex justify-content-center align-items-center"
        >
          <img
            className='h-100 w-100'
            src="src\assets\images\PromotionalBanner\bp-renaissance-b.jpg"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide
          className="MySwiperSlide
                    d-flex justify-content-center align-items-center"
        >
          <img
            className='h-100 w-100'
            src="src\assets\images\PromotionalBanner\bt-lana-del-rey.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default PromotionalBanner