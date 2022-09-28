import { useGetColor } from '../../data/hook/useGetColor';
import { useLoginRegistration } from '../../data/hook/useLoginRegistration';

import React, { useEffect } from 'react'

import Logo from './../../components/Logo'

import { Link } from 'react-router-dom'

import './registration.css'

const Registration = () => {

  const {
    color,
    colorRGBA,
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
    document.body.style.setProperty('--color-rgba', `${colorRGBA}`);
  }, [color])


  return (
    <div className='position-absolute flex-wrap w-100 h-100 d-flex justify-content-center align-items-center'>
      <div
        id='bg-registration'
        className='position-fixed'
        style={{ zIndex: -1000 }}
      >
        <img
          className='w-100 h-100'
          src={`${bannerInPortraitOrLandscapeMode[imageNumber].imgUrl}`}
          alt='Background Image'
        />
      </div>

      <div
        id='card-registration'
        className='d-flex justify-content-center align-items-center'
        style={{width: '35%', height: '80%' }}
      >
        <div className='h-100 w-100 d-flex flex-column flex-wrap justify-content-center align-items-center gap-3'>
          <Logo size={70} color={colorIsDarkOrLight} />

          <div
            className='d-flex w-100 flex-column justify-content-center align-items-center gap-4'
          >
            <div className='d-flex w-100 flex-column justify-content-center align-items-center gap-1'>
              <h1 className='m-0'>CRIAR UMA CONTA</h1>
              <div className='d-flex flex-row justify-content-center align-items-center gap-1'>
                <p className='m-0' style={{ fontSize: 'medium' }}>Já tem uma conta?</p>
                <Link to='/login'
                  className={`d-flex justify-content-center text-decoration-none text-${colorIsDarkOrLight}`}
                  style={{fontSize: 'medium' }}
                ><u>ENTRE</u></Link>
              </div>

            </div>

            <form
              id='form-login'
              action=""
              className='d-flex w-100 flex-column justify-content-center align-items-center gap-2'
            >
              <input
                className='rounded'
                type="email" name="fieldEmail" id="field-email" placeholder='E-mail' required="required"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              />
              <input
                className='rounded'
                type="password" name="fieldPassword" id="field-password" placeholder='Senha' required="required"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}"
                title='Sua senha deve conter 4 ou mais caracteres com pelo menos um número, uma letra maiúscula e uma minúscula'
              />
              <div
                className='d-flex justify-content-end m-0'
                style={{ width: '55%', fontSize: 'small' }}
              >
                <button
                  className={`text-${colorIsDarkOrLight} bg-transparent`}
                  type='button'
                > ESQUECI MINHA SENHA</button>
              </div>
              <div className={`bg-${colorIsDarkOrLight} rounded `} style={{ height: '0.3vh', width: '55%' }} />
              <button
                className='d-flex justify-content-center align-items-center rounded m-1'
                style={{ width: '55%', height: '5vh', fontSize: 'larger' }}
                type="submit"
              >
                ENTRAR
              </button>
            </form>
          </div>

        </div>

        <p
          className='position-absolute m-2'
          style={{ bottom: 0, right: 0, fontSize: 'x-small' }}
        >
          © Cassandra 2022
        </p>
      </div>
    </div>
  )
}

export default Registration