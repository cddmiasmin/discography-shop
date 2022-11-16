import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import ReactImageMagnify from 'react-image-magnify';

import './style.css'

import Header from './../components/Header/Header'
import Loading from './../components/Loading'
import Footer from './../components/Footer/Footer'
import LetMeKnowWhenItArrives from '../components/LetMeKnowWhenItArrives/LetMeKnowWhenItArrives'

import { useGetColor } from './../functions/useGetColor'

import { Link } from 'react-router-dom'
import { _ } from 'lodash'
import api from '../services/api';

const ProductDetail = () => {

  const { artist } = useParams();
  const { album } = useParams();

  const nameFormat = ['CD','CASSETE','BOX','DVD','VINIL'];

  const [dataArtist, SetDataArtist] = useState([]);
  const [dataAlbum, SetDataAlbum] = useState([]);
  const [dataVersionAlbum, SetDataVersionAlbum] = useState([]);
  const [dataProductAlbum, SetDataProductAlbum] = useState([]);
  const [dataImgProductAlbum, SetDataImgProductAlbum] = useState([]);
  const [dataBundledProductVersions, SetDataBundledProductVersions] = useState([]);
  const [dataGroupedProductImages, SetDataGroupedProductImages] = useState([]);

  const [formatStockAvailable, SetFormatStockAvailable] = useState([]);

  const [productPhoto, SetProductPhoto] = useState(0);
  const [productFormat, SetProductFormat] = useState(0);
  const [optionVersionAlbum, SetOptionVersionAlbum] = useState(0);
  const [idOptionVersion, SetIdOptionVersion] = useState(0);

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
    if (dataVersionAlbum.length !== 0) getColor(dataVersionAlbum[optionVersionAlbum].cover);
  }, [dataVersionAlbum, optionVersionAlbum]);

  useEffect(() => {
    if (dataAlbum.length !== 0) {
      api.get(`/products/${dataAlbum.cd_album}`).then((response) => {
        SetDataProductAlbum(response.data.result);
      });
      api.get(`/images/products/${dataAlbum.cd_album}`).then((response) => {
        SetDataImgProductAlbum(response.data.result);
      });
    }
  }, [dataAlbum]);

  const GroupingProductVersions = (data) => {
    const dataProductAlbumAux = _.groupBy(data, (product) => {
      return product.version
    })
    return dataProductAlbumAux;
  }

  const GroupingImagesProductByProduct = () => {
    const groupedProductImagesAux = _.groupBy(dataImgProductAlbum, (product) => {
      return product.product
    })
    SetDataGroupedProductImages(groupedProductImagesAux);
  }

  const HowIsTheStockOfFormats = () => {
    const formatStockAvailableAux = _.groupBy(dataBundledProductVersions[idOptionVersion], (format) => {
      return format.situation
    })

    SetFormatStockAvailable(formatStockAvailableAux);
  }

  useEffect(() => {
    if (dataProductAlbum.length !== 0) {
      SetDataBundledProductVersions(GroupingProductVersions(dataProductAlbum));
      SetIdOptionVersion(dataVersionAlbum[0].code);
      HowIsTheStockOfFormats();
    }
  }, [dataProductAlbum]);

  useEffect(() => HowIsTheStockOfFormats(), [idOptionVersion]);

  useEffect(() => {
    if (dataImgProductAlbum.length !== 0) GroupingImagesProductByProduct()
  }, [dataImgProductAlbum])

  const {
    color,
    colorIsDarkOrLight,
    colorIsWhiteOrBlack,
    getColor,
  } = useGetColor();

  if (dataArtist.length === 0 || dataAlbum.length === 0 || dataBundledProductVersions.length === 0
    || dataVersionAlbum.length === 0 || dataProductAlbum.length === 0 || idOptionVersion === 0 ||
    formatStockAvailable === {} || dataImgProductAlbum.length === 0 || dataGroupedProductImages.length === 0) {
    return (<Loading />)
  }

  const ChoseAlbumCoverClick = (keyOption, codeVersion) => {
    SetOptionVersionAlbum(keyOption);
    SetIdOptionVersion(codeVersion);
    SetProductFormat(0);
    SetProductPhoto(0);
  }

  const ChoseProductFormatClick = (key) => {
    SetProductFormat(key);
    SetProductPhoto(0);
  }
  //console.log(dataProductAlbum);
  //console.log(dataImgProductAlbum);
  //console.log(dataGroupedProductImages);
  //console.log(dataBundledProductVersions[idOptionVersion][productFormat]);
  //console.log(dataBundledProductVersions);
  //console.log(dataGroupedProductImages[formatStockAvailable[1][productFormat].code][productPhoto].image)
  //console.log(dataAlbum);
  //console.log(dataVersionAlbum)
  //console.log(dataArtist);
  //console.log(formatStockAvailable[1][productFormat])
  console.log(idOptionVersion)
  console.log(productFormat);
  console.log(productPhoto);
  //console.log(dataGroupedProductImages[formatStockAvailable[1][productFormat].code])
  //console.log(dataGroupedProductImages[dataBundledProductVersions[idOptionVersion][productFormat].code])

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
        <Link to={`/perfil/${dataArtist.slug}`} className={`text-decoration-none text-${colorIsDarkOrLight}`}>{dataArtist.name}</Link>
      </div>

      <div className='container-fluid d-flex gap-4 flex-wrap h-75 w-100 justify-content-center align-items-center'
        style={{ marginTop: '5vh', marginBottom: '5vh' }}>

        <div
          className='d-flex gap-1 flex-column justify-content-center align-items-center rounded'
          style={{ backgroundColor: `${color}`, minHeight: '52.5vh', width: '37vh' }}
        >
          <h6 className='m-0'>Escolha a versão ou capa</h6>
          <div className='d-flex w-100 flex-row gap-2 justify-content-center align-items-center' >
            {dataVersionAlbum.map((option, key) => (
              <button
                key={key}
                className={`bg-${colorIsDarkOrLight} rounded-circle d-flex justify-content-center align-items-center`}
                style={{ color: `${color}`, height: '4vh', width: '4vh', cursor: 'point' }}
                onClick={() => ChoseAlbumCoverClick(key, option.code)}
              >
                {key + 1}
              </button>
            ))}
          </div>

          <img
            className='rounded'
            style={{ height: '35vh', width: '35vh' }}
            src={dataVersionAlbum[optionVersionAlbum].cover} alt='Imagem do album'
          />

          <h4 align="center" className='m-0'>{dataVersionAlbum[optionVersionAlbum].description}</h4>
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
                    onClick={() => ChoseProductFormatClick(key)}
                    className={`bg-${colorIsDarkOrLight} fs-4 rounded d-flex justify-content-center align-items-center`}
                    style={{ color: `${color}`, height: '6vh', width: '12vh', cursor: 'point' }}
                  >
                    {nameFormat[format.format - 1]}
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
                    style={{ color: `${color}`, height: '6vh', width: '12vh', cursor: 'default' }}
                  >
                    {format.format}
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
          <>
            <div
              className='d-flex gap-2 flex-column justify-content-center align-items-center rounded p-2'
              style={{ color: `${color}`, width: '45vh', border: `1px solid ${color}`,minHeight: '52.5vh' }}
            >
              <ReactImageMagnify {...{
                smallImage: {
                  alt: '',
                  isFluidWidth: true,
                  sizes: '1220x1220',
                  src: dataGroupedProductImages[formatStockAvailable[1][productFormat].code][productPhoto].image
                },
                largeImage: {
                  src: dataGroupedProductImages[formatStockAvailable[1][productFormat].code][productPhoto].image,
                  width: 1200,
                  height: 1200
                },
              }} />
              <div className='d-flex gap-2 flex-row justify-content-center align-items-center'>
                {dataGroupedProductImages[formatStockAvailable[1][productFormat].code].map((image, key) =>
                  <img
                    onClick={() => SetProductPhoto(key)}
                    key={key} src={image.image} alt=''
                    className='rounded' style={{ width: '5.5vh', height: '5.5vh', cursor: 'pointer',border: `1px solid ${color}` }} />
                )}
              </div>
            </div>

            <div
              className='d-flex gap-5 flex-column justify-content-center align-items-center'
              style={{ color: 'white', width: '35vh', marginBottom: '2vh' }}
            >
              <div className='d-flex flex-column justify-content-center align-items-center'>
                <h1 className='m-2' style={{ fontSize: '10vh' }}>{dataBundledProductVersions[idOptionVersion][productFormat].price}</h1>

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
            </div>
          </>
        }
      </div>

      {formatStockAvailable['1'] !== undefined &&
        <div
          className='d-flex flex-column justify-content-center align-items-star'
          style={{ marginTop: '5vh', marginBottom: '5vh', width: '85%', color: 'white' }}
        >
          <h1 className='d-flex justify-content-center align-items-center' style={{ color: 'var(--color)' }}>CONHEÇA ESSE PRODUTO</h1>
          <div className='rounded w-100' style={{ height: '0.5vh', backgroundColor: 'var(--color)' }} />
          <div className='p-4 d-flex flex-column justify-content-center align-items-center gap-2' >
            <p dangerouslySetInnerHTML={{ __html: dataBundledProductVersions[idOptionVersion][productFormat].description }} className="w-100 text-decoration-none" align="justify" />

            <div className='d-flex flex-column justify-content-center align-items-star w-100'>
              <h4 style={{ color: 'var(--color)' }}>ESPECIFICAÇÕES</h4>
              <div className='d-flex flex-row justify-content-star align-items-star gap-1'>
                <p className='m-0' style={{ color: `${color}` }}>Altura:</p>
                <p className='m-0'>{dataBundledProductVersions[idOptionVersion][productFormat].height}</p>
                <p className='m-0'>cm</p>
              </div>
              <div className='d-flex flex-row justify-content-star align-items-star gap-1'>
                <p className='m-0' style={{ color: `${color}` }}>Largura:</p>
                <p className='m-0'>{dataBundledProductVersions[idOptionVersion][productFormat].width}</p>
                <p className='m-0'>cm</p>
              </div>
              <div className='d-flex flex-row justify-content-star align-items-star gap-1'>
                <p className='m-0' style={{ color: `${color}` }}>Comprimento:</p>
                <p className='m-0'>{dataBundledProductVersions[idOptionVersion][productFormat].length}</p>
                <p className='m-0'>cm</p>
              </div>
              <div className='d-flex flex-row justify-content-star align-items-star gap-1'>
                <p className='m-0' style={{ color: `${color}` }}>Peso:</p>
                <p className='m-0'>{dataBundledProductVersions[idOptionVersion][productFormat].weight}</p>
                <p className='m-0'>g</p>
              </div>
            </div>
          </div>
        </div>
      }

      <Footer colorIsDarkOrLight={colorIsDarkOrLight} color={color} colorIsWhiteOrBlack={colorIsWhiteOrBlack} />
    </div >
  )
}

export default ProductDetail