import React, { useEffect } from 'react'

import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

import { Link } from 'react-router-dom'

import { useGetColor } from './../../functions/useGetColor';
import { useChooseBackgroundImage } from './../../functions/useChooseBackgroundImage';
import { useShowPassword } from '../../functions/useShowPassword';

import Logo from './../../components/Logo'

import './registration.css'

const Registration = () => {

  const {
    color,
    colorIsDarkOrLight,
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
    WhatOrientationIsTheScreenInNow('landscape')
    ChooseImageForTheBanner();
  }, [])

  useEffect(() => getColor(bannerInPortraitOrLandscapeMode[imageNumber].imgUrl))

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
        style={{ width: '35%', height: '85%' }}
      >
        <div className='h-100 w-100 d-flex flex-column flex-wrap justify-content-center align-items-center gap-3'>
          <Logo size={70} color={'light'} />

          <div
            className='d-flex w-100 flex-column justify-content-center align-items-center gap-2'
          >
            <div className='d-flex w-100 flex-column justify-content-center align-items-center gap-1'>
              <h1 className='m-0'>CRIAR UMA CONTA</h1>
              <div className='d-flex flex-row justify-content-center align-items-center gap-1'>
                <p className='m-0' style={{ fontSize: 'medium' }}>Já tem uma conta?</p>
                <Link to='/login'
                  className={`d-flex justify-content-center text-decoration-none text-light`}
                  style={{ fontSize: 'medium' }}
                ><u>ENTRE</u></Link>
              </div>
            </div>

            <form
              id='form-registration'
              action=""
              className='d-flex w-100 flex-column justify-content-center align-items-center gap-2'
            >
              <div id='customer-name-field'
                className='element-width overflow-hidden d-flex flex-row justify-content-center align-items-center gap-1'
                style={{ height: '5.5vh' }}
              >
                <input
                  className='rounded'
                  type="text" id='field-name' required pattern='[a-Z]{3,}' placeholder='NOME'
                  style={{ width: '39%' }}
                />
                <input
                  className='rounded'
                  type="text" id='field-last-name' required pattern='[a-Z]{3,}' placeholder='SOBRENOME'
                  style={{ width: '59%' }}
                />
              </div>
              <input
                className='element-width rounded'
                type="text" name="cpf" id="cpf" placeholder='CPF' required
                pattern="[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}$"
              />
              <input
                className='element-width rounded'
                type="tel" id="phone" name="phone" placeholder='Telefone Celular'
                maxLength="15" pattern="\([0-9]{2}\) [0-9]{4,6}-[0-9]{3,4}$"
              />
              <input
                className='element-width rounded'
                type="email" name="email" id="emailR" placeholder='E-mail' required
                pattern="[a-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              />
              <div id='customer-password-field'
                className='element-width overflow-hidden d-flex flex-row justify-content-center align-items-center gap-1'
                style={{ height: '5.5vh' }}
              >
                <div id='password-container' className='position-relative d-flex flex-row align-items-center' style={{ width: '49%' }}>
                  <input
                    className='element-width rounded w-100'
                    type="password" name="r-password" id="r-password" placeholder='Senha' required
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}"
                    title='Sua senha deve conter 4 ou mais caracteres com pelo menos um número, uma letra maiúscula e uma minúscula'
                  />
                  <button
                    type='button' className='position-absolute'
                    style={{ right: '1vh', backgroundColor: 'transparent' }}
                    onClick={() => ShowPassword('r-password', 'show-password-visible', 'show-password-invisible')}
                  >
                    <AiFillEye id='show-password-visible'
                      style={{ display: 'flex' }} />
                    <AiFillEyeInvisible id='show-password-invisible'
                      style={{ display: 'none' }} />
                  </button>
                </div>
                <div id='confirm-password-container' className='position-relative d-flex flex-row align-items-center' style={{ width: '49%' }}>
                  <input
                    className='element-width rounded w-100'
                    type="password" name="r-confirm-password" id="r-confirm-password" placeholder='CONFIRME SUA SENHA' required
                    title='Sua senha deve conter 4 ou mais caracteres com pelo menos um número, uma letra maiúscula e uma minúscula'
                  />
                  <button
                    type='button' className='position-absolute'
                    style={{ right: '1vh', backgroundColor: 'transparent' }}
                    onClick={() => ShowPassword('r-confirm-password', 'show-confirm-password-visible', 'show-confirm-password-invisible')}
                  >
                    <AiFillEye id='show-confirm-password-visible'
                      style={{ display: 'flex' }} />
                    <AiFillEyeInvisible id='show-confirm-password-invisible'
                      style={{ display: 'none' }} />
                  </button>
                </div>
              </div>
              <div id='terms-of-use'
                className='element-width flex-row d-flex justify-content-star gap-1 m-1'
                style={{ cursor: 'pointer', fontSize: 'small' }}
              >
                <input type="checkbox" name="cb-terms-of-use" id="cb-terms-of-use" style={{ width: 'auto', height: 'auto' }} />
                <label for='cb-terms-of-use'>
                  <span className='ms-1 p-0'>Eu li e concordo com os</span>
                  <a
                    className='ms-1'
                    href="https://pbs.twimg.com/media/FCWcK8FWUAY4PaP?format=jpg&name=small"
                    style={{ color: `${color}` }}
                  >Termos de Serviço</a>
                </label>
              </div>
              <div className={`bg-light rounded element-width`} style={{ height: '0.3vh' }} />
              <button
                className='element-width d-flex justify-content-center align-items-center rounded m-1'
                style={{ height: '5vh', fontSize: 'larger' }}
                type="submit"
              >
                CADASTRAR-SE
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