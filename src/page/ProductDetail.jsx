import React, { useEffect, useState } from 'react'

import './style.css'
import Header from './../components/Header/Header'
import Footer from './../components/Footer'

import { dataArtist } from './../data/dataArtist'
import { useGetColor } from '../data/hook/useGetColor'

import { Link } from 'react-router-dom'
import { _ } from 'lodash'

import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { BsFillShareFill } from 'react-icons/bs'
import { TbShoppingCart } from 'react-icons/tb'

const ProductDetail = () => {
  const [coverAlbum, setCoverAlbum] = useState(0);

  const numAlbum = 2;

  useEffect(() => getColor(dataArtist[0].album[numAlbum].cover[coverAlbum].cover))

  const {
    color,
    colorIsDarkOrLight,
    colorIsWhiteOrBlack,
    getColor,
  } = useGetColor();

  const ChoseAlbumCoverClick = (key) => setCoverAlbum(key)

  const HowIsTheStockOfFormats = (data) => {
    const formatStockAvailableAux = _.groupBy(dataArtist[0].album[numAlbum].cover[coverAlbum].format, (availabe) => availabe.situation)
    console.log(formatStockAvailableAux)
    return formatStockAvailableAux;
  }

  const formatStockAvailable = HowIsTheStockOfFormats(dataArtist[0].album[numAlbum].cover[coverAlbum].format);

  return (
    <div className={`flex-column w-100 h-100 d-flex justify-content-center align-items-star text-${colorIsDarkOrLight}`}
      style={{backgroundColor: '#020202'}}
    >
      <Header colorIsDarkOrLight={colorIsDarkOrLight} color={color}/>
      <div
        className='d-flex flex-column justify-content-center align-items-center text-center w-100 h-25 '
        style={{ backgroundColor: `${color}`, 'paddingTop': '10vh' }}
      >
        <h1 className='fs-1'>{dataArtist[0].album[numAlbum].name}</h1>
        <Link to='/artista' className={`text-decoration-none text-${colorIsDarkOrLight}`}>{dataArtist[0].name}</Link>
      </div>

      <div className='container-fluid d-flex gap-3 flex-wrap h-75 w-100 justify-content-center align-items-center'
        style={{ marginTop: '2vh' }}>

        <div
          className='d-flex gap-1 flex-column justify-content-center align-items-center rounded'
          style={{ backgroundColor: `${color}`, height: '50vh', width: '37vh' }}
        >
          <h6 className='m-0'>Escolha a versão ou capa</h6>
          <div className='d-flex w-100 flex-row gap-2 justify-content-center align-items-center' >
            {dataArtist[0].album[numAlbum].cover.map((cover, key) => (
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
            src={dataArtist[0].album[numAlbum].cover[coverAlbum].cover} alt='Imagem do album'
          />

          <h4 className='m-0'>{dataArtist[0].album[numAlbum].cover[coverAlbum].shortDescription}</h4>
        </div>

        <div
          className='d-flex gap-5 flex-column justify-content-center align-items-center'
          style={{ color: `${color}`, height: '35vh', width: '35vh' }}
        >
          <div className='d-flex flex-column justify-content-center align-items-center'>
            <h2 className='m-0'>COM ESTOQUE</h2>
            <div style={{ backgroundColor: `${color}`, height: '1vh', width: '35vh', marginBottom: '2vh' }} />
            <div className='d-flex flex-wrap gap-1 justify-content-center align-items-center'>

              {/* {(formatStockAvailable !== null) && 
                (formatStockAvailable[0].situation === '1' || formatStockAvailable[1].situation === '1') &&
                formatStockAvailable[1].map((format, key) => (
                  <button
                    key={key}
                    className={`bg-${colorIsDarkOrLight} fs-4 rounded d-flex justify-content-center align-items-center`}
                    style={{ color: `${color}`, height: '6vh', width: '12vh', cursor: 'point' }}
                    
                  >
                    {format.type}
                  </button>
                ))
              } */}
            </div>
          </div>

          <div className='d-flex flex-column justify-content-center align-items-center w-100'>
            <h2 className='m-0'>SEM ESTOQUE</h2>
            <div style={{ backgroundColor: `${color}`, height: '1vh', width: '35vh', marginBottom: '2vh' }} />
            <div className='d-flex flex-wrap gap-1 justify-content-center align-items-center'>
            {/* {formatStockAvailable !== null &&
              formatStockAvailable[0].map((format, key) => (
                <button
                  key={key}
                  className={`bg-${colorIsDarkOrLight} fs-4 rounded d-flex justify-content-center align-items-center`}
                  style={{ color: `${color}`, height: '6vh', width: '12vh', cursor: 'point' }}
                  onClick={() => ChoseAlbumCoverClick(key)}
                >
                  {format.type}
                </button>
              ))} */}
              <button
                className={`text-${colorIsDarkOrLight} fs-5 rounded d-flex justify-content-center align-items-center`}
                style={{ backgroundColor: `${color}`, height: '6vh', width: '30vh', cursor: 'point' }}
              >
                AVISE-ME QUANDO CHEGAR
              </button>
            </div>
          </div>
        </div>

      </div>
      <br />
      <br />
      <br />
      <Footer colorIsDarkOrLight={colorIsDarkOrLight} color={color} colorIsWhiteOrBlack={colorIsWhiteOrBlack}/>
    </div>

  )
}

export default ProductDetail