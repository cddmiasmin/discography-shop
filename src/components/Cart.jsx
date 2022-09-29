import React from 'react'

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar, Mousewheel } from "swiper";

import { FaTrash } from 'react-icons/fa';
import { RiCloseCircleFill } from 'react-icons/ri';

import { dataArtist } from './../data/dataArtist'

import { Drawer, Box, Tooltip } from '@mui/material';

const Cart = (props) => {
    const numAlbum = 2, coverAlbum = 1;
    return (
        <div>
            <Drawer
                id='ROM-DrawerCart'
                anchor='right'
                open={props.isDrawerCartOpen}
                onClose={() => { props.setIsDrawerCartOpen(false) }}>
                <Box
                    id='ROM-BoxCart'
                    className='d-flex flex-column'
                    p={1.5} width='40vh' height='100%' role='presentation' textAlign='center'
                    style={{ backgroundColor: `${props.color}`, color: `${props.colorIsDarkOrLight}` }}>

                    <div id='ROM-BoxCart-Div' className={`w-100 d-flex flex-column justify-content-center align-items-center gap-2 text-${props.colorIsDarkOrLight}`}>
                        <Tooltip
                            id="ROM-BoxCart-TooltipIconButtonClose"
                            title="Fechar carrinho"
                            onClick={() => props.setIsDrawerCartOpen(false)}
                        >
                            <button id='ROM-BoxCart-IconButtonClose' className={`bg-transparent text-${props.colorIsDarkOrLight}`}><RiCloseCircleFill className='fs-5 ' /></button>
                        </Tooltip>

                        <h1 id='title-cart' className="m-0">CARRINHO</h1>

                        <div
                            id='container-shopping-cart'
                            className='bg-secndary w-100 h-100 d-flex flex-column justify-content-star align-items-center gap-2'
                        >
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
                                {dataArtist[0].album[numAlbum].cover.map ((cover, key) => (
                                    <SwiperSlide style={{ height: '34vh' }} key={key}>
                                        <div
                                            key={key}
                                            id='CartItem'
                                            className={`d-flex rounded flex-column justify-content-center align-items-center w-100 p-0 gap-2 bg-${props.colorIsDarkOrLight}`}
                                            style={{ height: '33vh', width: '100%' }}
                                        >
                                            <div
                                                id='CartItemCheckboxImgTrash'
                                                className='d-flex d-row justify-content-center align-items-center gap-4 '
                                            >
                                                <Tooltip
                                                    id="TooltipIconButtonTrash"
                                                    title="Adicionar item"
                                                >
                                                    <input
                                                        className={`form-check-input m-0 p-0`}
                                                        style={{ height: '2.5vh', width: '2.5vh', backgroundColor: `${props.color}`, }}
                                                        type="checkbox"
                                                        id="CheckboxCardItem"
                                                        value="1"
                                                    />
                                                </Tooltip>

                                                <img
                                                    id='ItemImgAlbum'
                                                    className=''
                                                    style={{ height: '12vh', width: '12vh', border: `1px solid ${props.color}` }}
                                                    src={cover.cover}
                                                    alt={`Album ${cover.name}`}
                                                />

                                                <Tooltip
                                                    id="TooltipIconButtonTrash"
                                                    title="Remover item"
                                                    className=' pe-1 p-0'
                                                >
                                                    <button id='IconButtonTrash' className='bg-transparent' style={{ color: `${props.color}` }}>
                                                        <FaTrash />
                                                    </button>
                                                </Tooltip>
                                            </div>

                                            <div
                                                id='DetailsItem'
                                                className="p-0 d-flex flex-column justify-content-center align-items-center gap-1"
                                                style={{ color: `${props.color}` }}
                                            >
                                                <h6 className='m-0'>{dataArtist[0].album[numAlbum].name}</h6>

                                                <div
                                                    id='ItemFormatAndPrice'
                                                    className='d-flex flex-row justify-content-center align-items-center gap-1'
                                                    style={{ color: `${props.color}` }}
                                                >
                                                    <h6 className='m-0'>{`VINIL`}</h6>
                                                    <h6 className='m-0'> | </h6>
                                                    <h6 className='m-0'>{`R$44,90`}</h6>
                                                </div>

                                                <p className='p-0 m-0'>CAPA ALTERNATIVA</p>
                                            </div>

                                            <div
                                                id='container-amount'
                                                className='rounded d-flex flex-row justify-content-center align-items-center gap-2'
                                                style={{ height: '4vh', width: '12vh' }}
                                            >
                                                <button
                                                    id='ButtonAmountLess'
                                                    className='bg-transparent rounded-circle d-flex justify-content-center align-items-center'
                                                    style={{ height: '4vh', width: '3vh', color: `${props.color}` }}
                                                >
                                                    -
                                                </button>
                                                <h6 id='AmountNumber' className='m-0' style={{ color: `${props.color}` }}>{`1`}</h6>
                                                <button
                                                    id='ButtonAmountMore'
                                                    className='bg-transparent rounded-circle d-flex justify-content-center align-items-center'
                                                    style={{ height: '4vh', width: '3vh', color: `${props.color}` }}
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
                                style={{ color: `${props.colorIsDarkOrLight}`, paddingBottom: '2vh', paddingTop: '2vh', width: '38vh' }}
                            >
                                <div id='line-division' className={`bg-${props.colorIsDarkOrLight} m-1 rounded `} style={{ height: '0.5vh', width: '95%' }} />
                                <p className='m-0 p-0'>{`${'0'} ITEMS SELECIONADOS`}</p>
                                <div id='container-value' className='d-flex w-100 justify-content-between align-items-center'>
                                    <h4 className='ms-2 m-0'>SUBTOTAL:</h4>
                                    <h4 className='me-2 m-0'>{`R$ 200,87`}</h4>
                                </div>
                                <button
                                    id='finalize-purchase'
                                    className={`bg-${props.colorIsDarkOrLight} rounded w-100 fs-5`}
                                    style={{ color: `${props.color}`, height: '6vh' }}
                                >
                                    FINALIZAR COMPRA
                                </button>
                            </div>
                        </div>
                    </div>

                </Box>
            </Drawer>
        </div>
    )
}

export default Cart