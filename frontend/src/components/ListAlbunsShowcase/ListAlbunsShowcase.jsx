import Reactm, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import './listAlbunsShowcase.css'
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Pagination, Navigation } from "swiper";

import Album from '../Album/Album'

const ListAlbunsShowcase = ({ data }) => {

    const [slidesPerViewValue, SetSlidesPerViewValue] = useState(data.length > 6 ? 4 : 3);
    const [spaceBetweenValue, SetSpaceBetweenValue] = useState(0);

    useEffect(() => {
        var widthOfThisScreen = window.screen.width;
        if (widthOfThisScreen < 992) {
            SetSlidesPerViewValue(1);
            SetSpaceBetweenValue(1);
            document.body.style.setProperty('--colorIsWhiteOrBlack', 'black');
        } else document.body.style.setProperty('--colorIsWhiteOrBlack', 'white');
    })

    return (
        <div className='container-fluid m-3'>
            <Swiper
                slidesPerView={slidesPerViewValue}
                spaceBetween={spaceBetweenValue}
                slidesPerGroup={1}
                loop={true}
                loopFillGroupWithBlank={true}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {data.map((album, key) => (
                    <SwiperSlide
                        key={key}
                        className='d-flex justify-content-center align-items-center'
                    >
                        <Album
                            key={key}
                            cover={album.cover}
                            artist={album.artistName}
                            name={album.albumName}
                            date={album.releaseDate}
                            price={null}
                            slugArtist={album.artistSlug}
                            slugAlbum={album.albumSlug}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default ListAlbunsShowcase