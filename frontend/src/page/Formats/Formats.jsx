import React, { useEffect } from 'react'

import './format.css'

import Header from './../../components/Header/Header'
import Album from './../../components/Album/Album'
import Footer from './../../components/Footer/Footer'

import { useGetColor } from './../../functions/useGetColor'
import { useChooseBackgroundImage } from './../../functions/useChooseBackgroundImage'

import { dataArtist } from '../../data/dataArtist'

const Formats = () => {

  const formats = ['BOX', 'CASSETE', 'CD', 'DVD', 'VINIL'];
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
    document.getElementById('format-option-0').classList.add('selected');
  }, [])

  useEffect(() => getColor(bannerInPortraitOrLandscapeMode[imageNumber].imgUrl))

  const ChooseFormatOption = (key) => {
    document.querySelector('.selected').classList.remove('selected');
    document.getElementById(`format-option-${key}`).classList.add('selected');
  }

  return (
    <div className='w-100 h-100 d-flex justify-content-center align-items-center flex-column bg-black'>

      <div id='bg-formats'
        style={{
          backgroundImage: `url(${bannerInPortraitOrLandscapeMode[imageNumber].imgUrl})`,
          width: '100%', height: '30vh', backgroundPosition: 'center', backgroundSize: 'cover',
          opacity: '28%', borderRadius: '0px 0px 15px 15px', borderBottom: '3px solid var(--color)',
          marginBottom: '4vh'
        }} />

      <Header colorIsDarkOrLight={'light'} color={color} colorIsWhiteOrBlack={'white'} />
      <div id='container-formats' className='fs-1 d-flex w-100 flex-column justify-content-end align-items-center position-absolute'
        style={{ color: 'white', top: '15vh', zIndex: '2' }}
      > FORMATOS </div>
      <div className='w-100 d-flex flex-wrap flex-row gap-2 justify-content-center align-items-center'>
        {formats.map((format, key) => (
          <div
            key={key}
            id={`format-option-${key}`}
            onClick={() => ChooseFormatOption(key)}
            className='format-option fs-4 d-flex gap-3 justify-content-center align-items-center'
            style={{color: 'white', width: '15vh', cursor: 'pointer'}}>
            {format}
          </div>
        ))}
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

export default Formats
