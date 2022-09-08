import React from 'react'
import './styles/album.css'

const Album = (props) => {
    return (
            <div 
                className='position-relative album'
                style={{width: '220px', height: '220px', cursor: 'pointer'}}
            >
                <div className='album-cover d-flex flex-column justify-content-center align-items-center w-100 h-100 position-absolute'>
                    <img
                        className='rounded w-100 h-100'
                        src={props.cover}
                        alt=""
                    />
                </div>

                <div 
                    className='album-info d-flex flex-column justify-content-center align-items-center w-100 h-100 position-absolute g-2'
                >
                    <h3
                        style={{
                            'text-align': 'center',
                        }}
                    >{props.name}</h3>
                    <h6>{props.year}</h6>
                </div>
            </div>
    )
}

export default Album