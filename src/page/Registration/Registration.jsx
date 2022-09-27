import { useGetColor } from '../../data/hook/useGetColor';
import { useLoginRegistration } from '../../data/hook/useLoginRegistration';

import React, { useEffect } from 'react'

import Logo from './../../components/Logo'

import { Link } from 'react-router-dom'

import './registration.css'

const Registration = () => {

  const {
    color,
    colorIsDarkOrLight,
    colorIsWhiteOrBlack,
    getColor,
  } = useGetColor();

  const {
    data,
    imageNumber,
    SetImageNumber,
    bannerInPortraitOrLandscapeMode,
    SetBannerInPortraitOrLandscapeMode,
    WhatOrientationIsTheScreenInNow,
    ChooseImageForTheBanner,
  } = useLoginRegistration();

  useEffect(() => {
    WhatOrientationIsTheScreenInNow(1)
    ChooseImageForTheBanner();
  }, [])

  useEffect(() => getColor(bannerInPortraitOrLandscapeMode[imageNumber].imgUrl))

  useEffect(() => {
    document.body.style.setProperty('--colorIsWhiteOrBlack', `${colorIsWhiteOrBlack}`);
    document.body.style.setProperty('--color', `${color}`);
  }, [color])


  return (
    <div className='position-absolute flex-wrap w-100 h-100 d-flex justify-content-between align-items-center'>
      <div
        id='bg-registration'
        className=''>
        <img
          className='w-100 h-100'
          src={`${bannerInPortraitOrLandscapeMode[imageNumber].imgUrl}`}
          alt='Background Image'
        />
      </div>

    </div>
  )
}

export default Registration