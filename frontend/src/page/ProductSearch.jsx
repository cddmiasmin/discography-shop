import React, { useEffect, useState, useContext, useRef } from 'react'
import { useParams } from 'react-router-dom'

import './ProductSearch'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Loading from '../components/Loading' 
import LookForArtists from '../components/LookForArtists'
import LookForAlbums from '../components/LookForAlbums'

import { ColorContext } from '../contexts/ColorContext';
import { useChooseBackgroundImage } from '../functions/useChooseBackgroundImage'

import api from '../services/api'

const ProductSearch = () => {

  const { search } = useParams();

  const [pageData, SetPageData] = useState([]);

  const {
    getColor,
  } = useContext(ColorContext);

  const {
    imageNumber,
    bannerInPortraitOrLandscapeMode,
    WhatOrientationIsTheScreenInNow,
    ChooseImageForTheBanner,
  } = useChooseBackgroundImage();

  useEffect(() => {
    WhatOrientationIsTheScreenInNow('landscape');
    ChooseImageForTheBanner();

    api.get(`/search/${search}`).then((response) =>  {
      SetPageData(response.data.result);
    });
  }, []);

  useEffect(() => {
    getColor(bannerInPortraitOrLandscapeMode[imageNumber].imgUrl, true);
  }, [imageNumber]);

  useEffect(() => {
    api.get(`/search/${search}`).then((response) =>  {
      SetPageData(response.data.result);
    });
  }, [search]);

  if(pageData.length === 0) return ( <Loading/>);

  const length = pageData.artists.length + pageData.albums.length;
  console.log(pageData.albums);

  return (
    <div className='d-flex flex-column w-100 h-100 justify-content-center align-items-center bg-black'>
      <div id='bg-search'
        style={{
          backgroundImage: `url(${bannerInPortraitOrLandscapeMode[imageNumber].imgUrl})`,
          width: '100%', height: '45vh', backgroundPosition: 'center', backgroundSize: 'cover',
          opacity: '28%', borderRadius: '0px 0px 15px 15px', borderBottom: '3px solid var(--color)'
        }} />
      <div id='container-search' className='d-flex w-100 flex-column justify-content-end align-items-center position-absolute'
        style={{ color: 'white', height: '45vh', top: '3vh' }}
      >
        <div id='info-search'
          className='d-flex w-100 h-100 flex-column justify-content-center align-items-center'
        >
          <h2 className='m-0 p-2'>VOCÊ PESQUISOU POR:</h2>
          <h1>{`"${search}"`}</h1>
          <h6>Encontramos {length} resultados</h6>
        </div>
      </div>
      <Header />
      <div className='d-flex w-100 flex-column justify-content-center align-items-center m-4 gap-1'>
        <LookForArtists data={pageData.artists}/>
        <LookForAlbums data={pageData.albums}/>
      </div>
      <Footer />
    </div>
  )
}

export default ProductSearch