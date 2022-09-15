import React from 'react'

import Album from './Album'

const ListAlbunsSearch = (props) => {

    const artist = props.data.name;

    return (
        <div
            id='container-albuns' 
            className='d-flex flex-wrap justify-content-center align-items-center w-100 gap-4'
        >
            {props.data.album.map((album, key) => (
                <Album
                    key={key}
                    cover={album.cover[0].cover}
                    artist={artist}
                    name={album.name}
                    year={album.year}
                />
            ))}
        </div>
    )
}

export default ListAlbunsSearch