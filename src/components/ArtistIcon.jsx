import React from 'react'
import { Link } from 'react-router-dom'

const ArtistIcon = (props) => {
    return (
        <Link to={`/perfil/${props.id}`} className="text-decoration-none text-white">
            <div key={props.id} className='artist-option d-flex flex-column justify-content-center align-items-center gap-2 p-2'>
                <img style={{ height: `${props.size}`, width: `${props.size}`, border: `3.5px solid ${props.color}` }}
                    src={props.icon} alt={`${props.name} icon`} className="rounded-circle" />
                <h6 className='m-0' style={{ color: `${props.color}` }}>{props.name}</h6>
            </div>
        </Link>
    )
}

export default ArtistIcon