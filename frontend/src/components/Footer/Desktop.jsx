import React, { useContext} from 'react'

import './footer.css'

import Logo from '../Logo'

import {
    BsFacebook, BsInstagram, BsTwitter, BsYoutube,
    BsFillTelephoneForwardFill
} from 'react-icons/bs'
import { MdOutlineMailOutline } from 'react-icons/md';

import { ColorContext } from '../../contexts/ColorContext';

const Desktop = () => {

    const {
        colorIsDarkOrLight,
    } = useContext(ColorContext);

    const currentYear = new Date();

    return (
        <footer
            className={`container-fluid w-100 text-${colorIsDarkOrLight} d-flex flex-column justify-content-center align-items-star gap-4`}
            style={{ height: '350px', paddingTop: '2vh' }}
        >
            <div className='d-flex flex-wrap justify-content-around align-items-star'>
                <div className='d-flex flex-column justify-content-star align-items-star gap-3'>
                    <div
                        className='d-flex flex-row align-items-end gap-2'
                    >
                        <Logo size={50} color={colorIsDarkOrLight} />
                        <h4>Cassandra</h4>
                    </div>

                    <p>Projetado e construído com todo o amor <br /> do mundo  pela equipe Cassandra com a ajuda <br />de nossos colaboradores.</p>

                    <div className='d-flex grid gap-2'>
                        <a
                            className={`text-decoration-none text-${colorIsDarkOrLight}`}
                            style={{ width: '25px', height: '25px' }}
                            href="https://www.facebook.com">
                            <BsFacebook className='w-100 h-100 facebook' />
                        </a>

                        <a
                            className={`text-decoration-none text-${colorIsDarkOrLight} instagram`}
                            style={{ width: '25px', height: '25px' }}
                            href="https://www.instagram.com">
                            <BsInstagram className='w-100 h-100' />
                        </a>

                        <a
                            className={`text-decoration-none text-${colorIsDarkOrLight}`}
                            style={{ width: '25px', height: '25px' }}
                            href="https://twitter.com/home">
                            <BsTwitter className='w-100 h-100 twitter' />
                        </a>

                        <a
                            className={`text-decoration-none text-${colorIsDarkOrLight}`}
                            style={{ width: '25px', height: '25px' }}
                            href="https://www.youtube.com">
                            <BsYoutube className='w-100 h-100 youtube' />
                        </a>

                    </div>
                </div>

                <div className='d-flex flex-column justify-content-star align-items-star  gap-1'>
                    <h2>ATENDIMENTO</h2>
                    <div className='d-flex flex-row gap-2 align-items-center'>
                        <BsFillTelephoneForwardFill style={{ width: '15px', height: '15px' }} />
                        <a className={`text-decoration-none text-${colorIsDarkOrLight}`} href="">(XX) XXXX-XXXX</a>
                    </div>
                    <div className='d-flex flex-row gap-2 align-items-center'>
                        <BsFillTelephoneForwardFill style={{ width: '15px', height: '15px' }} />
                        <a className={`text-decoration-none text-${colorIsDarkOrLight}`} href="">XXXX XXX XXXX</a>
                    </div>
                    <div className='d-flex flex-row gap-2 align-items-center'>
                        <MdOutlineMailOutline style={{ width: '15px', height: '15px' }} />
                        <a className={`text-decoration-none text-${colorIsDarkOrLight}`} href="">contato@cassandra.com</a>
                    </div>
                    <p>De segunda à sexta das <br />9h às 17h (exceto feriados)</p>
                </div>

                <div className='d-flex flex-column justify-content-star align-items-star  gap-1'>
                    <h2>SUPORTE</h2>
                    <a className={`text-decoration-none text-${colorIsDarkOrLight}`} href="">Dúvidas frequentes</a>
                    <a className={`text-decoration-none text-${colorIsDarkOrLight}`} href="">Termos de uso</a>
                    <a className={`text-decoration-none text-${colorIsDarkOrLight}`} href="">Política e privacidade</a>
                    <a className={`text-decoration-none text-${colorIsDarkOrLight}`} href="">Direito de Arrependimento</a>
                    <a className={`text-decoration-none text-${colorIsDarkOrLight}`} href="">Trocas e Devoluções</a>
                    <a className={`text-decoration-none text-${colorIsDarkOrLight}`} href="">Seja um Revendedor</a>
                    <a className={`text-decoration-none text-${colorIsDarkOrLight}`} href="">Fale conosco</a>
                </div>

                <div className='d-flex flex-column justify-content-star align-items-star gap-1'>
                    <h2>PEDIDOS</h2>
                    <a className={`text-decoration-none text-${colorIsDarkOrLight}`} href="">Minha conta</a>
                    <a className={`text-decoration-none text-${colorIsDarkOrLight}`} href="">Meus pedidos</a>
                </div>

                <div className='d-flex flex-column justify-content-star align-items-star gap-1'>
                    <h2>INSTITUCIONAL</h2>
                    <a className={`text-decoration-none text-${colorIsDarkOrLight}`} href="">Sobre Cassandra</a>
                </div>
            </div>

            <div style={{ height: '10vh' }} className='d-flex flex-column justify-content-center align-items-center text-white gap-2'>

                <div style={{ height: '6vh' }} className='d-flex justify-content-center align-items-center w-100'>
                    <img style={{ height: '100%' }} src="\images\payment-card-flag.png" alt="" />
                </div>

                <p className={`d-flex justify-content-center align-items-center gap-1 text-${colorIsDarkOrLight}`}>
                    Copyright ©{currentYear.getFullYear()} | Cassandra | Desenvolvido por
                    <a className={`text-${colorIsDarkOrLight}`} href="https://github.com/cddmiasmin">Iasmin Dias</a>
                </p>
            </div>
        </footer>
    )
}

export default Desktop