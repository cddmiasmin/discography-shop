import React, { useEffect } from 'react'

import Header from './../components/Header/Header'
import Footer from './../components/Footer/Footer'

import { useGetColor } from './../functions/useGetColor'
import { useChooseBackgroundImage } from './../functions/useChooseBackgroundImage'

import { dataArtist } from '../data/dataArtist'

const ProductSearch = () => {

  const {
    color,
    colorIsDarkOrLight,
    colorIsWhiteOrBlack,
    getColor,
  } = useGetColor();

  const {
    imageNumber,
    bannerInPortraitOrLandscapeMode,
    WhatOrientationIsTheScreenInNow,
    ChooseImageForTheBanner,
  } = useChooseBackgroundImage();

  useEffect(() => {
    WhatOrientationIsTheScreenInNow('landscape');
    ChooseImageForTheBanner();
  }, [])

  useEffect(() => getColor(bannerInPortraitOrLandscapeMode[imageNumber].imgUrl))

  return (
    <div className='d-flex flex-column w-100 h-100 justify-content-center align-items-center bg-black'>
      <div id='bg-search'
        style={{
          backgroundImage: `url(${bannerInPortraitOrLandscapeMode[imageNumber].imgUrl})`,
          width: '100%', height: '45vh', backgroundPosition: 'center', backgroundSize: 'cover',
          opacity: '35%', borderRadius: '0px 0px 15px 15px', borderBottom: '3px solid var(--color)'
        }} />
      <div id='container-search' className='d-flex w-100 flex-column justify-content-end align-items-center position-absolute'
        style={{ color: 'white', height: '45vh', top: '3vh' }}
      >
        <div id='info-search'
          className='d-flex w-100 h-100 flex-column justify-content-center align-items-center'
        >
          <h2 className='m-0 p-2'>VOCÊ PESQUISOU POR:</h2>
          <h1>{`"${'FLORENCE AND THE MACHINE'}"`}</h1>
          <h6>Encontramos 5 resultados</h6>
        </div>
      </div>
      <Header colorIsDarkOrLight={'light'} color={color} colorIsWhiteOrBlack={'white'} />
      <div className='d-flex w-100 flex-column justify-content-center align-items-center m-4 gap-1'>
        <div className='d-flex flex-row gap-2 justify-content-center align-items-center p-2'>
          <h5 className='m-0'>ORDENAR POR:</h5>
          <select>
            <option value="DL">Data de Lançamento</option>
            <option value="MnP">Menor Preço</option>
            <option value="MmP">Maior Preço</option>
            <option value="MV">Mais Vendidos</option>
            <option value="MD">Melhor Desconto</option>
            <option value="AZ">A - Z</option>
            <option value="ZA">Z - A</option>
          </select>
        </div>
        <div className={`bg-${colorIsDarkOrLight} rounded `} style={{ height: '0.5vh', width: '85%' }} />
        <div className='d-flex flex-wrap justify-content-center align-items-end gap-1'>
          
        </div>
      </div>
    </div>
  )
}

export default ProductSearch