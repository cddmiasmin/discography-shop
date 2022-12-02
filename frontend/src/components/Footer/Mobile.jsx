import React, { useState, useContext } from 'react'

import './footer.css'

import Logo from '../Logo'

import { ColorContext } from '../../contexts/ColorContext';

import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';

import {
    BsFacebook, BsInstagram, BsTwitter, BsYoutube,
    BsFillTelephoneForwardFill
} from 'react-icons/bs'
import { MdOutlineMailOutline } from 'react-icons/md'
import { MdKeyboardArrowDown } from 'react-icons/md';

const Mobile = () => {
    const [expandedPanel, setExpandedPanel] = useState(false);

    const handleAccordionChange = (panel) => (event, isExpanded) => {
        
        setExpandedPanel(isExpanded ? panel : false);
    };

    const {
        color,
        colorIsDarkOrLight,
        colorIsWhiteOrBlack,
    } = useContext(ColorContext);

    const Accordion = withStyles({
        root: {
            boxShadow: 'none',
            borderRadius: '15px',
            width: '40vh',
            backgroundColor: `${colorIsWhiteOrBlack}`,
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
            backgroundColor: `${colorIsWhiteOrBlack}`,
            borderBottom: `2px solid ${color}`,
            marginBottom: -1,
            color: `${color}`,
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
            color: `${color}`,
            fontWeight: 'bolder',
            borderRadius: '5px',
            minHeight: 56,
            '&$expanded': {
                minHeight: 0,
            },
        }
    }))(MuiAccordionDetails);

    return (
        <footer
            className={`container-fluid w-100 text-${colorIsDarkOrLight} d-flex flex-column justify-content-star align-items-center gap-3`}
            style={{ paddingTop: '2vh' }}
        >
            <div className='d-flex flex-column justify-content-center align-items-center gap-2'>
                <div className='d-flex flex-row align-items-end gap-2'>
                    <Logo size={50} color={colorIsDarkOrLight} />
                    <h4>Cassandra</h4>
                </div>

                <p className='text-center'>Projetado e construído com todo o amor <br /> do mundo  pela equipe Cassandra com a ajuda <br />de nossos colaboradores.</p>

                <div className='d-flex grid gap-2'>
                    <a
                        className={`text-decoration-none text-${colorIsDarkOrLight}`}
                        style={{ width: '25px', height: '25px' }}
                        href="https://www.facebook.com">
                        <BsFacebook className='w-100 h-100 facebook' />
                    </a>

                    <a
                        className={`text-decoration-none text-${colorIsDarkOrLight} instagram`}
                        style={{ width: '25px', height: '25px' }}
                        href="https://www.instagram.com">
                        <BsInstagram className='w-100 h-100' />
                    </a>

                    <a
                        className={`text-decoration-none text-${colorIsDarkOrLight}`}
                        style={{ width: '25px', height: '25px' }}
                        href="https://twitter.com/home">
                        <BsTwitter className='w-100 h-100 twitter' />
                    </a>

                    <a
                        className={`text-decoration-none text-${colorIsDarkOrLight}`}
                        style={{ width: '25px', height: '25px' }}
                        href="https://www.youtube.com">
                        <BsYoutube className='w-100 h-100 youtube' />
                    </a>

                </div>
            </div>

            <Accordion expanded={expandedPanel === 'FooterAccordion1'} onChange={handleAccordionChange('FooterAccordion1')}>
                <AccordionSummary
                    expandIcon={<MdKeyboardArrowDown style={{ color: `${color}` }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <h5 style={{
                        fontFamily: [
                            'Bebas Neue',
                            'cursive',
                        ].join(',')
                    }}>ATENDIMENTO</h5>
                </AccordionSummary>
                <AccordionDetails >
                    <h6 className='m-0' style={{
                        fontFamily: [
                            'Bebas Neue',
                            'cursive',
                        ].join(',')
                    }}>
                        <div className='d-flex flex-row gap-2 align-items-center'>
                            <BsFillTelephoneForwardFill style={{ width: '15px', height: '15px' }} />
                            <a className={`text-decoration-none`} style={{ color: `${color}` }} href="">(XX) XXXX-XXXX</a>
                        </div>
                        <div className='d-flex flex-row gap-2 align-items-center'>
                            <BsFillTelephoneForwardFill style={{ width: '15px', height: '15px' }} />
                            <a className={`text-decoration-none`} style={{ color: `${color}` }} href="">XXXX XXX XXXX</a>
                        </div>
                        <div className='d-flex flex-row gap-2 align-items-center'>
                            <MdOutlineMailOutline style={{ width: '15px', height: '15px' }} />
                            <a className={`text-decoration-none`} style={{ color: `${color}` }} href="">contato@cassandra.com</a>
                        </div>
                        <p>De segunda à sexta das <br />9h às 17h (exceto feriados)</p>
                    </h6>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expandedPanel === 'FooterAccordion2'} onChange={handleAccordionChange('FooterAccordion2')}>
                <AccordionSummary
                    expandIcon={<MdKeyboardArrowDown style={{ color: `${color}` }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <h5 style={{
                        fontFamily: [
                            'Bebas Neue',
                            'cursive',
                        ].join(',')
                    }}>SUPORTE</h5>
                </AccordionSummary>
                <AccordionDetails >
                    <h6 className='m-0' style={{
                        fontFamily: [
                            'Bebas Neue',
                            'cursive',
                        ].join(',')
                    }}>
                        <div className='d-flex flex-column justify-content-star align-items-star  gap-1'>
                            <a className={`text-decoration-none`} style={{ color: `${color}` }} href="">Dúvidas frequentes</a>
                            <a className={`text-decoration-none`} style={{ color: `${color}` }} href="">Termos de uso</a>
                            <a className={`text-decoration-none`} style={{ color: `${color}` }} href="">Política e privacidade</a>
                            <a className={`text-decoration-none`} style={{ color: `${color}` }} href="">Direito de Arrependimento</a>
                            <a className={`text-decoration-none`} style={{ color: `${color}` }} href="">Trocas e Devoluções</a>
                            <a className={`text-decoration-none`} style={{ color: `${color}` }} href="">Seja um Revendedor</a>
                            <a className={`text-decoration-none`} style={{ color: `${color}` }} href="">Fale conosco</a>
                        </div>
                    </h6>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expandedPanel === 'FooterAccordion3'} onChange={handleAccordionChange('FooterAccordion3')}>
                <AccordionSummary
                    expandIcon={<MdKeyboardArrowDown style={{ color: `${color}` }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <h5 style={{
                        fontFamily: [
                            'Bebas Neue',
                            'cursive',
                        ].join(',')
                    }}>PEDIDOS</h5>
                </AccordionSummary>
                <AccordionDetails >
                    <h6 className='m-0' style={{
                        fontFamily: [
                            'Bebas Neue',
                            'cursive',
                        ].join(',')
                    }}>
                        <div className='d-flex flex-column justify-content-star align-items-star gap-1'>
                            <a className={`text-decoration-none`} style={{ color: `${color}` }} href="">Minha conta</a>
                            <a className={`text-decoration-none`} style={{ color: `${color}` }} href="">Meus pedidos</a>
                        </div>
                    </h6>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expandedPanel === 'LeftOptions1'} onChange={handleAccordionChange('LeftOptions1')}>
                <AccordionSummary
                    expandIcon={<MdKeyboardArrowDown style={{ color: `${color}` }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <h5 style={{
                        fontFamily: [
                            'Bebas Neue',
                            'cursive',
                        ].join(',')
                    }}>INSTITUCIONAL</h5>
                </AccordionSummary>
                <AccordionDetails >
                    <h6 className='m-0' style={{
                        fontFamily: [
                            'Bebas Neue',
                            'cursive',
                        ].join(',')
                    }}>
                        <a className={`text-decoration-none`} style={{ color: `${color}` }} href="">Sobre Cassandra</a>
                    </h6>
                </AccordionDetails>
            </Accordion>

            <div style={{ height: '6vh' }} className='d-flex justify-content-center align-items-center w-100'>
                <img style={{ height: '100%' }} src="\images\payment-card-flag.png" alt="" />
            </div>

            <p className='m-0'>Copyright ©2022 | Cassandra</p>
            <p className={`d-flex justify-content-center align-items-center gap-1 text-${colorIsDarkOrLight}`}>
                Desenvolvido por
                <a className={`text-${colorIsDarkOrLight}`} href="https://github.com/cddmiasmin">Iasmin Dias</a>
            </p>
        </footer>
    )
}

export default Mobile