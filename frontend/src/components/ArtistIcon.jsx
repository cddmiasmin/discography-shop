import React from 'react'
import { Link } from 'react-router-dom'

const ArtistIcon = ({ slug, code, size, color, name, icon}) => {
    return (
        <Link to={`/perfil/${slug}`} className="text-decoration-none text-white">
            <div key={code} className='artist-option d-flex flex-column justify-content-center align-items-center gap-2 p-2'>
                <img style={{ height: `${size}`, width: `${size}`, border: `3.5px solid ${color}` }}
                    src={icon} alt={`${name} icon`} className='rounded' />
                <h6 className='m-0' style={{ color: `${color}` }}>{name}</h6>
            </div>
        </Link>
    )
}

export default ArtistIcon