import React from 'react'

import Album from './Album/Album'

const LookForAlbums = ({ data }) => {

    return (
        <div
            className='d-flex w-100 flex-column flex-wrap justify-content-star align-items-center gap-2'
            style={{ marginTop: '5vh', paddingBottom: '4vh' }}
        >
            <div
                className='d-flex flex-column flex-wrap justify-content-center align-items-center gap-2'
                style={{ width: '75%', borderBottom: '1px solid white', marginBottom: '2vh' }}
            >
                <h2 align='center'>ÁLBUMS</h2>
            </div>

            <div
                className='d-flex flex-row flex-wrap justify-content-center align-items-center gap-3'
                style={{ width: '75%' }}
            >
                {
                    data.length
                        ?
                        data.map((album) => (
                            <Album
                                key={album.code}
                                cover={album.cover}
                                artist={album.artistName}
                                name={album.albumName}
                                date={album.releaseDate}
                                price={null}
                                slugArtist={album.artistSlug}
                                slugAlbum={album.albumSlug}
                            />
                        ))
                        :
                        <h6 className='m-3'>Oops! Não encontramos nenhum album...</h6>
                }
            </div>
        </div>
    )
}

export default LookForAlbums