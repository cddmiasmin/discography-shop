import React from 'react'

import './header.css'

import { Link, useNavigate } from 'react-router-dom'

import Logo from '../Logo'
import Cart from '../Cart'

import { Alert, Snackbar, Tooltip } from '@mui/material';

import { HiSearch } from 'react-icons/hi';
import { IoPerson } from 'react-icons/io5';
import { BsFillBagFill } from 'react-icons/bs';
import { useState } from 'react'


const Desktop = (props) => {
    const [openSnackBar, SetOpenSnackbar] = useState(false);
    const navigateDesk = useNavigate();

    const searchInput = document.getElementById('input-search-desk');

    const SearchOption = () => {
        if (searchInput.value.length < 3) {
            SetOpenSnackbar(true);
            searchInput.focus();
        } else navigateDesk('/busca');
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') return;
        SetOpenSnackbar(false);
    };

    return (
        <div
            className={`flex-row container-fluid d-flex position-absolute top-0 start-0
            justify-content-center align-items-center text-${props.colorIsDarkOrLight}`}
        >

            <nav id='LinksHeader' className='col d-flex justify-content-star align-items-center ms-4 gap-4'>
                <Link to='/artista' className={`text-decoration-none text-${props.colorIsDarkOrLight}`}>ARTISTAS</Link>
                <Link to='/prevenda' className={`text-decoration-none text-${props.colorIsDarkOrLight}`}>PRÉ-VENDA</Link>
                <Link to='/lancamento' className={`text-decoration-none text-${props.colorIsDarkOrLight}`}>LANÇAMENTOS</Link>
            </nav>

            <div id='Cart' className='col d-flex justify-content-center align-items-center'>
                <Logo size={55} color={props.colorIsDarkOrLight} />
            </div>

            <div id='IconOption' className='col d-flex justify-content-end align-items-center me-4 gap-4'>
                <Tooltip title="Buscar">
                    <div id='div-search-desk' className='d-flex flex-row gap-1 justify-content-center align-items-center'>
                        <input type="text" id='input-search-desk' className='style' pattern='[A-Za-z]' minLength='3'
                            placeholder='Busque por um artista ou albúm' style={{ width: '30vh' }}
                        />
                        <button type='button' id='button-search-desk'
                            style={{ display: 'flex' }} onClick={() => SearchOption()}
                            className={`bg-transparent text-${props.colorIsDarkOrLight}`}><HiSearch className='fs-5 ' /></button>
                    </div>
                </Tooltip>

                <Snackbar open={openSnackBar} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} variant="filled" severity="error" sx={{ width: '100%' }}>
                        Por favor, digite pelo menos 3 caracteres para pesquisar!
                    </Alert>
                </Snackbar>

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
    )
}

export default Desktop