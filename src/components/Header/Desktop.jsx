import React, { useState } from 'react'

import { Link } from 'react-router-dom'

import Logo from '../Logo'
import Cart from '../Cart'

import { Popover } from '@mui/material';
import { Tooltip } from '@mui/material';

import { HiSearch } from 'react-icons/hi';
import { IoPerson } from 'react-icons/io5';
import { RiSearch2Fill } from 'react-icons/ri'
import { BsFillBagFill } from 'react-icons/bs';


const Desktop = (props) => {

    const [anchorDesk, SetAnchorDesk] = useState(null);

    
    const openSeachButtonIcon = document.getElementById('open-search');
    const seachButtonIcon = document.getElementById('search');

    const handleClick = (event) => {
        openSeachButtonIcon.style.display = 'none'
        seachButtonIcon.style.display = 'flex'

        SetAnchorDesk((event.currentTarget))
    };

    const handleClose = () => {
        openSeachButtonIcon.style.display = 'flex'
        seachButtonIcon.style.display = 'none'
        SetAnchorDesk(null)
    }

    return (
        <div
            className={`flex-row container-fluid d-flex position-absolute top-0 start-0
            justify-content-center align-items-center text-${props.colorIsDarkOrLight}`}
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
                    <div>
                        <button type='button' id='open-search' 
                            onClick={handleClick} style={{display: 'flex'}}
                            className={`bg-transparent text-${props.colorIsDarkOrLight}`}><HiSearch className='fs-5 ' /></button>
                        <button type='submit' id='search' 
                            onClick={handleClick} style={{display: 'none'}}
                            className={`bg-transparent text-${props.colorIsDarkOrLight}`}><RiSearch2Fill className='fs-5 ' /></button>
                    </div>
                </Tooltip>

                <Tooltip title="Perfil">
                    <button className={`bg-transparent text-${props.colorIsDarkOrLight}`}><IoPerson className='fs-5 ' /></button>
                </Tooltip>

                <Popover
                    id='popover-profile-desktop'
                    open={Boolean(anchorDesk)}
                    anchorEl={anchorDesk}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'center',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'center',
                        horizontal: 'right',
                    }}
                >
                    <input type="text" name="search-desk" id="search-desk" pattern='[a-Z]{3,}' />
                </Popover>


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