import React, { useRef, useLayoutEffect } from 'react'

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
    const [openSearch, SetOpenSearch] = useState(false);

    const navigateDesk = useNavigate();

    const elementInputRef = useRef();
    const elementFormRef = useRef();
    const elementDivRef = useRef();

    const SearchOption = () => {
        if (elementInputRef.current.value.length < 3) SetOpenSnackbar(true);
        else navigateDesk('/busca');
    }



    const handleClose = (event, reason) => {
        if (reason === 'clickaway') return;
        SetOpenSnackbar(false);
    };

    const handleSubmit = event => {
        event.preventDefault();
        console.log('form submitted ✅');
        SearchOption();
    };


    const handleClick = () => {
        console.log(elementDivRef.current.style.display)

        if (elementDivRef.current.style.display === 'flex') {

            elementFormRef.current.submit();
        }

        if (elementDivRef.current.style.display === 'none')
            console.log('k')
    }



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
                    <Tooltip title="Buscar">
                        <button type='button' id='button-search-desk'
                            style={{ display: 'flex' }} onClick={() => handleClick()}
                            className={`bg-transparent text-${props.colorIsDarkOrLight}`}>
                            <HiSearch className='fs-5' />
                        </button>
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

            <div
                className='d-none justify-content-center align-items-center m-2 p-0 w-100 overflow-hidden'
                style={{ height: '15vh', border: '5px solid var(--color)', borderRadius: '0px 0px 10px 10px' }}
                ref={elementDivRef}
            >
                <form
                    onSubmit={handleSubmit}
                    ref={elementFormRef}
                    id='form'
                    className='search-form w-100 h-100 d-flex justify-content-center align-items-center p-0'
                >
                    <input ref={elementInputRef} placeholder='O QUE VOCÊ PROCURA?' className='search-field w-100 h-100' type="text" />
                </form>
            </div>
        </div>
    )
}

export default Desktop