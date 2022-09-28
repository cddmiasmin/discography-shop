import React from 'react'

import { Box, Modal } from '@mui/material';

import { BsArrowLeftCircleFill } from 'react-icons/bs'
import { GiKey } from 'react-icons/gi'

import './iForgotMyPassword.css'

const IForgotMyPassword = (props) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        transform: 'translate(-50%, -50%)',
        width: '40%',
        backdropFilter: 'blur(25px) saturate(200%)',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        borderRadius: '12px',
        border: `1.5px solid ${props.color}`,
        boxShadow: 24,
        p: 4,
        gap: '1vh'
    };

    return (
        <Modal
            open={props.passwordModalIsOpen}
            onClose={() => props.SetPasswordModalIsOpen(false)}
        >
            <div id='card-forgot-password'>
                <div id='card-bg'/>
                <div className='w-100 d-flex flex-column justify-content-center align-items-center p-5'>
                    <div
                        id='sub-card'
                        className='w-100 d-flex flex-column justify-content-center align-items-center'
                    >
                        <GiKey className='m-2' style={{ fontSize: 'xxx-large' }} />
                        <h1>ESQUECEU A SENHA?</h1>
                        <h6>Não se preocupe, enviaremos instruções de redefinição.</h6>
                    </div>
                    <div className={`bg-${props.colorIsDarkOrLight} rounded `} style={{ height: '0.3vh', width: '75%' }} />
                    <form action="" id='form-forgot-password'
                        className='w-100 d-flex flex-column justify-content-center align-items-center m-1'
                        style={{ lineHeight: 1.5 }}
                    >
                        <input
                            className='rounded m-2'
                            type="email" name="fieldEmail" id="field-email" placeholder='Digite seu e-mail' required="required"
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        />
                        <button
                            className='d-flex justify-content-center align-items-center rounded m-1'
                            style={{ width: '65%', height: '5vh', fontSize: 'larger' }}
                            type="submit"
                        >
                            Redefinir senha
                        </button>
                    </form>
                    <button
                        type='button'
                        className={`w-100 flex-row gap-1 d-flex justify-content-center align-items-center rounded m-1 text-${props.colorIsDarkOrLight}`}
                        style={{ fontSize: 'medium', backgroundColor: 'transparent'}}
                        onClick={() => props.SetPasswordModalIsOpen(false)}
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