import React, { useState } from 'react'

import Logo from '../Logo'
import Cart from '../Cart'
import Profile from '../Profile'

import { Link } from 'react-router-dom'

import { Tooltip } from '@mui/material';
import { Drawer, Box } from '@mui/material';

import { BiMenu } from 'react-icons/bi';
import { HiSearch } from 'react-icons/hi';
import { IoPerson } from 'react-icons/io5';
import { BsFillBagFill } from 'react-icons/bs';
import { RiCloseCircleFill } from 'react-icons/ri'

const Mobile = (props) => {
    const [isDrawerMenuOpen, setIsDrawerMenuOpen] = useState(false);

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

                            <Link to='/formato'
                                className={`bg-${props.colorIsDarkOrLight} text-decoration-none fs-5 d-flex justify-content-center align-items-center`}
                                style={{ height: '6vh', borderRadius: '10px', color: `${props.color}` }}
                            >
                                FORMATOS
                            </Link>

                            <Link to='/prevenda'
                                className={`bg-${props.colorIsDarkOrLight} text-decoration-none fs-5 d-flex justify-content-center align-items-center`}
                                style={{ height: '6vh', borderRadius: '10px', color: `${props.color}` }}
                            >
                                PRÉ-VENDA
                            </Link>

                            <Link to='/lancamento' 
                                className={`bg-${props.colorIsDarkOrLight} text-decoration-none fs-5 d-flex justify-content-center align-items-center`} 
                                style={{height: '6vh', borderRadius: '10px', color: `${props.color}`}}
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
                    <button className={`bg-transparent text-${props.colorIsDarkOrLight}`}><IoPerson className='fs-5' /></button>
                </Tooltip>
                <Profile isPopoverProfileOpen={props.isPopoverProfileOpen} setIsPopoverProfileOpen={props.setIsPopoverProfileOpen} />

            </div>


            <div id='LogoMobile' className='col-7 d-flex justify-content-center align-items-center'>
                <Logo size={55} color={props.colorIsDarkOrLight} />
            </div>

            <div id='RightOptionMobile' className={`col d-flex justify-content-end align-items-center gap-3 text-${props.colorIsDarkOrLight}`}>
                <Tooltip id='ROM-TooltipIconButttonSearch' title="Buscar">
                    <button id='IconButtonSearch' className={`bg-transparent text-${props.colorIsDarkOrLight}`}><HiSearch className='fs-5 ' /></button>
                </Tooltip>

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