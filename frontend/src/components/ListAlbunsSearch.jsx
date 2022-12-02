import React, { useEffect, useState } from 'react';

import { _ } from 'lodash';

import api from './../services/api';

import Loading from './Loading';
import Album from './Album/Album';

const ListAlbunsSearch = ({slug}) => {

    const [dataArtistAlbums, SetDataArtistAlbums] = useState(1);

    useEffect(() => {
        api.get(`/albums/${slug}`).then((response) => {
            SetDataArtistAlbums(response.data.result);
        });
    }, []);

    if (dataArtistAlbums === 1) return (<Loading />);
    else
        if (dataArtistAlbums.length === 0)
            return (
                <h5 style={{ marginTop: '4vh' }}>EM BREVE! 😉</h5>
            );

    return (
        <div
            id='container-albuns'
            className='d-flex flex-wrap justify-content-center align-items-center w-100 gap-4'
            style={{marginTop: '3vh'}}
        >
            {dataArtistAlbums.map((album, key) => (
                <Album
                    key={key}
                    cover={album.cover}
                    artist={album.artistName}
                    name={album.albumName}
                    date={album.releaseDate}
                    slugAlbum={album.albumSlug}
                    slugArtist={album.artistSlug}
                />
            ))}
        </div>
    )
}

export default ListAlbunsSearch