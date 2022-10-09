import React from 'react'

import { Modal } from '@mui/material';

import { BsArrowLeftCircleFill, BsBookmarkHeartFill } from 'react-icons/bs'

import './letMeKnowWhenItArrives.css'

const LetMeKnowWhenItArrives = (props) => {
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
        backgroundColor: 'var(--color)',
        borderRadius: '12px',
        border: `2px solid var(--colorIsWhiteOrBlack)`,
        boxShadow: 24,
        p: 4,
        gap: '1vh',
        color: 'var(--colorIsWhiteOrBlack)'
    };

    return (
        <Modal
            open={props.letMeKnowWhenItArrivesModalIsOpen}
            onClose={() => props.SetLetMeKnowWhenItArrivesModalIsOpen(false)}
        >
            <div id='card-forgot-password' style={style}>
                <div id='card-bg' />
                <div className='w-100 d-flex flex-column justify-content-center align-items-center'>
                    <div
                        id='sub-card'
                        className='w-100 d-flex flex-column justify-content-center align-items-center'
                    >
                        <BsBookmarkHeartFill className='m-2' style={{ fontSize: 'xxx-large', color: 'var(--colorIsWhiteOrBlack)' }} />
                        <h1>TE AVISAREMOS</h1>
                        <h6 className='text-center'>Para ser avisado da disponibilidade deste Produto, basta preencher os campos abaixo.</h6>
                    </div>
                    <div className='rounded' style={{ height: '0.3vh', width: '85%', backgroundColor: 'var(--colorIsWhiteOrBlack)' }} />
                    <form action="." id='form-arrives'
                        className='w-100 d-flex flex-column justify-content-center align-items-center m-1'
                        style={{ lineHeight: 1.5 }}
                    >
                        <input
                            className='rounded m-2'
                            type="email" name="name-arrives" id="name-arrives" placeholder='Informe seu nome' required="required"
                            pattern="[A-Za-z]{2,}$"
                        />
                        <input
                            className='rounded m-2'
                            type="email" name="email-arrives" id="email-arrives" placeholder='Informe seu e-mail' required="required"
                            pattern="[a-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        />
                        <div className='w-100 d-flex flex-column justify-content-center align-items-center m-1'>
                            <h6>De qual(is) formato(s) deseja ser informad@?</h6>
                            <div className='w-100 d-flex gap-2 flex-row justify-content-center align-items-center m-1'>
                                {props.formatStockAvailable.map((format, key) => (
                                    <div key={key}>
                                        <input type="checkbox" name={`format-${format.type}`} id={`format-${format.type}`} style={{ width: 'auto', height: 'auto' }} />
                                        <label htmlFor={`format-${format.type}`}>
                                            <span className='ms-1 p-0'>{format.type}</span>
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <button
                            className='d-flex justify-content-center align-items-center rounded m-1'
                            style={{ width: '65%', height: '5vh', fontSize: 'larger' }}
                            type="submit"
                        >
                            SALVAR
                        </button>
                    </form>
                    <button
                        type='button'
                        className={`w-100 flex-row gap-1 d-flex justify-content-center align-items-center rounded m-1 text-${props.colorIsDarkOrLight}`}
                        style={{ fontSize: 'medium', backgroundColor: 'transparent' }}
                        onClick={() => props.SetLetMeKnowWhenItArrivesModalIsOpen(false)}
                    >
                        <BsArrowLeftCircleFill style={{ fontSize: 'small' }} />
                        Retornar para Produto
                    </button>
                </div>
            </div>
        </Modal>
    )
}

export default LetMeKnowWhenItArrives;