import React, { useEffect } from 'react'

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import './promotionalBanner.css'

import { Autoplay, Pagination } from "swiper";
import { useState } from 'react';
import { useGoToProduct } from '../../functions/useGoToProduct';

const PromotionalBanner = ({ data }) => {
  const [orientation, SetOrientation] = useState('993');

  useEffect(() => HowWideIsThisScreen());

  const {
    GoToProduct
  } = useGoToProduct();

  const HowWideIsThisScreen = () => {
    var screenWidthNow = window.screen.width;
    SetOrientation(screenWidthNow)
  }

  return (
    <div className='promotional-banner container-fluid' >
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
          data.map((banner) =>
            <SwiperSlide
              onClick={() => GoToProduct(banner.albumSlug, banner.artistSlug)}
              style={{ cursor: 'pointer' }}
              key={banner.code}
              className="MySwiperSlide d-flex justify-content-center align-items-center"
            >
              <img
                className='h-100 w-100'
                src={banner.bannerDesktop}
                alt={`Banner Promocional`}
              />
            </SwiperSlide>
          )
          :
          data.map((banner) =>
            <SwiperSlide
              onClick={() => GoToProduct(banner.albumSlug, banner.artistSlug)}
              key={banner.code}
              className="MySwiperSlide d-flex justify-content-center align-items-center"
            >
              <img
                className='h-100 w-100'
                src={banner.bannerMobile}
                alt={`Banner Promocional`}
              />
            </SwiperSlide>
          )
        }
      </Swiper>
    </div>
  )
}

export default PromotionalBanner