import React from 'react'
import { Link } from 'react-router-dom'

const Logo = (props) => {
    const sizeLogo = {
        width: (props.size+10)+'px',
        height: props.size+'px',
        cursor: 'pointer'
    }

    return (
        <div 
            style={sizeLogo} 
           >
            <img 
                style={sizeLogo}
                src="src/assets/images/logo.png" 
                alt="" 
            />
        </div>
    )
}

export default Logo