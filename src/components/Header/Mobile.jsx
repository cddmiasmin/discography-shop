import React, {useState} from 'react'

import Logo from '../Logo'
import Cart from '../Cart'

import { Link } from 'react-router-dom'

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

const Mobile = (props) => {
    const [isDrawerMenuOpen, setIsDrawerMenuOpen] = useState(false);
    const [expandedPanel, setExpandedPanel] = useState(false);

    const handleAccordionChange = (panel) => (event, isExpanded) => {
        console.log({ event, isExpanded });
        setExpandedPanel(isExpanded ? panel : false);
    };

    var colorMaterialUIComponents = '';
    { props.colorIsDarkOrLight === 'light' ? colorMaterialUIComponents = 'white' : colorMaterialUIComponents = 'black' }

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