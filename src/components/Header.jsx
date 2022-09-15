import React from 'react'
import { useState } from 'react'

import { Link } from 'react-router-dom'

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar, Mousewheel } from "swiper";

import './../responsive/responsive.css'

import Logo from '../components/Logo'
import { dataArtist } from './../data/dataArtist'

import { Tooltip } from '@mui/material';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import { Drawer, Box, Typography } from '@mui/material';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';

import { BiMenu } from 'react-icons/bi';
import { FaTrash } from 'react-icons/fa';
import { HiSearch } from 'react-icons/hi';
import { IoPerson } from 'react-icons/io5';
import { BsFillBagFill } from 'react-icons/bs';
import { RiCloseCircleFill } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';

const Header = (props) => {
  const [isDrawerMenuOpen, setIsDrawerMenuOpen] = useState(false);
  const [isDrawerCartOpen, setIsDrawerCartOpen] = useState(false);
  const [expandedPanel, setExpandedPanel] = useState(false);

  const numAlbum = 2, coverAlbum = 1;

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    console.log({ event, isExpanded });
    setExpandedPanel(isExpanded ? panel : false);
  };

  var colorMaterialUIComponents = '';
  {props.colorIsDarkOrLight === 'light' ? colorMaterialUIComponents = 'white' : colorMaterialUIComponents = 'black' }

  const Accordion = withStyles({
    root: {
      boxShadow: 'none',
      borderRadius: '15px',
      backgroundColor: `${colorMaterialUIComponents}`,
      '&:last-child': {
        borderRadius: '15px',
      },
      '&:before': {
        display: 'none',
      },
      '&$expanded': {
        margin: 'auto',
      },
    },
    expanded: {},
  })(MuiAccordion);

  const AccordionSummary = withStyles({
    root: {
      backgroundColor: `${colorMaterialUIComponents}`,
      borderBottom: `2px solid ${props.color}`,
      marginBottom: -1,
      color: `${props.color}`,
      borderRadius: '10px',
      minHeight: '8vh',
      '&$expanded': {
        minHeight: '8vh',
      },
    },
    content: {
      '&$expanded': {
        margin: '0',
      },
    },
    expanded: {},
  })(MuiAccordionSummary);


  const AccordionDetails = withStyles((theme) => ({
    root: {
      marginBottom: -1,
      color: `${props.color}`,
      fontWeight: 'bolder',
      borderRadius: '5px',
      minHeight: 56,
      '&$expanded': {
        minHeight: 56,
      },
    }
  }))(MuiAccordionDetails);

  return (
    <header
      className={`flex-row container-fluid d-flex position-absolute top-0 start-0
                  justify-content-center align-items-center text-${props.colorIsDarkOrLight}`}
      style={{ height: '10%', width: '100%' }}>

      <div
        id='header-desktop'
        className={`flex-row container-fluid d-flex position-absolute top-0 start-0
                  justify-content-center align-items-center text-${props.colorIsDarkOrLight}`}
      >

        <div id='LinksHeader' className='col d-flex justify-content-star align-items-center ms-4 gap-4'>
          <Link to='/artista' className={`text-decoration-none text-${props.colorIsDarkOrLight}`}>ARTISTAS</Link>
          <Link to='/formato' className={`text-decoration-none text-${props.colorIsDarkOrLight}`}>FORMATOS</Link>
          <Link to='/prevenda' className={`text-decoration-none text-${props.colorIsDarkOrLight}`}>PRÉ-VENDA</Link>
          <Link to='/prevenda' className={`text-decoration-none text-${props.colorIsDarkOrLight}`}>LANÇAMENTOS</Link>
        </div>

        <div id='logo' className='col d-flex justify-content-center align-items-center'>
          <Logo size={55} color={props.colorIsDarkOrLight} />
        </div>

        <div id='IconOption' className='col d-flex justify-content-end align-items-center me-4 gap-4'>
          <Tooltip title="Buscar">
            <button className={`bg-transparent text-${props.colorIsDarkOrLight}`}><HiSearch className='fs-5 ' /></button>
          </Tooltip>
          <Tooltip title="Perfil">
            <button className={`bg-transparent text-${props.colorIsDarkOrLight}`}><IoPerson className='fs-5 ' /></button>
          </Tooltip>
          <Tooltip title="Carrinho">
            <button className={`bg-transparent text-${props.colorIsDarkOrLight}`}><BsFillBagFill className='fs-5 ' /></button>
          </Tooltip>
        </div>
      </div>

      <div
        id='header-mobile'
        className={`flex-row container-fluid d-none justify-content-center align-items-center text-${props.colorIsDarkOrLight}`}
      >
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
              <div className='w-100 d-flex flex-column justify-content-star align-items-star gap-2'>
                <Tooltip
                  title="Fechar menu"
                  onClick={() => setIsDrawerMenuOpen(false)}
                >
                  <button className={`bg-transparent text-${props.colorIsDarkOrLight}`}><RiCloseCircleFill className='fs-5 ' /></button>
                </Tooltip>

                <Accordion expanded={expandedPanel === 'LeftOptions1'} onChange={handleAccordionChange('LeftOptions1')}>
                  <AccordionSummary
                    expandIcon={<MdKeyboardArrowDown style={{ color: `${props.color}` }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <h5 style={{
                      fontFamily: [
                        'Bebas Neue',
                        'cursive',
                      ].join(',')
                    }}>ARTISTAS</h5>
                  </AccordionSummary>
                  <AccordionDetails >
                    <h6 style={{
                      fontFamily: [
                        'Bebas Neue',
                        'cursive',
                      ].join(',')
                    }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                      malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </h6>
                  </AccordionDetails>
                </Accordion>

                <Accordion expanded={expandedPanel === 'LeftOptions2'} onChange={handleAccordionChange('LeftOptions2')}>
                  <AccordionSummary
                    expandIcon={<MdKeyboardArrowDown style={{ color: `${props.color}` }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <h5 style={{
                      fontFamily: [
                        'Bebas Neue',
                        'cursive',
                      ].join(',')
                    }}>FORMATOS</h5>
                  </AccordionSummary>
                  <AccordionDetails >
                    <h6 style={{
                      fontFamily: [
                        'Bebas Neue',
                        'cursive',
                      ].join(',')
                    }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                      malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </h6>
                  </AccordionDetails>
                </Accordion>

                <button
                  className={`bg-${colorMaterialUIComponents}`}
                  style={{ height: '8vh', borderRadius: '10px', color: `${props.color}`, }}
                >
                  <h5 style={{
                    fontFamily: [
                      'Bebas Neue',
                      'cursive',
                    ].join(','), marginLeft: '-20.5vh'
                  }}
                  >PRÉ-VENDA
                  </h5>
                </button>

                <button
                  className={`bg-${colorMaterialUIComponents}`}
                  style={{ height: '8vh', borderRadius: '10px', color: `${props.color}`, }}
                >
                  <h5 style={{
                    fontFamily: [
                      'Bebas Neue',
                      'cursive',
                    ].join(','), marginLeft: '-17.3vh'
                  }}
                  >LANÇAMENTOS
                  </h5>
                </button>
              </div>
            </Box>
          </Drawer>

          <Tooltip
            id='IconButtonMyProfileMobile'
            title="Menu"
            onClick={() => setIsDrawerMenuOpen(true)}
          >
            <button className={`bg-transparent text-${props.colorIsDarkOrLight}`}><IoPerson className='fs-5' /></button>
          </Tooltip>
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
            onClick={() => setIsDrawerCartOpen(true)}
          >
            <button id='IconButttonCart' className={`bg-transparent text-${props.colorIsDarkOrLight}`}><BsFillBagFill className='fs-5' /></button>
          </Tooltip>


          <Drawer
            id='ROM-DrawerCart'
            anchor='right'
            open={isDrawerCartOpen}
            onClose={() => { setIsDrawerCartOpen(false) }}>
            <Box
              id='ROM-BoxCart'
              className='d-flex flex-column'
              p={1.5} width='40vh' height='100%' role='presentation' textAlign='center'
              style={{ backgroundColor: `${props.color}`, color: `${props.colorIsDarkOrLight}` }}>

              <div id='ROM-BoxCart-Div' className={`w-100 d-flex flex-column justify-content-center align-items-center gap-2 text-${props.colorIsDarkOrLight}`}>
                <Tooltip
                  id="ROM-BoxCart-TooltipIconButtonClose"
                  title="Fechar carrinho"
                  onClick={() => setIsDrawerCartOpen(false)}
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
                    style={{minHeight: 'auto', maxHeight: '65vh' }}
                  >
                    <SwiperSlide style={{ height: '34vh'}}>
                      <div
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
                            src={dataArtist[0].album[numAlbum].cover[coverAlbum].cover}
                            alt={`Album ${'b'}`}
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

                    <SwiperSlide style={{ height: '34vh'}}>
                      <div
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
                            src={dataArtist[0].album[numAlbum].cover[coverAlbum].cover}
                            alt={`Album ${'b'}`}
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

                    <SwiperSlide style={{ height: '34vh'}}>
                      <div
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
                            src={dataArtist[0].album[numAlbum].cover[coverAlbum].cover}
                            alt={`Album ${'b'}`}
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

                    <SwiperSlide style={{ height: '34vh'}}>
                      <div
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
                            src={dataArtist[0].album[numAlbum].cover[coverAlbum].cover}
                            alt={`Album ${'b'}`}
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

                    <SwiperSlide style={{ height: '34vh'}}>
                      <div
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
                            src={dataArtist[0].album[numAlbum].cover[coverAlbum].cover}
                            alt={`Album ${'b'}`}
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

                    <SwiperSlide style={{ height: '34vh'}}>
                      <div
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
                            src={dataArtist[0].album[numAlbum].cover[coverAlbum].cover}
                            alt={`Album ${'b'}`}
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
      </div>
    </header>
  )
}

export default Header