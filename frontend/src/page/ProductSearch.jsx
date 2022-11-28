import React, { useEffect, useState } from 'react'

import { FastAverageColor } from 'fast-average-color';

import Header from './../components/Header/Header'
import Footer from './../components/Footer/Footer'
import ArtistIcon from '../components/ArtistIcon'
import Album from '../components/Album/Album';

import { ColorContext } from '../contexts/ColorContext'; 
import { useChooseBackgroundImage } from './../functions/useChooseBackgroundImage'

import { dataArtist } from '../data/dataArtist'

const ProductSearch = () => {

  const [artistIconColor, SetArtistIconColor] = useState([])

  const {
    color,
    colorIsDarkOrLight,
    colorIsWhiteOrBlack,
    getColor,
} = useContext(ColorContext);

  const {
    imageNumber,
    bannerInPortraitOrLandscapeMode,
    WhatOrientationIsTheScreenInNow,
    ChooseImageForTheBanner,
  } = useChooseBackgroundImage();

  useEffect(() => {
    SetArtistIconColor(ArtistIconColor(dataArtist[1].icon))
    WhatOrientationIsTheScreenInNow('landscape');
    ChooseImageForTheBanner();
    getColor(bannerInPortraitOrLandscapeMode[imageNumber].imgUrl)
  }, [])

  const ArtistIconColor = (Img) => {
    var artistIconColorAux = [];

    const fac = new FastAverageColor();
    fac.getColorAsync(Img)
      .then(color => {
        artistIconColorAux.push(color.hex)
      })
      .catch(e => {
        artistIconColorAux.push('#ffff')
      });

    return artistIconColorAux;
  }

  var cont = 0;

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
          <h1>{`"${'TAYLOR SWIFT'}"`}</h1>
          <h6>Encontramos 2 resultados</h6>
        </div>
      </div>
      <Header colorIsDarkOrLight={'light'} color={color} colorIsWhiteOrBlack={'white'} />
      <div className='d-flex w-100 flex-column justify-content-center align-items-center m-4 gap-1'>
        <div className='d-flex flex-row gap-2 justify-content-center align-items-center p-2'>
          <h5 className='m-0'>ORDENAR POR:</h5>
          <select style={{width: '25vh'}}>
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
        <div className='d-flex flex-wrap justify-content-center align-items-end gap-2' style={{ marginTop: '2vh', marginBottom: '2vh', width: '85%' }}>
          <ArtistIcon
            key={1}
            size={'25vh'}
            id={dataArtist[1].id}
            color={artistIconColor[cont++]}
            name={dataArtist[1].name}
            icon={dataArtist[1].icon}
          />

          <Album
            key={1}
            cover={dataArtist[1].album[0].cover}
            artist={dataArtist[1].name}
            name={dataArtist[1].album[0].name}
            year={dataArtist[1].album[0].year}
          />
        </div>
      </div>
      <Footer colorIsDarkOrLight={colorIsDarkOrLight} color={color} colorIsWhiteOrBlack={colorIsWhiteOrBlack} />
    </div>
  )
}

export default ProductSearch