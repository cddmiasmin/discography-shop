import React, { useEffect, useState } from 'react'

import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

import { Link } from 'react-router-dom'

import { useChooseBackgroundImage } from '../../functions/useChooseBackgroundImage';
import { useGetColor } from '../../functions/useGetColor';
import { useShowPassword } from '../../functions/useShowPassword';

import Logo from './../../components/Logo'
import IForgotMyPassword from '../../components/IForgotMyPassword/IForgotMyPassword';

import './login.css'

const Login = () => {

  const [passwordModalIsOpen, SetPasswordModalIsOpen] = useState(false);

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

  const ShowPassword = useShowPassword();

  useEffect(() => {
    WhatOrientationIsTheScreenInNow('portrait')
    ChooseImageForTheBanner();
  }, [])

  useEffect(() => getColor(bannerInPortraitOrLandscapeMode[imageNumber].imgUrl))

  useEffect(() => {
    document.body.style.setProperty('--colorIsWhiteOrBlack', `${colorIsWhiteOrBlack}`);
    document.body.style.setProperty('--color', `${color}`);
  }, [color])

  return (
    <div
      className='d-flex flex-wrap position-absolute w-100 h-100 justify-content-center align-items-center'
      style={{ backgroundColor: `${color}` }}
    >
      <div
        id='banner-login'
        className='h-100 overflow-hidden'
        style={{ width: '45%', borderRadius: '0 15px 15px 0', opacity: '90%' }}
      >
        <img
          className='w-100 h-100'
          src={`${bannerInPortraitOrLandscapeMode[imageNumber].imgUrl}`}
          alt="Banner"
        />
      </div>

      <div
        id='card-login'
        className='h-100 d-flex flex-column justify-content-center align-items-center'
        style={{ width: '55%', color: `${colorIsWhiteOrBlack}` }}
      >
        <div className='h-100 w-100 d-flex flex-column flex-wrap justify-content-center align-items-center gap-3'>
          <Logo size={70} color={colorIsDarkOrLight} />

          <div
            className='d-flex w-100 flex-column justify-content-center align-items-center gap-4'
          >
            <div className='d-flex flex-column justify-content-center align-items-center gap-1'>
              <h1 className='m-0'>bem-vindo de volta</h1>
              <h6 className='m-0'>Por favor entre com seus dados</h6>
            </div>

            <form
              id='form-login'
              action=""
              className='d-flex w-100 flex-column justify-content-center align-items-center gap-2'
            >
              <input
                className='rounded'
                type="email" name="fieldEmail" id="field-email" placeholder='E-mail' required="required"
                pattern="[a-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              />
              <div id='l-password-container' className='position-relative d-flex flex-row align-items-center' style={{ width: '55%' }}>
                <input
                  className='element-width rounded w-100'
                  type="password" name="l-password" id="l-password" placeholder='Senha' required
                  title='Informe sua senha cadastrada'
                />
                <button
                  type='button' className='position-absolute'
                  style={{ right: '1.5vh', backgroundColor: 'transparent' }}
                  onClick={() => ShowPassword('l-password', 'l-show-password-visible', 'l-show-password-invisible')}
                >
                  <AiFillEye id='l-show-password-visible'
                    style={{ display: 'flex' }} />
                  <AiFillEyeInvisible id='l-show-password-invisible'
                    style={{ display: 'none' }} />
                </button>
              </div>
              <div
                className='d-flex justify-content-end m-0'
                style={{ width: '55%', fontSize: 'small' }}
              >
                <button
                  className={`text-${colorIsDarkOrLight} bg-transparent`}
                  type='button'
                  onClick={() => SetPasswordModalIsOpen(true)}
                > ESQUECI MINHA SENHA</button>
                <IForgotMyPassword
                  passwordModalIsOpen={passwordModalIsOpen}
                  SetPasswordModalIsOpen={SetPasswordModalIsOpen}
                  color={color}
                  colorIsDarkOrLight={colorIsDarkOrLight}
                />
              </div>
              <div className={`bg-${colorIsDarkOrLight} rounded `} style={{ height: '0.3vh', width: '55%' }} />
              <button
                className='d-flex justify-content-center align-items-center rounded m-1'
                style={{ width: '55%', height: '5vh', fontSize: 'larger' }}
                type="submit"
              >
                ENTRAR
              </button>
              <Link to='/cadastro'
                className={`d-flex justify-content-center text-decoration-none text-${colorIsDarkOrLight}`}
                style={{ width: '55%', fontSize: 'small' }}
              >
                NÃO TEM UMA CONTA? CADASTRE-SE
              </Link>
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

export default Login