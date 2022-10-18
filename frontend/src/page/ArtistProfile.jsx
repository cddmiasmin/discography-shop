import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Header from './../components/Header/Header'
import Footer from './../components/Footer/Footer'
import ListAlbunsSearch from './../components/ListAlbunsSearch'

import { useGetColor } from './../functions/useGetColor'
import { dataArtist } from './../data/dataArtist'

import Axios from 'axios'

import './../responsive/responsive.css'

const ArtistProfile = () => {

  const {
    color,
    colorIsDarkOrLight,
    getColor,
  } = useGetColor();

  const { slug } = useParams();

  const [artist, SetArtist] = useState();

  useEffect(() => {
    Axios.get(`http://localhost:3000/api/artist/${slug}`).then((response) => {
      SetArtist(response.data.result);
      console.log(response);
    });
    getColor(artist.icon);
  },[])


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
          <h1 id='name' style={{ color: `${color}` }}>{artist.name}</h1>
        </div>

        <div
          id='list-album-artist'
          className='d-flex flex-column justify-content-center align-items-center gap-3'
          style={{ width: '95%' }}
        >

          <div
            id='filter-from-products'
            className='d-flex rounded flex-wrap justify-content-center align-items-center gap-5'
            style={{ backgroundColor: 'none', height: '7vh', width: '70vh', border: `1px solid ${color}` }}
          >
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <h5 className="form-check-h5 m-0" htmlFor="flexCheckDefault">
                CD
              </h5>
            </div>

            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <h5 className="form-check-h5 m-0" htmlFor="flexCheckDefault">
                VINIL
              </h5>
            </div>

            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <h5 className="form-check-h5 m-0" htmlFor="flexCheckDefault">
                CASSETE
              </h5>
            </div>

            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <h5 className="form-check-label m-0" htmlFor="flexCheckDefault">
                BOX
              </h5>
            </div>
          </div>

          <ListAlbunsSearch data={dataArtist[0]} />
        </div>
        <br />
        <br />
        <Footer colorIsDarkOrLight={colorIsDarkOrLight} color={color} />
      </div>
    </div>
  )
}

export default ArtistProfile