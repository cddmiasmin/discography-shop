import React from 'react'
import { useState } from 'react'

import { Link } from 'react-router-dom'

import './../../responsive/responsive.css'


import Cart from '../Cart'

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
import Desktop from './Desktop'
import Mobile from './Mobile'

const Header = (props) => {
  const [isDrawerCartOpen, setIsDrawerCartOpen] = useState(false);
  const [isPopoverProfileOpen, setIsPopoverProfileOpen] = useState(false);

  return (
    <header
      className={`flex-row container-fluid d-flex position-absolute top-0 start-0 m-0 p-0
                  justify-content-center align-items-center text-${props.colorIsDarkOrLight}`}
      style={{ height: '10%', width: '100%' }}>

      <div id='header-mobile' className='d-none w-100'>
        <Mobile
          colorIsDarkOrLight={props.colorIsDarkOrLight} color={props.color} colorIsWhiteOrBlack={props.colorIsWhiteOrBlack}
          isDrawerCartOpen={isDrawerCartOpen} setIsDrawerCartOpen={setIsDrawerCartOpen}
          isPopoverProfileOpen={isPopoverProfileOpen} setIsPopoverProfileOpen={setIsPopoverProfileOpen}
        />
      </div>

      <div id='header-desktop' className='d-flex w-100'>
        <Desktop
          colorIsDarkOrLight={props.colorIsDarkOrLight} color={props.color} colorIsWhiteOrBlack={props.colorIsWhiteOrBlack}
          isDrawerCartOpen={isDrawerCartOpen} setIsDrawerCartOpen={setIsDrawerCartOpen}
          isPopoverProfileOpen={isPopoverProfileOpen} setIsPopoverProfileOpen={setIsPopoverProfileOpen}
        />
      </div>

    </header>
  )
}

export default Header