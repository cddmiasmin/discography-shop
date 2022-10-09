import React from 'react'

import Mobile from './Mobile'
import Desktop from './Desktop'

import './../../responsive/responsive.css'

const Footer = (props) => {
    return (
        <footer
            className={`container-fluid w-100`}
            style={{ backgroundColor: `${props.color}` }}
        >
            <div id='footer-desktop' className='d-flex w-100'>
                <Desktop colorIsDarkOrLight={props.colorIsDarkOrLight} color={props.color} colorIsWhiteOrBlack={props.colorIsWhiteOrBlack} />
            </div>

            <div id='footer-mobile' className='d-none w-100'>
                <Mobile colorIsDarkOrLight={props.colorIsDarkOrLight} color={props.color} colorIsWhiteOrBlack={props.colorIsWhiteOrBlack} />
            </div>
        </footer>
    )
}

export default Footer