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

import { BiMenu } from 'react-icons/bi'
import { HiSearch } from 'react-icons/hi'
import { IoPerson } from 'react-icons/io5'
import { BsFillBagFill } from 'react-icons/bs';
import { MdKeyboardArrowDown } from 'react-icons/md'
import { RiCloseCircleFill } from 'react-icons/ri';

import { ThemeProvider, createTheme } from '@material-ui/core/styles';

const Header = (props) => {
  const [isDrawerMenuOpen, setIsDrawerMenuOpen] = useState(false);
  

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
          onClose={() => setIsDrawerMenuOpen(false)}>
          <Box
            className='d-flex flex-column'
            p={2} width='40vh' height='100%' role='presentation' textAlign='center'
            style={{ backgroundColor: `${props.color}` }}>
            <div className='w-100 d-flex flex-column justify-content-star align-items-star gap-2'>
              <Tooltip
                title="Fechar menu"
                onClick={() => setIsDrawerMenuOpen(true)}
              >
                <button className={`bg-transparent text-${props.colorIsDarkOrLight}`}><RiCloseCircleFill className='fs-5 ' /></button>
              </Tooltip>

                <Accordion>
                  <AccordionSummary
                    expandIcon={<MdKeyboardArrowDown />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  
                  >
                    <Typography >ARTISTAS</Typography>
                  </AccordionSummary>
                  <AccordionDetails >
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                      malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
             

                <Accordion>
                  <AccordionSummary
                    expandIcon={<MdKeyboardArrowDown />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>FORMATO</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                      malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary
                    expandIcon={<MdKeyboardArrowDown />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>PRÉ-VENDA</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                      malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
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