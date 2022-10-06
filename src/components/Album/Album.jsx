import React from 'react'
import { useGoToProduct } from '../../functions/useGoToProduct'
import './album.css'

const Album = (props) => {

    const {GoToProduct} = useGoToProduct();
    return (
        <div
            onClick={() => GoToProduct()}
            className='position-relative album'
            style={{ width: '220px', height: '220px', cursor: 'pointer' }}
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
                        'textAlign': 'center',
                    }}
                >{props.name}</h3>
                <h6
                    style={{
                        'textAlign': 'center',
                    }}
                >{props.artist}</h6>
                <h6>{props.year}</h6>
            </div>
        </div>
    )
}

export default Album