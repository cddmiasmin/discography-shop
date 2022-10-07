import React, { useEffect, useState } from 'react'

import { OverlayTrigger, Popover } from 'react-bootstrap';

import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

import { Link } from 'react-router-dom'

import { Alert, Snackbar } from '@mui/material';

import { useGetColor } from './../../functions/useGetColor';
import { useChooseBackgroundImage } from './../../functions/useChooseBackgroundImage';
import { useShowPassword } from '../../functions/useShowPassword';

import Logo from './../../components/Logo'

import './registration.css'

const Registration = () => {

  const [openSnackBarRegistration, SetOpenSnackbarRegistration] = useState(false);

  useEffect(() => {
    WhatOrientationIsTheScreenInNow('landscape')
    ChooseImageForTheBanner();
  }, [])

  useEffect(() => {
    getColor(bannerInPortraitOrLandscapeMode[imageNumber].imgUrl);
  })

  

  const RegistrationValidation = () => {
    const nameLastNameRegex = /^[ a-zA-Z\-\']+$/;
    const name = document.getElementById('name-registration');
    const lastName = document.getElementById('lastname-resgistration');

    const phoneRegex = /\([0-9]{2}\)\s[0-9]{4,6}-[0-9]{3,4}$/;
    const phone = document.getElementById('phone-resgistration');

    const cpfRegex = /[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}$/;
    const cpf = document.getElementById('cpf-resgistration');

    const emailRegex = /[A-z0-9._%+-]+@[A-z0-9.-]+\.[A-z]{2,}$/;
    const email = document.getElementById('email-resgistration');

    const passwordRegex = /(?=.*\d)(?=.*[A-z])(?=.*[A-z])/;
    const password = document.getElementById('password-resgistration');

    const confirmPassword = document.getElementById('confirm-password-resgistration');
  }

  const {
    color,
    getColor,
  } = useGetColor();

  useEffect(() => document.body.style.setProperty('--colorIsWhiteOrBlack', 'white'), [color])

  const {
    imageNumber,
    bannerInPortraitOrLandscapeMode,
    WhatOrientationIsTheScreenInNow,
    ChooseImageForTheBanner,
  } = useChooseBackgroundImage();

  const ShowPassword = useShowPassword();

  const popoverCPFFocus = (
    <Popover id="popover-trigger-focus" title="Popover bottom"
      style={{ background: 'var(--color)', width: '40vh', height: '5vh', border: '2px solid white' }}
      className='d-flex flex-row gap-1 justify-content-center align-items-center'>
      <strong>FORMATO:</strong>
      <span>xxx.xxx.xxx-xx</span>
    </Popover>
  );

  const popoverTelephoneFocus = (
    <Popover id="popover-trigger-focus" title="Popover bottom"
      style={{ background: 'var(--color)', width: '40vh', height: '5vh', border: '2px solid white' }}
      className='d-flex flex-row gap-1 justify-content-center align-items-center'>
      <strong>FORMATO:</strong>
      <span>(xx) xxxxx-xxxx</span>
    </Popover>
  );

  const popoverPasswordFocus = (
    <Popover id="popover-trigger-focus" title="Popover bottom"
      style={{ background: 'var(--color)', width: '50vh', height: '25vh', border: '2px solid white' }}
      className='d-flex flex-column gap-1 justify-content-center align-items-center'>
      <strong>Sua senha deve conter:</strong>
      <ul>
        <li>Quatro(4) ou mais caracteres;</li>
        <li>Um número;</li>
        <li>Uma letra maiúscula;</li>
        <li>Uma letra minúscula.</li>
      </ul>
    </Popover>
  );

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
              action="."
              className='d-flex w-100 flex-column justify-content-center align-items-center gap-2'
            >
              <div id='customer-name-field'
                className='element-width overflow-hidden d-flex flex-row justify-content-center align-items-center gap-1'
                style={{ height: '5.5vh' }}
              >
                <input
                  className='rounded'
                  type="text" id='name-registration' required minLength={3} placeholder='NOME'
                  style={{ width: '39%' }}
                />
                <input
                  className='rounded'
                  type="text" id='lastname-resgistration' required minLength={3} placeholder='SOBRENOME'
                  style={{ width: '59%' }}
                />
              </div>
              <OverlayTrigger trigger="focus" placement="top" overlay={popoverCPFFocus}>
                <input
                  className='element-width rounded'
                  type="text" name="cpf-resgistration" id="cpf-resgistration" placeholder='CPF' required
                  pattern="[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}$"
                />
              </OverlayTrigger>
              <OverlayTrigger trigger="focus" placement="top" overlay={popoverTelephoneFocus}>
                <input
                  className='element-width rounded'
                  type="tel" id="phone-resgistration" name="phone-resgistration" placeholder='Telefone Celular'
                  maxLength="15" pattern="\([0-9]{2}\) [0-9]{4,6}-[0-9]{3,4}$"
                />
              </OverlayTrigger>
              <input
                className='element-width rounded'
                type="email" name="email-resgistration" id="email-resgistration" placeholder='E-mail' required
                pattern="[A-z0-9._%+-]+@[A-z0-9.-]+\.[a-Z]{2,}$"
              />
              <div id='customer-password-field'
                className='element-width overflow-hidden d-flex flex-row justify-content-center align-items-center gap-1'
                style={{ height: '5.5vh' }}
              >
                <div id='password-container' className='position-relative d-flex flex-row align-items-center' style={{ width: '49%' }}>
                  <OverlayTrigger trigger="focus" placement="top" overlay={popoverPasswordFocus}>
                    <input
                      className='element-width rounded w-100'
                      type="password" name="password-resgistration" id="password-resgistration" placeholder='Senha' required
                      pattern="(?=.*\d)(?=.*[a-Z])(?=.*[a-Z]).{4,}"
                    />
                  </OverlayTrigger>
                  <button
                    type='button' className='position-absolute'
                    style={{ right: '1vh', backgroundColor: 'transparent' }}
                    onClick={() => ShowPassword('password-resgistration', 'show-password-visible', 'show-password-invisible')}
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
                    type="password" name="confirm-password-resgistration" id="confirm-password-resgistration" placeholder='CONFIRME SUA SENHA' required
                  />
                  <button
                    type='button' className='position-absolute'
                    style={{ right: '1vh', backgroundColor: 'transparent' }}
                    onClick={() => ShowPassword('confirm-password-resgistration', 'show-confirm-password-visible', 'show-confirm-password-invisible')}
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
                <label htmlFor='cb-terms-of-use'>
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
                type="button"
                onClick={() => RegistrationValidation()}
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