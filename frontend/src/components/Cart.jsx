import React, { useContext, useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar, Mousewheel } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";

import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

import { RiCloseCircleFill } from 'react-icons/ri';

import { UserContext } from './../contexts/UserContext'
import { ColorContext } from './../contexts/ColorContext'
import { useGoToProduct } from './../functions/useGoToProduct'

import { Drawer, Box, Tooltip } from '@mui/material';
import { BsCart4 } from 'react-icons/bs';


const Cart = ({ isDrawerCartOpen, setIsDrawerCartOpen }) => {

    const {
        user,
        items,
        quantityOfItems,
        totalValueCart,
        alterCartItem,
        isSnackbarOpen,
        deleteCartItem,
        SetIsSnackbarOpen,
        severity,
        message,
    } = useContext(UserContext);

    const {
        color,
        colorIsDarkOrLight,
        colorIsWhiteOrBlack
    } = useContext(ColorContext);

    const {
        GoToProduct
    } = useGoToProduct();

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') return;

        SetIsSnackbarOpen(false);
    };

    return (
        <div>
            <Drawer
                id='ROM-DrawerCart'
                anchor='right'
                open={isDrawerCartOpen}
                onClose={() => { setIsDrawerCartOpen(false) }}>
                <Box
                    id='ROM-BoxCart'
                    className='d-flex flex-column'
                    p={1.5} width='40vh' height='100%' role='presentation' textAlign='center'
                    style={{ backgroundColor: 'var(--color)', color: 'var(--colorIsWhiteOrBlack)' }}>

                    <div id='ROM-BoxCart-Div' className={`w-100 d-flex flex-column justify-content-center align-items-center gap-2 text-${colorIsDarkOrLight}`}>
                        <Tooltip
                            id="ROM-BoxCart-TooltipIconButtonClose"
                            title="Fechar carrinho"
                            onClick={() => setIsDrawerCartOpen(false)}
                        >
                            <button id='ROM-BoxCart-IconButtonClose' className={`bg-transparent text-${colorIsDarkOrLight}`}><RiCloseCircleFill className='fs-5 ' /></button>
                        </Tooltip>

                        <h1 id='title-cart' className="m-0">CARRINHO</h1>

                        <div
                            id='container-shopping-cart'
                            className='bg-secndary w-100 h-100 d-flex flex-column justify-content-star align-items-center gap-2'
                        >
                            {
                                user.length !== 0 && items[0] === '1' ?

                                    <div
                                        className='d-flex position-absolute flex-column w-100 h-75 justify-content-center align-items-center'
                                    >
                                        <img
                                            className='rounded-circle'
                                            style={{ width: '30%', height: '15%', border: '1px solid var(--colorIsWhiteOrBlack)' }}
                                            src="https://media3.giphy.com/media/4T7zBzdeNEtjThYDWn/giphy.gif?cid=ecf05e476frjpui8wf6aryk0wlql2n9cskp7sfcxze1creqt&rid=giphy.gif&ct=g"
                                            alt="Loading"
                                        />
                                        <h6 className='m-2'>Carregando...</h6>
                                    </div>
                                    :

                                    user.length !== 0
                                        ?

                                        items.length !== 0 ?
                                            <>
                                                <Swiper
                                                    direction={"vertical"}
                                                    slidesPerView={"auto"}
                                                    freeMode={true}
                                                    scrollbar={true}
                                                    mousewheel={true}
                                                    modules={[FreeMode, Scrollbar, Mousewheel]}
                                                    id='SwiperListCartItem'
                                                    className="d-flex justify-content-center align-items-center w-100"
                                                    style={{ minHeight: 'auto', maxHeight: '60vh' }}
                                                >
                                                    {items.map((item, key) => (
                                                        <SwiperSlide style={{ height: '37vh' }} key={item.cartCode}>
                                                            <div
                                                                key={item.cartCode}
                                                                id='CartItem'
                                                                className={`d-flex rounded flex-column justify-content-center align-items-center w-100 p-0 gap-2 bg-${colorIsDarkOrLight}`}
                                                                style={{ height: '36vh', width: '100%' }}
                                                            >
                                                                <div
                                                                    id='CartItemCheckboxImgTrash'
                                                                    className='d-flex d-row justify-content-center align-items-center gap-4 '
                                                                >
                                                                    <img
                                                                        onClick={() => GoToProduct(item.albumSlug, item.artistSlug)}
                                                                        id='ItemImgAlbum'
                                                                        className='rounded'
                                                                        style={{ height: '12vh', width: '12vh', border: `1px solid ${color}`, cursor: 'pointer' }}
                                                                        src={item.versionCover}
                                                                        alt={`Capa do album ${item.albumName}`}
                                                                    />
                                                                </div>

                                                                <div
                                                                    id='DetailsItem'
                                                                    className="p-0 d-flex flex-column justify-content-center align-items-center gap-1"
                                                                    style={{ color: `${color}` }}
                                                                >
                                                                    <h6 className='m-0'>{item.albumName}</h6>

                                                                    <div
                                                                        id='ItemFormatAndPrice'
                                                                        className='d-flex flex-row justify-content-center align-items-center gap-1'
                                                                        style={{ color: `${color}` }}
                                                                    >
                                                                        <h6 className='m-0'>{item.format}</h6>
                                                                        <h6 className='m-0'> | </h6>
                                                                        <h6 className='m-0'>{item.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</h6>
                                                                    </div>

                                                                    <p className='p-0 m-0'>{item.versionDescription}</p>
                                                                    <h6 className='m-0'> SUBTOTAL: {item.cartTotalValue.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</h6>
                                                                </div>

                                                                <div
                                                                    id='container-amount'
                                                                    className='rounded d-flex  flex-row justify-content-center align-items-center gap-2'
                                                                    style={{ height: '4vh', width: '12vh' }}
                                                                >
                                                                    <button
                                                                        id='ButtonAmountLess'
                                                                        className='bg-transparent rounded-circle d-flex justify-content-center align-items-center'
                                                                        style={{ height: '4vh', width: '3vh', color: `${color}` }}
                                                                        onClick={() => {
                                                                            if ((item.cartAmount - 1) == 0) deleteCartItem(item.cartCode);
                                                                            else alterCartItem(item.cartCode, item.cartAmount - 1, item.price, 'cart');
                                                                        }}
                                                                    >
                                                                        -
                                                                    </button>
                                                                    <h6 id='AmountNumber' className='m-0' style={{ color: `${color}` }}>{item.cartAmount}</h6>
                                                                    <button
                                                                        id='ButtonAmountMore'
                                                                        className='bg-transparent rounded-circle d-flex justify-content-center align-items-center'
                                                                        style={{ height: '4vh', width: '3vh', color: `${color}` }}
                                                                        onClick={() => alterCartItem(item.cartCode, item.cartAmount + 1, item.price, 'cart')}
                                                                    >
                                                                        +
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </SwiperSlide>
                                                    ))}

                                                </Swiper>

                                                <div
                                                    id='container-info-buy'
                                                    className='d-flex z-index-2 d-block position-fixed bottom-0 flex-column justify-content-center align-items-center gap-2'
                                                    style={{ color: `${colorIsDarkOrLight}`, paddingBottom: '2vh', paddingTop: '2vh', width: '38vh' }}
                                                >
                                                    <div id='line-division' className={`bg-${colorIsDarkOrLight} m-1 rounded `} style={{ height: '0.5vh', width: '95%' }} />
                                                    <p className='m-0 p-0'>
                                                        {quantityOfItems}
                                                        {quantityOfItems === 1 ? ' ITEM' : ' ITEMS'}
                                                    </p>
                                                    <div id='container-value' className='d-flex w-100 justify-content-between align-items-center'>
                                                        <h4 className='ms-2 m-0'>TOTAL DO CARRINHO:</h4>
                                                        <h4 className='me-2 m-0'>{totalValueCart.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</h4>
                                                    </div>
                                                    <button
                                                        id='finalize-purchase'
                                                        className={`bg-${colorIsDarkOrLight} rounded w-100 fs-5`}
                                                        style={{ color: `${color}`, height: '6vh' }}
                                                    >
                                                        FINALIZAR COMPRA
                                                    </button>
                                                </div>
                                            </>

                                            :
                                            <div
                                                className="d-flex flex-column justify-content-center align-items-center w-100 h-100 rounded p-3 gap-3"
                                                style={{ backgroundColor: `${colorIsWhiteOrBlack}`, color: `${color}` }}
                                            >
                                                <BsCart4 className='fs-3' />
                                                <h4 className=''>
                                                    Seu carrinho está vazio.
                                                </h4>
                                            </div>
                                        :
                                        <div
                                            className="d-flex flex-column justify-content-center align-items-center w-100 h-100 rounded"
                                            style={{ backgroundColor: `${colorIsWhiteOrBlack}`, color: `${color}` }}
                                        >
                                            <h4 className='m-3'>
                                                Olá! Para utilizar o carrinho, acesse a sua conta.
                                            </h4>

                                            <div className="d-flex flex-column justify-content-center align-items-center gap-2 w-100 m-2">

                                                <Link to='/login'
                                                    className={`text-decoration-none rounded d-flex justify-content-center align-items-center`}
                                                    style={{
                                                        backgroundColor: `${color}`, color: `${colorIsWhiteOrBlack}`,
                                                        width: '25vh', height: '4.4vh'
                                                    }}
                                                >
                                                    ENTRAR
                                                </Link>
                                                <Link to='/cadastro'
                                                    className={`text-decoration-none`}
                                                    style={{ color: `${color}` }}
                                                >
                                                    CRIAR CONTA
                                                </Link>
                                            </div>
                                        </div>


                            }
                        </div>
                    </div>

                    <Snackbar
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                        open={isSnackbarOpen}
                        autoHideDuration={6000}
                        onClose={handleCloseSnackbar}
                    >
                        <Alert onClose={handleCloseSnackbar} severity={severity} sx={{ width: '100%' }}>
                            {message}
                        </Alert>
                    </Snackbar>
                </Box>
            </Drawer>
        </div>
    )
}

export default Cart