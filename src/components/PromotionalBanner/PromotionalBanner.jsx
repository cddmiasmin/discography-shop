import React, { useEffect } from 'react'

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import './promotionalBanner.css'

import { dataPromotionalBanner } from './../../data/dataPromotionalBanner'

import { Autoplay, Pagination } from "swiper";
import { useState } from 'react';

const PromotionalBanner = () => {
  const [orientation, SetOrientation] = useState('993');

  useEffect(() => HowWideIsThisScreen());

  const HowWideIsThisScreen = () => {
    var screenWidthNow = window.screen.width;
    SetOrientation(screenWidthNow)
  }
  
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
          clickable: true,
          dynamicBullets: true
        }}
        modules={[Autoplay, Pagination]}
        className="MySwiper"
      >
        {orientation > 992
          ?
          dataPromotionalBanner[0].landscape.map((banner, key) =>
            <SwiperSlide
              key={key}
              className="MySwiperSlide
                    d-flex justify-content-center align-items-center"
            >
              <img
                className='h-100 w-100'
                src={banner.imgUrl}
                alt=""
              />
            </SwiperSlide>
          )
          :
          dataPromotionalBanner[0].portrait.map((banner, key) =>
            <SwiperSlide
              key={key}
              className="MySwiperSlide
                  d-flex justify-content-center align-items-center"
            >
              <img
                className='h-100 w-100'
                src={banner.imgUrl}
                alt=""
              />
            </SwiperSlide>
          )
        }

      </Swiper>
    </div>
  )
}

export default PromotionalBanner