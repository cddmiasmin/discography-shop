import React, { useRef, useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { Alert, Snackbar, Tooltip } from '@mui/material';
import { HiSearch } from 'react-icons/hi';

import './search.css'

const Search = () => {

    const navigateDesk = useNavigate();

    const [searchOpen, SetSearchOpen] = useState(0);

    const elementInputRef = useRef();
    const elementDivRef = useRef();

    useEffect(() => {
        SetSearchOpen(false);
    }, []);

    useEffect(() => {
        if (!searchOpen) {
            if (elementInputRef.current.value === '') {
                elementInputRef.current.style.width = '0';
                elementDivRef.current.style.background = 'none';
                elementDivRef.current.style.border = 'none';
                elementDivRef.current.style.padding = '0vh'
            } else {
                if (elementInputRef.current.value.length < 1) 
                    SetOpenSnackbar(true);
                else navigateDesk('/busca');
            }
        }
        else {
            elementInputRef.current.style.width = '25vh';
            elementDivRef.current.style.background = 'var(--color)';
            elementDivRef.current.style.border = '1px solid var(--colorIsWhiteOrBlack)';
            elementDivRef.current.style.padding = '0vh 3vh 0vh 3vh';
        }
    }, [searchOpen]);

    return (
        <Tooltip title="Buscar">
            <div className='search-box' ref={elementDivRef}>
                <input ref={elementInputRef} className='search-txt' type="text" placeholder="O que você procura?"  />
                <button type='button' id='button-search-desk' onClick={() => {
                    searchOpen ? SetSearchOpen(false) : SetSearchOpen(true);
                }}
                    className={`bg-transparent`} style={{color: 'var(--colorIsWhiteOrBlack)'}}>
                    <HiSearch className='fs-5' />
                </button>
            </div>
        </Tooltip>
    )
}

export default Search