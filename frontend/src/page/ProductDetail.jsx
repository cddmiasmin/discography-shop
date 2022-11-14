import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import ReactImageMagnify from 'react-image-magnify';

import './style.css'

import Header from './../components/Header/Header'
import Loading from './../components/Loading'
import Footer from './../components/Footer/Footer'
import LetMeKnowWhenItArrives from '../components/LetMeKnowWhenItArrives/LetMeKnowWhenItArrives'
import { dataArtist } from './../data/dataArtist'

import { useGetColor } from './../functions/useGetColor'

import { Link } from 'react-router-dom'
import { _ } from 'lodash'
import api from '../services/api';

const ProductDetail = () => {

  const { artist } = useParams();
  const { album } = useParams();

  const [dataArtistA, SetDataArtist] = useState([]);
  const [dataAlbum, SetDataAlbum] = useState([]);
  const [dataVersionAlbum, SetDataVersionAlbum] = useState([]);

  const [coverAlbum, setCoverAlbum] = useState(0);
  const [productPhoto, SetProductPhoto] = useState(0);
  const [letMeKnowWhenItArrivesModalIsOpen, SetLetMeKnowWhenItArrivesModalIsOpen] = useState(false);


  useEffect(() => {
    api.get(`/versions/${album}`).then((response) => {
      SetDataVersionAlbum(response.data.result);
    })
    api.get(`/album/${album}`).then((response) => {
      SetDataAlbum(response.data.result);
    })
    api.get(`/artist/${artist}`).then((response) => {
      SetDataArtist(response.data.result);
    });
  }, []);

  useEffect(() => {
    if (dataVersionAlbum.length !== 0) getColor(dataVersionAlbum[coverAlbum].cover);
  }, [dataVersionAlbum, coverAlbum])

  //console.log(dataAlbum);
  //console.log(dataVersionAlbum);
  //console.log(dataArtist);

  const {
    color,
    colorIsDarkOrLight,
    colorIsWhiteOrBlack,
    getColor,
  } = useGetColor();

  if (dataArtistA.length === 0 || dataAlbum.length === 0 || dataVersionAlbum.length === 0) {
    return (<Loading />)
  }

  const ChoseAlbumCoverClick = (key) => setCoverAlbum(key);

  return (
    <div className={`flex-column w-100 h-100 d-flex justify-content-center align-items-center text-${colorIsDarkOrLight}`}
      style={{ backgroundColor: '#020202' }}
    >
      <Header colorIsDarkOrLight={colorIsDarkOrLight} color={color} colorIsWhiteOrBlack={colorIsWhiteOrBlack} />
      <div
        className='d-flex flex-column justify-content-center align-items-center text-center w-100 h-25 '
        style={{ backgroundColor: `${color}`, 'paddingTop': '10vh' }}
      >
        <h1 className='fs-1'>{dataAlbum.nm_album}</h1>
        <Link to={`/perfil/${dataArtistA.slug}`} className={`text-decoration-none text-${colorIsDarkOrLight}`}>{dataArtistA.name}</Link>
      </div>

      <div className='container-fluid d-flex gap-4 flex-wrap h-75 w-100 justify-content-center align-items-center'
        style={{ marginTop: '5vh', marginBottom: '5vh' }}>

        <div
          className='d-flex gap-1 flex-column justify-content-center align-items-center rounded'
          style={{ backgroundColor: `${color}`, height: '50vh', width: '37vh' }}
        >
          <h6 className='m-0'>Escolha a versão ou capa</h6>
          <div className='d-flex w-100 flex-row gap-2 justify-content-center align-items-center' >
            {dataVersionAlbum.map((cover, key) => (
              <button
                key={key}
                className={`bg-${colorIsDarkOrLight} rounded-circle d-flex justify-content-center align-items-center`}
                style={{ color: `${color}`, height: '4vh', width: '4vh', cursor: 'point' }}
                onClick={() => ChoseAlbumCoverClick(key)}
              >
                {key + 1}
              </button>
            ))}
          </div>

          <img
            className='rounded'
            style={{ height: '35vh', width: '35vh' }}
            src={dataVersionAlbum[coverAlbum].cover} alt='Imagem do album'
          />

          <h4 className='m-0'>{dataVersionAlbum[coverAlbum].description}</h4>
        </div>
      </div>


      <div
        className='d-flex flex-column justify-content-center align-items-star'
        style={{ marginTop: '5vh', marginBottom: '5vh', width: '85%', color: 'white' }}
      >
        <h1 className='d-flex justify-content-center align-items-center' style={{ color: 'var(--color)' }}>CONHEÇA ESSE PRODUTO</h1>
        <div className='rounded w-100' style={{ height: '0.5vh', backgroundColor: 'var(--color)' }} />
        <div className='p-4 d-flex flex-column justify-content-center align-items-center gap-2' > 
          <p dangerouslySetInnerHTML={{ __html:  dataArtist[1].text}} className="w-100 text-decoration-none" align="justify"/>

          <div className='d-flex flex-column justify-content-center align-items-star w-100'>
            <h4 style={{ color: 'var(--color)' }}>ESPECIFICAÇÕES</h4>
            <p className='m-0'><b>Altura:</b> x centímetros</p>
            <p className='m-0'><b>Largura:</b> x centímetros</p>
            <p className='m-0'><b>Comprimento:</b> x centímetros</p>
            <p className='m-0'><b>Peso:</b> x gramas</p>
          </div>
        </div>
      </div>
    </div >
  )
}

export default ProductDetail