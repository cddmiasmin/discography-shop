import React, { useState, useEffect, useRef, useContext } from 'react';

import { OverlayTrigger, Popover } from 'react-bootstrap';

import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

import { Link } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { BsFillArrowRightSquareFill } from "react-icons/bs";

import { useChooseBackgroundImage } from './../../functions/useChooseBackgroundImage';
import { ColorContext } from '../../contexts/ColorContext';
import { useShowPassword } from '../../functions/useShowPassword';

import Logo from './../../components/Logo';
import InputMask from '../../components/InputMask';

import './registration.css';
import api from '../../services/api';


const Registration = () => {

  const [nameValue, SetNameValue] = useState('');
  const [lastNameValue, SetLastNameValue] = useState('');
  const [birthDateValue, SetBirthDateValue] = useState('');
  const [cpfValue, SetCPFValue] = useState('');
  const [telephoneValue, SetTelephoneValue] = useState('');
  const [emailValue, SetEmailValue] = useState('');
  const [password, SetPassword] = useState('');
  const [confirmPassword, SetConfirmPassword] = useState('');

  const [isSnackbarOpen, SetIsSnackbarOpen] = useState(false);
  const [severity, SetSeverity] = useState('');
  const [message, SetMessage] = useState('');


  const DivFormRef = useRef();
  const DivSucessRef = useRef();
  const checkboxRef = useRef();

  const {
    color,
    getColor,
  } = useContext(ColorContext);

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
    getColor(bannerInPortraitOrLandscapeMode[imageNumber].imgUrl, true);
  }, [])

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') return;

    SetIsSnackbarOpen(false);
  };

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

  
  console.log(
    'OF', DivFormRef.current.style.display,
    'OS', DivSucessRef.current.style.display
  )

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
          <Logo size={70} />

          <div
            className='w-100 flex-column justify-content-center align-items-center gap-2'
            ref={DivFormRef} style={{display: 'flex'}}
          >
            <div className='d-flex w-100 flex-column justify-content-center align-items-center gap-1'>
              <h1 className='m-0'>CRIAR UMA CONTA</h1>
              <div className='d-flex flex-row justify-content-center align-items-center gap-1'>
                <p className='m-0' style={{ fontSize: 'medium' }} >Já tem uma conta?</p>
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
              onSubmit={(e) => {
                e.preventDefault();

                if (!checkboxRef.current.checked) {
                  SetSeverity('warning');
                  SetMessage('É necessário aceitar os termos de uso para continuar!');
                  SetIsSnackbarOpen(true);
                }
                else {

                  let americanDateFormat = birthDateValue.split('/').reverse().join('-');

                  api.post('/user', {
                    firstName: nameValue,
                    lastName: lastNameValue,
                    birthDate: americanDateFormat,
                    cpf: cpfValue,
                    telephone: telephoneValue,
                    email: emailValue,
                    password: password
                  })
                    .then(function (response) {

                      console.log(response.data);
                      if (response.data.error) {
                        SetSeverity("error");
                        SetMessage(response.data.error);
                        SetIsSnackbarOpen(true);
                      }
                      
                      if(response.data.result){
                        console.log('result')
                        DivFormRef.current.style.display = 'none';
                        DivSucessRef.current.style.display = 'flex';
                      }

                      console.log('end response')

                    })
                    .catch(function (error) {
                      console.log(error.data);
                    });

                }
              }}
            >
              <div
                id='customer-name-field'
                className='element-width overflow-hidden d-flex flex-row justify-content-center align-items-center gap-1'
                style={{ height: '5.5vh' }}
              >
                <input
                  className='rounded'
                  type="text" id='name-registration' required minLength={3} placeholder='NOME'
                  style={{ width: '39%' }}
                  pattern="[A-Za-z ]{3,}" value={nameValue}
                  onChange={(e) => SetNameValue(e.target.value)}
                />
                <input
                  className='rounded'
                  type="text" id='lastname-resgistration' required minLength={3} placeholder='SOBRENOME'
                  style={{ width: '59%' }}
                  pattern="[A-Za-z ]{3,}" value={lastNameValue}
                  onChange={(e) => SetLastNameValue(e.target.value)}
                />
              </div>

              <InputMask
                type={'birth-date'} value={birthDateValue} SetValue={SetBirthDateValue}
                pattern={['99/99/9999']}
                placeholder={'Data de nascimento'}
                number={10}
              />

              <InputMask
                type={'cpf'} value={cpfValue} SetValue={SetCPFValue}
                pattern={['999.999.999-99']}
                placeholder={'CPF'}
                number={14}
              />

              <InputMask
                type={'telephone'} value={telephoneValue} SetValue={SetTelephoneValue}
                pattern={['(99) 99999-9999']}
                placeholder={'Telefone celular'}
                number={15}
              />

              <input
                className='element-width rounded' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                type="email" name="email-resgistration" id="email-resgistration"
                placeholder='E-mail' required
                value={emailValue} onChange={(e) => SetEmailValue(e.target.value)}
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
                      pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}"
                      value={password} onChange={(e) => SetPassword(e.target.value)}
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
                    value={confirmPassword}
                    onChange={(e) => SetConfirmPassword(e.target.value)}
                    pattern={password}
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
                <input ref={checkboxRef} type="checkbox" name="cb-terms-of-use" id="cb-terms-of-use" style={{ width: 'auto', height: 'auto' }} />
                <label htmlFor='cb-terms-of-use'>
                  <span className='ms-1 p-0'>Eu li e concordo com os</span>
                  <a
                    className='ms-1 rounded'
                    href="https://pbs.twimg.com/media/FCWcK8FWUAY4PaP?format=jpg&name=small"
                    style={{ color: `${color}`, backgroundColor: 'var(--colorIsWhiteOrBlack)' }}
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

          <div
            className='w-100 flex-column justify-content-center align-items-center'
            ref={DivSucessRef} style={{display: 'none'}}
          >
            <h1 className='m-4' align='center'>CADASTRO REALIZADO <br /> COM SUCESSO!</h1>
            <Link to='/login'
              className={`d-flex gap-2 justify-content-center align-items-center text-decoration-none rounded`}
              style={{ fontSize: 'medium', backgroundColor: 'var(--colorIsWhiteOrBlack)', 
                    width: '30vh', height: '5vh', color: 'var(--color)'}}
            >
              <BsFillArrowRightSquareFill/> IR PARA O LOGIN
            </Link>
          </div>

        </div>

        <p
          className='position-absolute m-2'
          style={{ bottom: 0, right: 0, fontSize: 'x-small' }}
        >
          © Cassandra 2022
        </p>
      </div>
      
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        open={isSnackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity={severity} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  )
}

export default Registration