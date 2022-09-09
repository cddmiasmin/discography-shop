import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import './styles/listAlbunsShowcase.css'
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Pagination, Navigation } from "swiper";

import Album from './Album'

const ListAlbunsShowcase = (props) => {
    const artist = props.data.name;
    return (
        <div className='container-fluid m-3'>
            <Swiper
                slidesPerView={4}
                spaceBetween={0}
                slidesPerGroup={3}
                loop={true}
                loopFillGroupWithBlank={true}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {props.data.album.map((album) => (
                    <SwiperSlide
                        className='d-flex justify-content-center align-items-center'
                    >
                        <Album
                            cover={album.cover}
                            artist={artist}
                            name={album.name}
                            year={album.year}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default ListAlbunsShowcase