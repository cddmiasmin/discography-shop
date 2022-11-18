import React from 'react'
import { useGoToProduct } from '../../functions/useGoToProduct'
import './album.css'

const Album = ({slugAlbum, slugArtist, cover, name, artist, year, price}) => {

    const { GoToProduct } = useGoToProduct();

    return (
        <div
            onClick={() => GoToProduct(slugAlbum, slugArtist)}
            className='position-relative rounded album overflow-hidden'
            style={{ width: '220px', height: '220px', cursor: 'pointer' }}
        >
            <div className='album-cover d-flex flex-column justify-content-center align-items-center w-100 h-100 position-absolute'>
                <img
                    className=' w-100 h-100'
                    src={cover}
                    alt="Capa do album"
                />
            </div>

            <div
                className='album-info d-flex flex-column justify-content-center align-items-center w-100 h-100 position-absolute g-2'
            >
                <h3
                    style={{
                        'textAlign': 'center',
                    }}
                >{name}</h3>
                <h6
                    style={{
                        'textAlign': 'center',
                    }}
                >{artist}</h6>
                <h6>{year}</h6>
                <h6>{price ? price : ''}</h6>
            </div>
        </div>
    )
}

export default Album