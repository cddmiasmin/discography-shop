import React, { useState } from 'react'

import './header.css'
import Logo from '../Logo'
import Cart from '../Cart'
import Profile from '../Profile'

import { Link, useNavigate } from 'react-router-dom'

import { Alert, Snackbar } from '@mui/material';
import { Tooltip } from '@mui/material';
import { Drawer, Box } from '@mui/material';

import { BiMenu } from 'react-icons/bi';
import { HiSearch } from 'react-icons/hi';
import { IoPerson } from 'react-icons/io5';
import { BsFillBagFill } from 'react-icons/bs';
import { RiCloseCircleFill } from 'react-icons/ri'

const Mobile = (props) => {
    const [isDrawerMenuOpen, setIsDrawerMenuOpen] = useState(false);

    const [openSnackBarMob, SetOpenSnackbarMob] = useState(false);
    const navigateMob = useNavigate();

    const searchInputMob = document.getElementById('input-search-mob');

    const SearchOptionMob = () => {
        if (searchInputMob.value.length < 3) {
            SetOpenSnackbar(true);
            searchInputMob.focus();
        } else navigateMob('/busca');
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') return;
        SetOpenSnackbarMob(false);
    };

    return (
        <div className={`flex-row container-fluid d-flex justify-content-center align-items-center text-${props.colorIsDarkOrLight}`}>
            <div id='LeftOptionsMobile' className='col d-flex justify-content-star align-items-center gap-3'>
                <Tooltip
                    id='IconButtonMenu'
                    title="Menu"
                    onClick={() => setIsDrawerMenuOpen(true)}
                >
                    <button className={`bg-transparent text-${props.colorIsDarkOrLight}`}><BiMenu className='fs-3 ' /></button>
                </Tooltip>

                <Drawer
                    anchor='left'
                    open={isDrawerMenuOpen}
                    onClose={() => { setIsDrawerMenuOpen(false) }}>
                    <Box
                        className='d-flex flex-column'
                        p={2} width='40vh' height='100%' role='presentation' textAlign='center'
                        style={{ backgroundColor: `${props.color}` }}>
                        <nav className='w-100 d-flex flex-column justify-content-star align-items-star gap-2'>
                            <Tooltip
                                title="Fechar menu"
                                onClick={() => setIsDrawerMenuOpen(false)}
                            >
                                <button className={`bg-transparent text-${props.colorIsDarkOrLight}`}><RiCloseCircleFill className='fs-5 ' /></button>
                            </Tooltip>

                            <Link to='/artista'
                                className={`bg-${props.colorIsDarkOrLight} text-decoration-none fs-5 d-flex justify-content-center align-items-center`}
                                style={{ height: '6vh', borderRadius: '10px', color: `${props.color}` }}
                            >
                                ARTISTAS
                            </Link>

                            <Link to='/prevenda'
                                className={`bg-${props.colorIsDarkOrLight} text-decoration-none fs-5 d-flex justify-content-center align-items-center`}
                                style={{ height: '6vh', borderRadius: '10px', color: `${props.color}` }}
                            >
                                PRÉ-VENDA
                            </Link>

                            <Link to='/lancamento'
                                className={`bg-${props.colorIsDarkOrLight} text-decoration-none fs-5 d-flex justify-content-center align-items-center`}
                                style={{ height: '6vh', borderRadius: '10px', color: `${props.color}` }}
                            >
                                LANÇAMENTOS
                            </Link>
                        </nav>
                    </Box>
                </Drawer>

                <Tooltip
                    id='IconButtonMyProfileMobile'
                    title="Perfil"
                    onClick={() => props.setIsPopoverProfileOpen(true)}
                >
                    <Link to={'/login'} className={`bg-transparent text-${props.colorIsDarkOrLight}`}><IoPerson className='fs-5' /></Link>
                </Tooltip>
                <Profile isPopoverProfileOpen={props.isPopoverProfileOpen} setIsPopoverProfileOpen={props.setIsPopoverProfileOpen} />

            </div>


            <div id='LogoMobile' className='col d-flex justify-content-center align-items-center'>
                <Logo size={55} color={props.colorIsDarkOrLight} />
            </div>

            <div id='RightOptionMobile' className={`col d-flex justify-content-end align-items-center gap-2 text-${props.colorIsDarkOrLight}`}>
                <Tooltip id='ROM-TooltipIconButttonSearch' title="Buscar">
                    <div id='div-search-mob' className='d-flex flex-row gap-1 justify-content-center align-items-center'>
                        <input type="text" id='input-search-mob' className='style' pattern='[A-Za-z]' minLength='3'
                            placeholder='Busque' title='Busque artista ou albúm' style={{ width: '9vh' }}
                        />
                        <button type='button' id='button-search-mob'
                            onClick={() => SearchOptionMob()}
                            className={`bg-transparent text-${props.colorIsDarkOrLight}`}><HiSearch className='fs-5 ' /></button>
                    </div>
                </Tooltip>

                <Snackbar open={openSnackBarMob} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} variant="filled" severity="error" sx={{ width: '100%' }}>
                        Por favor, digite pelo menos 3 caracteres para pesquisar!
                    </Alert>
                </Snackbar>

                <Tooltip
                    id='ROM-TooltipIconButttonCart'
                    title="Cart"
                    onClick={() => props.setIsDrawerCartOpen(true)}
                >
                    <button id='IconButttonCart' className={`bg-transparent text-${props.colorIsDarkOrLight}`}><BsFillBagFill className='fs-5' /></button>
                </Tooltip>

                <Cart
                    colorIsDarkOrLight={props.colorIsDarkOrLight} color={props.color} colorIsWhiteOrBlack={props.colorIsWhiteOrBlack}
                    isDrawerCartOpen={props.isDrawerCartOpen} setIsDrawerCartOpen={props.setIsDrawerCartOpen}
                />
            </div>
        </div>
    )
}

export default Mobile