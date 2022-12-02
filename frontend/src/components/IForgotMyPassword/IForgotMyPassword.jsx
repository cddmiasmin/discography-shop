import React, { useContext, useState } from 'react'
import { BsArrowLeftCircleFill } from 'react-icons/bs'
import { ColorContext } from '../../contexts/ColorContext';
import { Modal } from '@mui/material';
import { GiKey } from 'react-icons/gi';
import api from '../../services/api';

import './iForgotMyPassword.css'

const IForgotMyPassword = ({ 
    passwordModalIsOpen, SetPasswordModalIsOpen, SetIsSnackbarOpen, SetSeverity, SetMessage
}) => {

    const [emailValue, SetEmailValue] = useState('');

    const { colorIsDarkOrLight } = useContext(ColorContext);

    return (
        <Modal
            open={passwordModalIsOpen}
            onClose={() => SetPasswordModalIsOpen(false)}
        >
            <div id='card-forgot-password'>
                <div id='card-bg' />
                <div className='w-100 d-flex flex-column justify-content-center align-items-center'>
                    <div
                        id='sub-card'
                        className='w-100 d-flex flex-column justify-content-center align-items-center'
                    >
                        <GiKey className='m-2' style={{ fontSize: 'xxx-large' }} />
                        <h1>ESQUECEU A SENHA?</h1>
                        <h6 className='text-center'>Não se preocupe, enviaremos instruções de recebê-la.</h6>
                    </div>
                    <div className={`bg-${colorIsDarkOrLight} rounded `} style={{ height: '0.3vh', width: '75%' }} />
                    <form action="" id='form-forgot-password'
                        className='w-100 d-flex flex-column justify-content-center align-items-center m-1'
                        style={{ lineHeight: 1.5 }}
                        onSubmit={(e) => {
                            e.preventDefault();

                            api.get(`/password/${emailValue}`).then((response) => {
                                if (response.data.error) {
                                    SetSeverity("error");
                                    SetMessage(response.data.error);
                                    SetIsSnackbarOpen(true);
                                } else {
                                    SetSeverity("success");
                                    SetMessage(response.data.result);
                                    SetIsSnackbarOpen(true);
                                }
                            });

                        }}
                    >
                        <input
                            className='rounded m-2' value={emailValue} onChange={(e) => SetEmailValue(e.target.value)}
                            type="email" name="fieldEmail" id="field-email" placeholder='Digite seu e-mail' required
                            pattern="[a-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        />
                        <button
                            className='d-flex justify-content-center align-items-center rounded m-1'
                            style={{ width: '65%', height: '5vh', fontSize: 'larger' }}
                            type="submit"
                        >
                            Receber senha
                        </button>
                    </form>
                    <button
                        type='button'
                        className={`w-100 flex-row gap-1 d-flex justify-content-center align-items-center rounded m-1 text-${colorIsDarkOrLight}`}
                        style={{ fontSize: 'medium', backgroundColor: 'transparent' }}
                        onClick={() => SetPasswordModalIsOpen(false)}
                    >
                        <BsArrowLeftCircleFill style={{ fontSize: 'small' }} />
                        Voltar para entrar
                    </button>
                </div>
            </div>
        </Modal>
    )
}

export default IForgotMyPassword