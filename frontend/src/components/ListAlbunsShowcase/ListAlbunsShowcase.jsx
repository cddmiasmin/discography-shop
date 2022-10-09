import Reactm, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import './listAlbunsShowcase.css'
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Pagination, Navigation } from "swiper";

import Album from '../Album/Album'

const ListAlbunsShowcase = (props) => {

    const [slidesPerViewValue, SetSlidesPerViewValue] = useState(4);
    const [spaceBetweenValue, SetSpaceBetweenValue] = useState(0)
    const artist = props.data.name;

    useEffect(() => {
        var widthOfThisScreen = window.screen.width;
        if (widthOfThisScreen < 992) {
            SetSlidesPerViewValue(2);
            SetSpaceBetweenValue(2);
            document.body.style.setProperty('--colorIsWhiteOrBlack', 'black');
        } else document.body.style.setProperty('--colorIsWhiteOrBlack', 'white');
    })

    return (
        <div className='container-fluid m-3'>
            <Swiper
                slidesPerView={slidesPerViewValue}
                spaceBetween={spaceBetweenValue}
                slidesPerGroup={3}
                loop={true}
                loopFillGroupWithBlank={true}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {props.data.album.map((album, key) => (
                    <SwiperSlide
                        key={key}
                        className='d-flex justify-content-center align-items-center'
                    >
                        <Album
                            key={key}
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