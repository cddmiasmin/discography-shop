import React from 'react'

import Logo from './Logo'
import {
    BsFacebook, BsInstagram, BsTwitter, BsYoutube,
    BsFillTelephoneForwardFill
} from 'react-icons/bs'
import { MdOutlineMailOutline } from 'react-icons/md'

const Footer = (props) => {
    return (
        <div
            className='container-fluid flex-wrap w-100 bg-dark d-flex flex-column justify-content-star align-items-star pt-4 ps-5'
            style={{ height: '350px' }}
        >
            <div className='d-flex flex-column justify-content-center align-items-star gap-3'>
                <div
                    className='d-flex flex-row align-items-end gap-2'
                >
                    <Logo size={50} color={props.color}/>
                    <h4>Cassandra</h4>
                </div>

                <p>Projetado e construído com todo o amor <br /> do mundo  pela equipe Cassandra com a ajuda <br />de nossos colaboradores.</p>

                <div className='d-flex grid gap-2'>
                    <a
                        className='text-decoration-none text-white'
                        style={{ width: '25px', height: '25px' }}
                        href="https://www.facebook.com">
                        <BsFacebook className='w-100 h-100' />
                    </a>

                    <a
                        className='text-decoration-none text-white'
                        style={{ width: '25px', height: '25px' }}
                        href="https://www.instagram.com">
                        <BsInstagram className='w-100 h-100' />
                    </a>

                    <a
                        className='text-decoration-none text-white'
                        style={{ width: '25px', height: '25px' }}
                        href="https://twitter.com/home">
                        <BsTwitter className='w-100 h-100' />
                    </a>

                    <a
                        className='text-decoration-none text-white'
                        style={{ width: '25px', height: '25px' }}
                        href="https://www.youtube.com">
                        <BsYoutube className='w-100 h-100' />
                    </a>

                </div>
            </div>

            <div className='d-flex flex-column justify-content-center align-items-star  gap-1'>
                <h2>ATENDIMENTO</h2>
                <div className='d-flex flex-row gap-2 align-items-center'>
                    <BsFillTelephoneForwardFill style={{ width: '15px', height: '15px' }} />
                    <a className='text-decoration-none text-white' href="">(XX) XXXX-XXXX</a>
                </div>
                <div className='d-flex flex-row gap-2 align-items-center'>
                    <BsFillTelephoneForwardFill style={{ width: '15px', height: '15px' }} />
                    <a className='text-decoration-none text-white' href="">XXXX XXX XXXX</a>
                </div>
                <div className='d-flex flex-row gap-2 align-items-center'>
                    <MdOutlineMailOutline style={{ width: '15px', height: '15px' }} />
                    <a className='text-decoration-none text-white' href="">contato@cassandra.com</a>
                </div>
                <p>De segunda à sexta das <br/>9h às 17h (exceto feriados)</p>
            </div>

            <div className='d-flex flex-column justify-content-center align-items-star  gap-1'>
                <h2>SUPORTE</h2>
                <a className="text-decoration-none text-white" href="">Dúvidas frequentes</a>
                <a className="text-decoration-none text-white" href="">Termos de uso</a>
                <a className="text-decoration-none text-white" href="">Política e privacidade</a>
                <a className="text-decoration-none text-white" href="">Direito de Arrependimento</a>
                <a className="text-decoration-none text-white" href="">Trocas e Devoluções</a>
                <a className="text-decoration-none text-white" href="">Seja um Revendedor</a>
                <a className="text-decoration-none text-white" href="">Fale conosco</a>
            </div>

            <div className='d-flex flex-column justify-content-center align-items-star gap-1'>
                <h2>PEDIDOS</h2>
                <a className="text-decoration-none text-white" href="">Minha conta</a>
                <a className="text-decoration-none text-white" href="">Meus pedidos</a>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>

            <div className='d-flex flex-column justify-content-center align-items-star gap-1'>
                <h2>INSTITUCIONAL</h2>
                <a className="text-decoration-none text-white" href="">Sobre Cassandra</a>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>

            
            <div style={{height:'10vh'}} className='d-flex flex-column justify-content-star align-items-star position-absolute bottom-0 text-white gap-2'>

                <div style={{height:'6vh'}} className='d-flex justify-content-star align-items-center w-100'>
                    <img style={{height:'100%'}} src="src\assets\images\payment-card-flag.png" alt="" />
                </div>

                <p className='d-flex justify-content-star align-items-end gap-1'>
                    Copyright ©2022 | Cassandra | Desenvolvido por
                    <a className='text-black' href="https://github.com/cddmiasmin">Iasmin Dias</a>
                </p>
            </div>
        </div>
    )
}

export default Footer