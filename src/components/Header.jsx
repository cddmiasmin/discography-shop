import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import Logo from '../components/Logo'

import { Accordion } from '@mui/material';
import { Tooltip } from '@mui/material';
import { AccordionSummary } from '@mui/material';
import { AccordionDetails } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, Box, Typography } from '@mui/material'
import { withStyles } from '@material-ui/core/styles';


import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import MuiTypography from '@material-ui/core/Typography';

import { BiMenu } from 'react-icons/bi'
import { HiSearch } from 'react-icons/hi'
import { IoPerson } from 'react-icons/io5'
import { BsFillBagFill } from 'react-icons/bs';
import { MdKeyboardArrowDown } from 'react-icons/md'
import { RiCloseCircleFill } from 'react-icons/ri';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

const Header = (props) => {
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
    <header
      className={`flex-row container-fluid d-flex position-absolute top-0 start-0
                  justify-content-center align-items-center text-${props.colorIsDarkOrLight}`}
      style={{ height: '10%', width: '100%' }}>

      <div className='col d-flex justify-content-star align-items-center ms-4 gap-4'>
        <Link to='/artista' className={`text-decoration-none text-${props.colorIsDarkOrLight}`}>ARTISTAS</Link>
        <Link to='/formato' className={`text-decoration-none text-${props.colorIsDarkOrLight}`}>FORMATOS</Link>
        <Link to='/prevenda' className={`text-decoration-none text-${props.colorIsDarkOrLight}`}>PRÉ-VENDA</Link>
      </div>

      <div id='logo' className='col d-flex justify-content-center align-items-center'>
        <Logo size={55} color={props.colorIsDarkOrLight} />
      </div>

      <div id='IconOption' className='col d-flex justify-content-end align-items-center me-4 gap-4'>
        <Tooltip
          title="Menu"
          onClick={() => setIsDrawerMenuOpen(true)}
        >
          <button className={`bg-transparent text-${props.colorIsDarkOrLight}`}><BiMenu className='fs-5 ' /></button>
        </Tooltip>

        <Drawer
          anchor='right'
          open={isDrawerMenuOpen}
          onClose={() => {setIsDrawerMenuOpen(false)}}>
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

              <button
                className={`bg-${colorMaterialUIComponents}`}
                style={{ height: '8vh', borderRadius: '10px', color: `${props.color}`, }}
              >
                <h5 style={{
                  fontFamily: [
                    'Bebas Neue',
                    'cursive',
                  ].join(','), marginLeft: '-20.2vh'}}
                >MEU PERFIL
                </h5>
              </button>

              <Accordion expanded={expandedPanel === 'panel1'} onChange={handleAccordionChange('panel1')}>
                <AccordionSummary
                  expandIcon={<MdKeyboardArrowDown style={{color: `${props.color}`}} />}
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

              <Accordion expanded={expandedPanel === 'panel2'} onChange={handleAccordionChange('panel2')}>
                <AccordionSummary
                  expandIcon={<MdKeyboardArrowDown style={{color: `${props.color}`}}/>}
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

              <Accordion expanded={expandedPanel === 'panel3'} onChange={handleAccordionChange('panel3')}>
                <AccordionSummary
                  expandIcon={<MdKeyboardArrowDown style={{color: `${props.color}`}}/>}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <h5 style={{
                    fontFamily: [
                      'Bebas Neue',
                      'cursive',
                    ].join(',')
                  }}>PRÉ-VENDA</h5>
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
            </div>
          </Box>
        </Drawer>
      </div>
    </header>
  )
}

export default Header