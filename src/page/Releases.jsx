import React, { useEffect } from 'react'

import Header from './../components/Header/Header'
import Album from './../components/Album/Album'
import Footer from './../components/Footer'

import { useGetColor } from './../functions/useGetColor'
import { useChooseBackgroundImage } from './../functions/useChooseBackgroundImage'

import { dataArtist } from '../data/dataArtist'

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import { Grid, Pagination } from "swiper";


const Realeses = () => {

  const {
    color,
    colorIsDarkOrLight,
    colorIsWhiteOrBlack,
    getColor,
  } = useGetColor();

  const {
    data,
    imageNumber,
    bannerInPortraitOrLandscapeMode,
    SetBannerInPortraitOrLandscapeMode,
    ChooseImageForTheBanner,
  } = useChooseBackgroundImage();

  useEffect(() => {
    SetBannerInPortraitOrLandscapeMode(data.landscape);
    ChooseImageForTheBanner();
  }, [])

  useEffect(() => getColor(bannerInPortraitOrLandscapeMode[imageNumber].imgUrl))

  useEffect(() => {
    document.body.style.setProperty('--colorIsWhiteOrBlack', `${colorIsWhiteOrBlack}`);
    document.body.style.setProperty('--color', `${color}`);
  }, [color])

  return (
    <div className='position-absolute w-100 h-100 d-flex justify-content-center align-items-center flex-column'>
      <Header colorIsDarkOrLight={'light'} color={color} colorIsWhiteOrBlack={colorIsWhiteOrBlack} />

      <div id='bg-image-header' className='position-absolute w-100 h-100' style={{ top: 0, opacity: '35%', zIndex: -200 }}>
        <img className='w-100 h-100' src={bannerInPortraitOrLandscapeMode[imageNumber].imgUrl} alt="" />
      </div>

      <div className='position-absolute flex-column w-100 d-flex justify-content-center align-items-center' style={{ zIndex: 1, top: '12vh', zIndex: 1 }}>
      <h1>LANÇAMENTOS</h1>
        <Swiper
          slidesPerView= 'auto'
          slides
          grid={{
            rows: 2,
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Grid, Pagination]}
          className="mySwiper d-flex justify-content-center align-items-center"
          style={{ width: '95%', height: '78vh' }}
        >
          {dataArtist[1].album.map((album, key) => (
            <SwiperSlide
              key={key}
              className='d-flex justify-content-center align-items-center'
              style={{width: '220px', height: '220px'}}
            >
              <Album
                key={key}
                cover={album.cover}
                artist={dataArtist[1].name}
                name={album.name}
                year={album.year}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      <Footer colorIsDarkOrLight={colorIsDarkOrLight} color={color} colorIsWhiteOrBlack={colorIsWhiteOrBlack} /> 
      </div>
    </div>
  )
}

export default Realeses