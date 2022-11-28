import React from 'react'

import Mobile from './Mobile'
import Desktop from './Desktop'

import './../../responsive/responsive.css'

const Footer = () => {
    
    return (
        <footer
            className={`container-fluid w-100`}
            style={{ backgroundColor: `var(--color)` }}
        >
            <div id='footer-desktop' className='d-flex w-100'>
                <Desktop />
            </div>

            <div id='footer-mobile' className='d-none w-100'>
                <Mobile />
            </div>
        </footer>
    )
}

export default Footer