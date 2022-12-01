import React, { useContext } from 'react'

import ArtistIcon from './ArtistIcon';

const LookForArtists = ({ data }) => {

    return (
        <div
            className='d-flex w-100 flex-column flex-wrap justify-content-star align-items-center gap-2'
            style={{ marginTop: '5vh', paddingBottom: '4vh' }}
        >
            <div
                className='d-flex flex-column flex-wrap justify-content-center align-items-center gap-2'
                style={{ width: '75%', borderBottom: '1px solid white', marginBottom: '2vh' }}
            >
                <h2 align='center'>ARTISTAS</h2>
            </div>

            <div
                className='d-flex flex-row flex-wrap justify-content-center align-items-center gap-2'
                style={{ width: '65%' }}
            >
                {
                    data.length
                        ?
                        data.map((artist, key) => (
                            <ArtistIcon size={'25vh'} key={key} code={artist.code} slug={artist.slug}
                                color={'white'} name={artist.name} icon={artist.icon}
                            />
                        ))
                        :
                        <h6 className='m-3'>Oops! Não encontramos nenhum artista...</h6>
                }
            </div>
        </div>
    )
}

export default LookForArtists