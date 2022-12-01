import React, { useRef, useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { Alert, Snackbar, Tooltip } from '@mui/material';
import { HiSearch } from 'react-icons/hi';

import './search.css'

const Search = () => {

    const navigateDesk = useNavigate();

    const [searchOpen, SetSearchOpen] = useState(0);

    const elementInputRef = useRef();
    const elementFormRef = useRef();

    useEffect(() => {
        SetSearchOpen(false);
    }, []);

    useEffect(() => {
        if (!searchOpen) {
            if (elementInputRef.current.value === '') {
                elementInputRef.current.style.width = '0';
                elementFormRef.current.style.background = 'none';
                elementFormRef.current.style.border = 'none';
                elementFormRef.current.style.padding = '0vh'
            } else {
                if (elementInputRef.current.value.length < 1)
                    SetOpenSnackbar(true);
                else {
                    elementInputRef.current.style.width = '0';
                    elementFormRef.current.style.background = 'none';
                    elementFormRef.current.style.border = 'none';
                    elementFormRef.current.style.padding = '0vh';
                    navigateDesk(`/busca/${elementInputRef.current.value}`);
                    elementInputRef.current.value = '';
                } 
            }
        }
        else {
            elementInputRef.current.style.width = '25vh';
            elementFormRef.current.style.background = 'var(--color)';
            elementFormRef.current.style.border = '1px solid var(--colorIsWhiteOrBlack)';
            elementFormRef.current.style.padding = '0vh 3vh 0vh 3vh';
        }
    }, [searchOpen]);

    return (
        <Tooltip title="Buscar">
            <form
                className='search-box' ref={elementFormRef}
                onSubmit={(e) => {
                    e.preventDefault();
                    searchOpen ? SetSearchOpen(false) : SetSearchOpen(true);
                }}
            >
                <input ref={elementInputRef} className='search-txt' type="text" placeholder="O que você procura?" />
                <button type='submit' id='button-search-desk'
                    className={`bg-transparent`} style={{ color: 'var(--colorIsWhiteOrBlack)' }}>
                    <HiSearch className='fs-5' />
                </button>
            </form>
        </Tooltip>
    )
}

export default Search