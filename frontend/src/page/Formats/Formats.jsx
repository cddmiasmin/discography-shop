import React, {useEffect} from 'react'

import './format.css'

import Header from './../../components/Header/Header'
import Footer from './../../components/Footer/Footer'

import { dataArtist } from '../../data/dataArtist'

import { useGetColor } from '../../functions/useGetColor'
import { useChooseBackgroundImage } from '../../functions/useChooseBackgroundImage'

const Formats = () => {

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
  }, []);

  useEffect(() => getColor(bannerInPortraitOrLandscapeMode[imageNumber].imgUrl));

  return (
    <div className='d-flex flex-column w-100 h-100 justify-content-center align-items-center bg-black'>      
      <div id='bg-format' style={{ backgroundImage: `url(${bannerInPortraitOrLandscapeMode[imageNumber].imgUrl})` }} />
      <div id='container-format-options' className='d-flex w-100 flex-column justify-content-end align-items-center position-absolute'
        style={{ color: 'white', height: '45vh', top: 0, marginBottom: '6vh' }}
      >
          <h1 className='m-0' style={{paddingBottom: '5rem'}}>FORMATOS</h1>
          <div className='d-flex flex-row gap-2 w-100 justify-content-center align-items-center '>
            <div >

            </div>
          </div>
      </div>
      <Header colorIsDarkOrLight={'light'} color={color} colorIsWhiteOrBlack={'white'} />
    </div>
  )
}

export default Formats