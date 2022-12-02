import React, { useContext } from 'react'

import './header.css'

import { Link, useNavigate } from 'react-router-dom'

import Logo from '../Logo'
import Cart from '../Cart'
import Search from '../Search/Search'

import Dropdown from 'react-bootstrap/Dropdown';

import { Tooltip } from '@mui/material';

import { IoPerson } from 'react-icons/io5';
import { BsFillBagFill } from 'react-icons/bs';
import { ColorContext } from '../../contexts/ColorContext'
import { UserContext } from '../../contexts/UserContext'


const Desktop = ({ isDrawerCartOpen, setIsDrawerCartOpen }) => {

    const navigate = useNavigate();

    const { user, SetUser } = useContext(UserContext);

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
        </div >
    )
}

export default Desktop