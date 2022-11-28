import React, { useContext } from 'react'

import './header.css'

import { Link } from 'react-router-dom'

import Logo from '../Logo'
import Cart from '../Cart'
import Search from '../Search/Search'

import { Tooltip } from '@mui/material';

import { IoPerson } from 'react-icons/io5';
import { BsFillBagFill } from 'react-icons/bs';
import { ColorContext } from '../../contexts/ColorContext'

const Desktop = ({ isDrawerCartOpen, setIsDrawerCartOpen }) => {

    const { colorIsDarkOrLight, colorIsWhiteOrBlack } = useContext(ColorContext);

    return (
        <div
            className={`row container-fluid d-flex position-absolute top-0 start-0 m-0 p-0
            justify-content-center align-items-center text-${colorIsDarkOrLight}`}
        >
            <div
                className={`w-100 d-flex  justify-content-center align-items-center text-${colorIsDarkOrLight}`}
            >
                <nav id='LinksHeader' className='col d-flex justify-content-star align-items-center ms-4 gap-4'>
                    <Link to='/artista' className={`text-decoration-none text-${colorIsWhiteOrBlack}`}>ARTISTAS</Link>
                    <Link to='/formato' className={`text-decoration-none text-${colorIsWhiteOrBlack}`}>FORMATOS</Link>
                    <Link to='/prevenda' className={`text-decoration-none text-${colorIsWhiteOrBlack}`}>PRÉ-VENDA</Link>
                    <Link to='/lancamento' className={`text-decoration-none text-${colorIsWhiteOrBlack}`}>LANÇAMENTOS</Link>
                </nav>

                <div id='Cart' className='col d-flex justify-content-center align-items-center'>
                    <Logo size={55} />
                </div>

                <div id='IconOption' className='col d-flex justify-content-end align-items-center me-4 gap-4'>
                    <Search />

                    <Tooltip title="Perfil">
                        <Link to={'/login'} className={`bg-transparent text-${colorIsWhiteOrBlack}`}><IoPerson className='fs-5 ' /></Link>
                    </Tooltip>

                    <Tooltip
                        title="Carrinho"
                        onClick={() => setIsDrawerCartOpen(true)}
                    >
                        <button className={`bg-transparent text-${colorIsWhiteOrBlack}`}><BsFillBagFill className='fs-5 ' /></button>
                    </Tooltip>

                    <Cart
                        isDrawerCartOpen={isDrawerCartOpen} setIsDrawerCartOpen={setIsDrawerCartOpen}
                    />
                </div>
            </div>
        </div>
    )
}

export default Desktop