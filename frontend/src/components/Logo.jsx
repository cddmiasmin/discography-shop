import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ColorContext } from '../contexts/ColorContext';

const Logo = ({ size }) => {

    const { colorIsDarkOrLight } = useContext(ColorContext);

    return (
        <div
            style={{ height: `${size}px`, width: `${size + 10}px`, cursor: 'pointer' }}
        >
            <Link to='/'>
                <img
                    style={{ height: `${size}px`, width: `${size + 10}px` }}
                    src={`/images/Logo/logo-${colorIsDarkOrLight}.png`}
                    alt='Logo Cassandra'
                />
            </Link>
        </div>
    )
}

export default Logo