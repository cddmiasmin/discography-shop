import React, { useRef, useState } from 'react'

import './header.css'

import { Link, useNavigate } from 'react-router-dom'

import Logo from '../Logo'
import Cart from '../Cart'
import Search from '../Search/Search'

import { Alert, Snackbar, Tooltip } from '@mui/material';

import { IoPerson } from 'react-icons/io5';
import { BsFillBagFill } from 'react-icons/bs';

const Desktop = (props) => {

    return (
        <div
            className={`row container-fluid d-flex position-absolute top-0 start-0 m-0 p-0
            justify-content-center align-items-center text-${props.colorIsDarkOrLight}`}
        >
            <div
                className={`w-100 d-flex  justify-content-center align-items-center text-${props.colorIsDarkOrLight}`}
            >
                <nav id='LinksHeader' className='col d-flex justify-content-star align-items-center ms-4 gap-4'>
                    <Link to='/artista' className={`text-decoration-none text-${props.colorIsDarkOrLight}`}>ARTISTAS</Link>
                    <Link to='/formato' className={`text-decoration-none text-${props.colorIsDarkOrLight}`}>FORMATOS</Link>
                    <Link to='/prevenda' className={`text-decoration-none text-${props.colorIsDarkOrLight}`}>PRÉ-VENDA</Link>
                    <Link to='/lancamento' className={`text-decoration-none text-${props.colorIsDarkOrLight}`}>LANÇAMENTOS</Link>
                </nav>

                <div id='Cart' className='col d-flex justify-content-center align-items-center'>
                    <Logo size={55} color={props.colorIsDarkOrLight} />
                </div>

                <div id='IconOption' className='col d-flex justify-content-end align-items-center me-4 gap-4'>
                    <Search colorIsDarkOrLight={props.colorIsDarkOrLight}/>

                    <Tooltip title="Perfil">
                        <Link to={'/login'} className={`bg-transparent text-${props.colorIsDarkOrLight}`}><IoPerson className='fs-5 ' /></Link>
                    </Tooltip>

                    <Tooltip
                        title="Carrinho"
                        onClick={() => props.setIsDrawerCartOpen(true)}
                    >
                        <button className={`bg-transparent text-${props.colorIsDarkOrLight}`}><BsFillBagFill className='fs-5 ' /></button>
                    </Tooltip>

                    <Cart
                        colorIsDarkOrLight={props.colorIsDarkOrLight} color={props.color} colorIsWhiteOrBlack={props.colorIsWhiteOrBlack}
                        isDrawerCartOpen={props.isDrawerCartOpen} setIsDrawerCartOpen={props.setIsDrawerCartOpen}
                    />
                </div>
            </div>
        </div>
    )
}

export default Desktop