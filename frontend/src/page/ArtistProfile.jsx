import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Header from './../components/Header/Header'
import Footer from './../components/Footer/Footer'
import ListAlbunsSearch from './../components/ListAlbunsSearch'

import { useGetColor } from './../functions/useGetColor'
import { dataArtist } from './../data/dataArtist'

import api from './../services/api'

import './../responsive/responsive.css'
import Loading from '../components/Loading'

const ArtistProfile = () => {

  const {
    color,
    colorIsDarkOrLight,
    getColor,
  } = useGetColor();

  const { slug } = useParams();

  const [artist, SetArtist] = useState([]);

  useEffect(() => {
    api.get(`/artist/${slug}`).then((response) => {
      SetArtist(response.data.result);
    });
  }, [])

  useEffect(() => getColor(artist.icon), [artist]);

  if (artist.length === 0) {
    return (<Loading />)
  }

  console.log(artist)
  return (
    <div
      id='container-artist'
      className='w-100 d-flex flex-column justify-content-center align-items-center'
      style={{ backgroundColor: '#020202' }}
    >
      <div
        id='header-profile'
        className='w-100 d-flex'
        style={{ height: '30vh', backgroundColor: `${color}` }}
      >
        <Header colorIsDarkOrLight={colorIsDarkOrLight} color={color} />
      </div>

      <div
        id='artist-profile'
        className={`d-flex w-100 flex-column position-absolute justify-content-center align-items-center gap-2`}
        style={{ top: '13vh' }}
      >
        <div
          id='artist-info'
          className='d-flex w-100 flex-column justify-content-center align-items-center gap-1'
        >
          <img
            id='icon'
            className='rounded-circle'
            style={{ height: '32vh', width: '32vh', border: `5px solid ${color}` }}
            src={artist.icon} alt={artist.name} />
          <h1 className='m-2' id='name' style={{ color: `${color}` }}>{artist.name}</h1>
        </div>

        <div
          id='list-album-artist'
          className='d-flex flex-column justify-content-center align-items-center gap-3'
          style={{ width: '95%' }}
        >

          <div
            id='filter-from-products'
            className='w-50 d-flex rounded m-1'
            style={{ backgroundColor: 'var(--color)', height: '0.5vh' }}
          />
  
          <ListAlbunsSearch artistName={artist.name} slug={slug}/>
        </div>
        <br />
        <br />
        <Footer colorIsDarkOrLight={colorIsDarkOrLight} color={color} />
      </div>
    </div>
  )
}

export default ArtistProfile