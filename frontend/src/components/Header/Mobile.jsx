import React, { useState, useContext } from 'react'

import './header.css';
import Logo from '../Logo';
import Cart from '../Cart';
import Search from '../Search/Search'

import Dropdown from 'react-bootstrap/Dropdown';

import { Link, useNavigate } from 'react-router-dom';

import { ColorContext } from '../../contexts/ColorContext';
import { UserContext } from '../../contexts/UserContext';
import { Tooltip } from '@mui/material';
import { Drawer, Box } from '@mui/material';

import { BiMenu } from 'react-icons/bi';
import { HiSearch } from 'react-icons/hi';
import { IoPerson } from 'react-icons/io5';
import { BsFillBagFill } from 'react-icons/bs';
import { RiCloseCircleFill } from 'react-icons/ri'

const Mobile = ({ isDrawerCartOpen, setIsDrawerCartOpen }) => {

    const navigate = useNavigate();

    const [isDrawerMenuOpen, setIsDrawerMenuOpen] = useState(false);

    const { user, SetUser } = useContext(UserContext);

    const {
        color,
        colorIsDarkOrLight,
        colorIsWhiteOrBlack
    } = useContext(ColorContext);

    return (
        <div className={`flex-row container-fluid d-flex justify-content-center align-items-center text-${colorIsDarkOrLight}`}>
            <div id='LeftOptionsMobile' className='col d-flex justify-content-star align-items-center gap-3'>
                <Tooltip
                    id='IconButtonMenu'
                    title="Menu"
                    onClick={() => setIsDrawerMenuOpen(true)}
                >
                    <button className={`bg-transparent text-${colorIsDarkOrLight}`}><BiMenu className='fs-3 ' /></button>
                </Tooltip>

                <Drawer
                    anchor='left'
                    open={isDrawerMenuOpen}
                    onClose={() => { setIsDrawerMenuOpen(false) }}>
                    <Box
                        className='d-flex flex-column'
                        p={2} width='40vh' height='100%' role='presentation' textAlign='center'
                        style={{ backgroundColor: `${color}` }}>
                        <nav className='w-100 d-flex flex-column justify-content-star align-items-star gap-2'>
                            <Tooltip
                                title="Fechar menu"
                                onClick={() => setIsDrawerMenuOpen(false)}
                            >
                                <button className={`bg-transparent text-${colorIsDarkOrLight}`}><RiCloseCircleFill className='fs-5 ' /></button>
                            </Tooltip>

                            <Link to='/artista'
                                className={`bg-${colorIsDarkOrLight} text-decoration-none fs-5 d-flex justify-content-center align-items-center`}
                                style={{ height: '6vh', borderRadius: '10px', color: `${color}` }}
                            >
                                ARTISTAS
                            </Link>

                            <Link to='/formato'
                                className={`bg-${colorIsDarkOrLight} text-decoration-none fs-5 d-flex justify-content-center align-items-center`}
                                style={{ height: '6vh', borderRadius: '10px', color: `${color}` }}
                            >
                                FORMATOS
                            </Link>

                            <Link to='/prevenda'
                                className={`bg-${colorIsDarkOrLight} text-decoration-none fs-5 d-flex justify-content-center align-items-center`}
                                style={{ height: '6vh', borderRadius: '10px', color: `${color}` }}
                            >
                                PRÉ-VENDA
                            </Link>

                            <Link to='/lancamento'
                                className={`bg-${colorIsDarkOrLight} text-decoration-none fs-5 d-flex justify-content-center align-items-center`}
                                style={{ height: '6vh', borderRadius: '10px', color: `${color}` }}
                            >
                                LANÇAMENTOS
                            </Link>
                        </nav>
                    </Box>
                </Drawer>

                <Dropdown className='bg-transparent'>
                    <Dropdown.Toggle id="dropdown-basic" className={`bg-transparent shadow-none btn-link text-${colorIsWhiteOrBlack}`} style={{ color: 'var(colorIsWhiteOrBlack) !important' }}>
                        <IoPerson className={`bg-transparent text-${colorIsWhiteOrBlack} fs-5`} />
                    </Dropdown.Toggle>

                    {user.length === 0
                        ?
                        <Dropdown.Menu>
                            <Dropdown.Item style={{ color: 'var(--color)' }} onClick={() => navigate('/login')}>
                                ENTRAR
                            </Dropdown.Item>

                            <Dropdown.Item style={{ color: 'var(--color)' }} onClick={() => navigate('/cadastro')}>
                                CRIAR CONTA
                            </Dropdown.Item>
                        </Dropdown.Menu>
                        :
                        <Dropdown.Menu>
                            <Dropdown.Item
                                className='bg-transparent w-100 h-100'
                                style={{ color: 'var(--color)' }}
                                onClick={() => {
                                    localStorage.clear();
                                    SetUser(localStorage.getItem('user'));
                                    window.location.reload();
                                }}
                            >
                                SAIR
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    }

                </Dropdown>


            </div>


            <div id='LogoMobile' className='col d-flex justify-content-center align-items-center'>
                <Logo size={55} color={colorIsDarkOrLight} />
            </div>

            <div id='RightOptionMobile' className={`col d-flex justify-content-end align-items-center gap-2 text-${colorIsDarkOrLight}`}>
                <Search />


                <Tooltip
                    id='ROM-TooltipIconButttonCart'
                    title="Cart"
                    onClick={() => setIsDrawerCartOpen(true)}
                >
                    <button id='IconButttonCart' className={`bg-transparent text-${colorIsDarkOrLight}`}><BsFillBagFill className='fs-5' /></button>
                </Tooltip>

                <Cart
                    isDrawerCartOpen={isDrawerCartOpen} setIsDrawerCartOpen={setIsDrawerCartOpen}
                />
            </div>
        </div>
    )
}

export default Mobile