import React, { useEffect, useState } from 'react'

import ReactImageMagnify from 'react-image-magnify';

import './style.css'

import Header from './../components/Header/Header'
import Footer from './../components/Footer/Footer'
import LetMeKnowWhenItArrives from '../components/LetMeKnowWhenItArrives/LetMeKnowWhenItArrives'

import { dataArtist } from './../data/dataArtist'
import { useGetColor } from './../functions/useGetColor'

import { Link } from 'react-router-dom'
import { _ } from 'lodash'

const ProductDetail = () => {
  const [coverAlbum, setCoverAlbum] = useState(0);
  const [productPhoto, SetProductPhoto] = useState(0);
  const [letMeKnowWhenItArrivesModalIsOpen, SetLetMeKnowWhenItArrivesModalIsOpen] = useState(false);

  const numAlbum = 2;

  useEffect(() => getColor(dataArtist[0].album[numAlbum].cover[coverAlbum].cover))

  const {
    color,
    colorIsDarkOrLight,
    colorIsWhiteOrBlack,
    getColor,
  } = useGetColor();

  const ChoseAlbumCoverClick = (key) => setCoverAlbum(key);
  const ChoseProductPhotoClick = (key) => SetProductPhoto(key);
  const ChoseProductFormatClick = (format, key) => {
    const aux = dataArtist[0].album[numAlbum].cover[coverAlbum].format.find(formatAux => formatAux.id === format);
    SetProductFormat(aux.id);
    console.log(productFormat)
    console.log(dataArtist[0].album[numAlbum].cover[coverAlbum].format[productFormat].images[productPhoto].url)
  };

  const HowIsTheStockOfFormats = (data) => {
    const formatStockAvailableAux = _.groupBy(dataArtist[0].album[numAlbum].cover[coverAlbum].format, (availabe) => availabe.situation)
    return formatStockAvailableAux;
  }

  const formatStockAvailable = HowIsTheStockOfFormats(dataArtist[0].album[numAlbum].cover[coverAlbum].format);

  const [productFormat, SetProductFormat] = useState(formatStockAvailable['1'] === undefined ? 0 : formatStockAvailable['1'][0].id);
  console.log(productFormat)
  return (
    <div className={`flex-column w-100 h-100 d-flex justify-content-center align-items-center text-${colorIsDarkOrLight}`}
      style={{ backgroundColor: '#020202' }}
    >
      <Header colorIsDarkOrLight={colorIsDarkOrLight} color={color} colorIsWhiteOrBlack={colorIsWhiteOrBlack} />
      <div
        className='d-flex flex-column justify-content-center align-items-center text-center w-100 h-25 '
        style={{ backgroundColor: `${color}`, 'paddingTop': '10vh' }}
      >
        <h1 className='fs-1'>{dataArtist[0].album[numAlbum].name}</h1>
        <Link to={`/perfil/${dataArtist[0].id}`} className={`text-decoration-none text-${colorIsDarkOrLight}`}>{dataArtist[0].name}</Link>
      </div>

      <div className='container-fluid d-flex gap-4 flex-wrap h-75 w-100 justify-content-center align-items-center'
        style={{ marginTop: '5vh', marginBottom: '5vh' }}>

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
          style={{ color: `${color}`, width: '35vh' }}
        >
          {formatStockAvailable['1'] !== undefined &&
            <div className='d-flex flex-column justify-content-center align-items-center'>
              <h2 className='m-0'>COM ESTOQUE</h2>
              <div style={{ backgroundColor: `${color}`, height: '1vh', width: '35vh', marginBottom: '2vh' }} />
              <div className='d-flex flex-wrap gap-1 justify-content-center align-items-center'>
                {formatStockAvailable['1'].map((format, key) => (
                  <button
                    key={key}
                    onClick={() => ChoseProductFormatClick(format.id, key)}
                    className={`bg-${colorIsDarkOrLight} fs-4 rounded d-flex justify-content-center align-items-center`}
                    style={{ color: `${color}`, height: '6vh', width: '12vh', cursor: 'point' }}
                  >
                    {format.type}
                  </button>
                ))}
              </div>
            </div>
          }

          {formatStockAvailable['0'] !== undefined &&
            <div className='d-flex flex-column justify-content-center align-items-center w-100'>
              <h2 className='m-0'>SEM ESTOQUE</h2>
              <div style={{ backgroundColor: `${color}`, height: '1vh', width: '35vh', marginBottom: '2vh' }} />
              <div className='d-flex flex-wrap gap-1 justify-content-center align-items-center'>
                {formatStockAvailable['0'].map((format, key) => (
                  <button
                    key={key}
                    className={`bg-${colorIsDarkOrLight} fs-4 rounded d-flex justify-content-center align-items-center`}
                    style={{ color: `${color}`, height: '6vh', width: '12vh', cursor: 'point' }}
                    onClick={() => ChoseAlbumCoverClick(key)}
                  >
                    {format.type}
                  </button>
                ))}
                <button
                  className={`text-${colorIsDarkOrLight} fs-5 rounded d-flex justify-content-center align-items-center m-1`}
                  style={{ backgroundColor: `${color}`, height: '6vh', width: '30vh', cursor: 'point' }}
                  onClick={() => SetLetMeKnowWhenItArrivesModalIsOpen(true)}
                >
                  AVISE-ME QUANDO CHEGAR
                </button>
                <LetMeKnowWhenItArrives
                  letMeKnowWhenItArrivesModalIsOpen={letMeKnowWhenItArrivesModalIsOpen}
                  SetLetMeKnowWhenItArrivesModalIsOpen={SetLetMeKnowWhenItArrivesModalIsOpen}
                  formatStockAvailable={formatStockAvailable['0']} />
              </div>
            </div>
          }
        </div>

        {formatStockAvailable['1'] !== undefined &&
          <div
            className='d-flex gap-2 flex-column justify-content-center align-items-center'
            style={{ color: `${color}`, width: '45vh' }}
          >
            <ReactImageMagnify {...{
              smallImage: {
                alt: '',
                isFluidWidth: true,
                sizes: '1220x1220',
                src: dataArtist[0].album[numAlbum].cover[0].format[2].images[productPhoto].url
              },
              largeImage: {
                src: dataArtist[0].album[numAlbum].cover[0].format[2].images[productPhoto].url,
                width: 1200,
                height: 1200
              }
            }} />
            <div className='d-flex gap-2 flex-row justify-content-center align-items-center'>
              {dataArtist[0].album[numAlbum].cover[0].format[2].images.map((image, key) =>
                <img
                  onClick={() => ChoseProductPhotoClick(key)}
                  key={key} src={image.url} alt=''
                  className='rounded' style={{ width: '5.5vh', height: '5.5vh', cursor: 'pointer' }} />
              )}
            </div>
          </div>
        }

        <div
          className='d-flex gap-5 flex-column justify-content-center align-items-center'
          style={{ color: 'white', width: '35vh', marginBottom: '2vh' }}
        >
          {formatStockAvailable['1'] !== undefined &&
            <div className='d-flex flex-column justify-content-center align-items-center'>
              <h1 className='m-2' style={{ fontSize: '10vh' }}>R$44,90</h1>
              
              <div className='d-flex flex-row justify-content-center align-items-center m-1'>
                <button type='button' style={{
                  backgroundColor: 'var(--color)', color: 'var(--colorIsWhiteOrBlack)', fontWeight: 'bolder',
                  fontSize: 'medium', width: '20px', height: '20px', borderRadius: '10px'
                }}
                >
                  -
                </button>
                <p className="m-1">1</p>
                <button type='button' style={{
                  backgroundColor: 'var(--color)', color: 'var(--colorIsWhiteOrBlack)', fontWeight: 'bolder',
                  fontSize: 'medium', width: '20px', height: '20px', borderRadius: '10px'
                }}
                >
                  +
                </button>
              </div>
              <button type='button'
                className='rounded m-2 fs-5'
                style={{
                  backgroundColor: 'var(--color)', color: 'var(--colorIsWhiteOrBlack)',
                  width: '35vh', height: '7vh'
                }}
              >COMPRAR</button>
            </div>
          }
        </div>
      </div>

      <div
        className='d-flex flex-column justify-content-center align-items-center'
        style={{ marginTop: '5vh', marginBottom: '5vh', width: '85%', color: 'white' }}
      >
        <h1 style={{ color: 'var(--color)' }}>CONHEÇA ESSE PRODUTO</h1>
        <div className='rounded w-100' style={{ height: '0.5vh', backgroundColor: 'var(--color)' }} />
        <div className='p-4 d-flex flex-column justify-content-center align-items-center gap-2' >
          <p align="justify">
            TERCEIRO ÁLBUM DE ESTÚDIO DE FLORENCE AND THE MACHINE.
            <br />Três anos em produção, Florence and the Machine finalmente retornaram com o que poderia
            ser seu melhor álbum até agora. Com liberdade criativa concedida por sua gravadora, Florence Welch
            dedicou um tempo para criar o excelente álbum junto com Markus Dravs, famoso produtor de Homogenic
            de Bjork. Embora esta não seja exatamente a obra-prima eletrônica textural, é massivamente épica.
            Com enormes seções de cordas / trompas e a voz ruidosa de Florence, a energia ao vivo de seus shows
            cativantes é quase capturada em toda a sua glória. O título do álbum parece o melhor descritor
            possível. Pressionado em 2LP com inserções coloridas que parecem uma sessão de fotos da moda dos
            anos 70, este é um essencial de verão.
          </p>

          <div className='d-flex flex-column justify-content-center align-items-star w-100'>
            <h4 style={{ color: 'var(--color)' }}>ESPECIFICAÇÕES</h4>
            <p className='m-0'><b>Altura:</b> x centímetros</p>
            <p className='m-0'><b>Largura:</b> x centímetros</p>
            <p className='m-0'><b>Comprimento:</b> x centímetros</p>
            <p className='m-0'><b>Peso:</b> x gramas</p>
          </div>

          <iframe
            style={{ borderRadius: '12px', marginTop: '2vh' }}
            src="https://open.spotify.com/embed/album/2jn2n5OkuHliOLKCqHnjXV?utm_source=generator"
            width="100%" height="380" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
      </div>
      <Footer colorIsDarkOrLight={colorIsDarkOrLight} color={color} colorIsWhiteOrBlack={colorIsWhiteOrBlack} />
    </div>
  )
}

export default ProductDetail