import React from 'react'
import { Link } from 'react-router-dom'

const Logo = (props) => {
    return (
        <div
            style={{height: `${props.size}px`, width: `${props.size + 10}px`, cursor: 'pointer'}}
        >
            <Link to='/'>
                <img
                    style={{height: `${props.size}px`, width: `${props.size + 10}px`}}
                    src={`Logo/logo-${props.color}.png`}
                    alt='Logo Cassandra'
                />
            </Link>
        </div>
    )
}

export default Logo