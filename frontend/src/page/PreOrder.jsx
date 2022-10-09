import React, { useEffect } from 'react'

import Header from './../components/Header/Header'
import Album from './../components/Album/Album'
import Footer from './../components/Footer/Footer'

import { useGetColor } from './../functions/useGetColor'
import { useChooseBackgroundImage } from './../functions/useChooseBackgroundImage'

import { dataArtist } from '../data/dataArtist'

const PreOrder = () => {

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

  return (
    <div className='w-100 h-100 d-flex justify-content-center align-items-center flex-column bg-black'>

      <div id='bg-preorder'
        style={{
          backgroundImage: `url(${bannerInPortraitOrLandscapeMode[imageNumber].imgUrl})`,
          width: '100%', height: '30vh', backgroundPosition: 'center', backgroundSize: 'cover',
          opacity: '28%', borderRadius: '0px 0px 15px 15px', borderBottom: '3px solid var(--color)'
        }} />

      <Header colorIsDarkOrLight={'light'} color={color} colorIsWhiteOrBlack={'white'} />
      <div id='container-preorder' className='d-flex w-100 flex-column justify-content-end align-items-center position-absolute'
        style={{ color: 'white', top: '15vh', zIndex: '2' }}
      >
        <h1>PRÉ-VENDAS</h1>
      </div>
      <div className='d-flex flex-row gap-2 justify-content-center align-items-center p-4'>
        <h5 className='m-0'>ORDENAR POR:</h5>
        <select style={{ width: '25vh' }}>
          <option value="DL">Data de Lançamento</option>
          <option value="MnP">Menor Preço</option>
          <option value="MmP">Maior Preço</option>
          <option value="MV">Mais Vendidos</option>
          <option value="MD">Melhor Desconto</option>
          <option value="AZ">A - Z</option>
          <option value="ZA">Z - A</option>
        </select>
      </div>
      <div className={`rounded `} style={{ backgroundColor: 'var(--color)', height: '0.5vh', width: '85%' }} />
      <div className='d-flex flex-wrap justify-content-center align-items-end gap-5' style={{ marginTop: '4vh', marginBottom: '4vh', width: '85%' }}>
        {dataArtist[1].album.map((album, key) =>
          <Album
            key={key}
            cover={album.cover}
            artist={dataArtist[1].name}
            name={album.name}
            year={album.year}
          />
        )}
      </div>
      <Footer colorIsDarkOrLight={colorIsDarkOrLight} color={color} colorIsWhiteOrBlack={colorIsWhiteOrBlack} />
    </div>
  )
}

export default PreOrder