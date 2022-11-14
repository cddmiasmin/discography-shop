import React, { useEffect, useState } from 'react';

import { _ } from 'lodash';

import api from './../services/api';

import Loading from './Loading';
import Album from './Album/Album';

const ListAlbunsSearch = (props) => {

    const [versionsAlbums, SetVersionsAlbums] = useState(1);
    const [artistAlbums, SetArtistAlbums] = useState(1);

    useEffect(() => {
        api.get(`/albums/${props.slug}`).then((response) => {
            SetArtistAlbums(response.data.result);
        });
        api.get(`/versions/by/${props.slug}`).then((response) => {
            SetVersionsAlbums(response.data.result);
        });
    }, []);

    const GroupAlbumVersions = (data) => {
        const groupVersionsByAlbum = _.groupBy(data, (album) => {
            return album.album
        })

        return groupVersionsByAlbum;
    }

    console.log(artistAlbums)

    const versionsAlbumsGrouped = GroupAlbumVersions(versionsAlbums);

    if (artistAlbums === 1) return (<Loading />);
    else
        if (versionsAlbums === 1) return (<Loading />);
        else
            if (versionsAlbums.length === 0)
                return (
                    <h5 style={{ marginTop: '4vh' }}>EM BREVE! 😉</h5>
                );

    return (
        <div
            id='container-albuns'
            className='d-flex flex-wrap justify-content-center align-items-center w-100 gap-4'
        >
            {artistAlbums.map((album, key) => (
                <Album
                    key={key}
                    cover={versionsAlbumsGrouped[`${album.code}`][0].cover}
                    artist={props.artistName}
                    name={album.name}
                    year={album.releaseDate}
                    slugAlbum={album.slug}
                    slugArtist={props.slug}
                />
            ))}
        </div>
    )
}

export default ListAlbunsSearch