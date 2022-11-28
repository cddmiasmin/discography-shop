import React, { useEffect, useRef, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'

import ReactImageMagnify from 'react-image-magnify';

import './productDetail.css';

import Header from './../../components/Header/Header'
import Loading from './../../components/Loading'
import Footer from './../../components/Footer/Footer'
import LetMeKnowWhenItArrives from '../../components/LetMeKnowWhenItArrives/LetMeKnowWhenItArrives'

import { ColorContext } from '../../contexts/ColorContext';

import { Link } from 'react-router-dom'
import { _ } from 'lodash'
import api from '../../services/api';

import {
  BsFacebook, BsInstagram, BsTwitter, BsWhatsapp,
} from 'react-icons/bs'

const ProductDetail = () => {

  const { artist } = useParams();
  const { album } = useParams();

  const optionVersionAlbumRef = useRef([]);
  const optionFormatRef = useRef([]);

  const [pageData, SetPageData] = useState([]);
  const [dataProductsGroupedByVersion, SetDataProductsGroupedByVersion] = useState([]);
  const [dataGroupedProductImages, SetDataGroupedProductImages] = useState(1);

  const [formatStockAvailable, SetFormatStockAvailable] = useState([]);

  const [optionVersionAlbum, SetOptionVersionAlbum] = useState(0);
  const [idOptionVersion, SetIdOptionVersion] = useState(0);
  const [productPhoto, SetProductPhoto] = useState(0);
  const [productFormat, SetProductFormat] = useState(0);
  const [releaseDateAlbum, SetReleaseDateAlbum] = useState(0);
  const [letMeKnowWhenItArrivesModalIsOpen, SetLetMeKnowWhenItArrivesModalIsOpen] = useState(false);

  const nameFormat = ['CD', 'CASSETE', 'BOX', 'DVD', 'VINIL'];
  const today = new Date(Date.now());

  const {
    color,
    colorIsDarkOrLight,
    colorIsWhiteOrBlack,
    getColor
} = useContext(ColorContext);

  const HowIsTheStockOfFormats = (data) => {
    const formatStockAvailableAux = _.groupBy(data, (format) => {
      return format.situation
    })

    SetFormatStockAvailable(formatStockAvailableAux);
  }

  const GroupingProductVersions = (data) => {
    const dataProductAlbumAux = _.groupBy(data, (product) => {
      return product.version
    })

    SetDataProductsGroupedByVersion(dataProductAlbumAux);
  }

  const GroupingImagesProductByProduct = (data) => {
    let groupedProductImagesAux;

    if (data.length !== 0)
      groupedProductImagesAux = _.groupBy(data, (product) => {
        return product.product
      })
    else groupedProductImagesAux = 0;

    SetDataGroupedProductImages(groupedProductImagesAux);
  }

  const StyleChangeOptionVersion = () => {
    getColor(pageData.versions[optionVersionAlbum].cover);
    optionVersionAlbumRef.current[optionVersionAlbum].classList.add('optionVersionAlbumSelected');
  }

  const StyleChangeOptionFormat = () => {
    optionFormatRef.current[productFormat].classList.add('productFormatSelected');
  }

  useEffect(() => {
    api.get(`/product/detail/${artist}/${album}`).then((response) => {
      SetPageData(response.data.result);
    });
    if (optionFormatRef.current[productFormat] !== undefined)
    StyleChangeOptionFormat();
  }, []);

  useEffect(() => HowIsTheStockOfFormats(dataProductsGroupedByVersion[idOptionVersion]), [idOptionVersion]);

  useEffect(() => {
    if (pageData.length !== 0) StyleChangeOptionVersion();
  }, [optionVersionAlbum])

  useEffect(() => {
    if (optionFormatRef.current[productFormat] !== undefined)
    StyleChangeOptionFormat();
  }, [productFormat]);

  useEffect(() => {
    if (pageData.length !== 0) {

      let releaseDateAux = new Date(pageData.album.releaseDate);
      SetReleaseDateAlbum(releaseDateAux);

      StyleChangeOptionVersion();
      GroupingProductVersions(pageData.products);
      GroupingImagesProductByProduct(pageData.images);
      SetIdOptionVersion(pageData.versions[0].code);
      HowIsTheStockOfFormats(dataProductsGroupedByVersion[idOptionVersion]);
    }
  }, [pageData]);


  if (pageData.length === 0 ) {
    return (<Loading />);
  }

  //console.log(pageData.album);
  //console.log(pageData);
  //console.log(stockDate);
  //console.log(formatStockAvailable);
  //console.log(pageData.versions[1]);
  //console.log(optionVersionAlbumRef);
  //console.log(dataProductsGroupedByVersion[idOptionVersion][productFormat])
  //console.log(productFormat);
  //console.log(optionFormatRef.current[productFormat])

  return (
    <div className={`flex-column w-100 h-100 d-flex justify-content-center align-items-center text-${colorIsWhiteOrBlack}`}
      style={{ backgroundColor: '#020202'}}
    >
      <Header colorIsDarkOrLight={colorIsDarkOrLight} color={color} colorIsWhiteOrBlack={colorIsWhiteOrBlack} />
      <div
        className='d-flex flex-column justify-content-center align-items-center text-center w-100 h-25 '
        style={{ backgroundColor: `${color}`, 'paddingTop': '10vh' }}
      >
        <h1 className='fs-1 m-0'>{pageData.album.albumName}</h1>
        {releaseDateAlbum > today &&
          <Link to={`/prevenda`} className={`fs-3 text-decoration-none text-${colorIsWhiteOrBlack}`}>PRÉ-VENDA</Link>
        }
        <Link to={`/perfil/${pageData.artist.artistSlug}`} className={`text-decoration-none text-${colorIsWhiteOrBlack}`}>{pageData.artist.artistName}</Link>
      </div>

      {releaseDateAlbum > today &&
        <div className='d-flex justify-content-center align-items-center w-100'
          style={{ borderBottom: '2px solid var(--color)' }}
        >
          <h5 style={{ color: 'var(--color)', marginTop: '1.5vh' }}>
            LANÇAMENTO EM {pageData.album.releaseDateFormated}
          </h5>
        </div>
      }

      <div
        className='d-flex gap-4 flex-row justify-content-center align-items-center'
        style={{ width: '85%', margin: '2.7vh' }}
      >
        <a
          className={`d-flex justify-content-center align-items-center text-decoration-none text-${colorIsWhiteOrBlack} rounded-circle`}
          style={{ width: '40px', height: '40px', backgroundColor: `${color}` }}
          href="https://www.facebook.com">
          <BsFacebook style={{ width: '60%', height: '60%' }} />
        </a>

        <a
          className={`d-flex justify-content-center align-items-center text-decoration-none text-${colorIsWhiteOrBlack} rounded-circle`}
          style={{ width: '40px', height: '40px', backgroundColor: `${color}` }}
          href="https://www.instagram.com">
          <BsInstagram style={{ width: '60%', height: '60%' }} />
        </a>

        <a
          className={`d-flex justify-content-center align-items-center text-decoration-none text-${colorIsWhiteOrBlack} rounded-circle`}
          style={{ width: '40px', height: '40px', backgroundColor: `${color}` }}
          href="https://twitter.com/home">
          <BsTwitter style={{ width: '60%', height: '60%' }} />
        </a>

        <a
          className={`d-flex justify-content-center align-items-center text-decoration-none text-${colorIsWhiteOrBlack} rounded-circle`}
          style={{ width: '40px', height: '40px', backgroundColor: `${color}` }}
          href="https://www.youtube.com">
          <BsWhatsapp style={{ width: '60%', height: '60%' }} />
        </a>
      </div>

      <div
        className='container-fluid d-flex gap-4 flex-wrap h-75 w-100 justify-content-center align-items-center'
        style={{ marginBottom: '5vh' }}
      >
        <div
          className='d-flex gap-1 flex-column justify-content-center align-items-center rounded'
          style={{ backgroundColor: `${color}`, minHeight: '52.5vh', width: '37vh' }}
        >
          <h6 className='m-0'>Escolha a versão ou capa</h6>
          <div className='d-flex w-100 flex-row gap-2 justify-content-center align-items-center' >
            {pageData.versions.map((option, key) => (
              <button
                key={key}
                className={`rounded-circle d-flex justify-content-center align-items-center`}
                style={{ color: `${color}`, backgroundColor: `${colorIsWhiteOrBlack}`, height: '4vh', width: '4vh', cursor: 'point' }}
                ref={b => optionVersionAlbumRef.current[key] = b}
                onClick={() => {
                  if (option.code === idOptionVersion) return;
                  optionVersionAlbumRef.current[optionVersionAlbum].classList.remove('optionVersionAlbumSelected');
                  SetOptionVersionAlbum(key);
                  SetIdOptionVersion(option.code);
                  SetProductFormat(0);
                  SetProductPhoto(0);
                }}
              >
                {key + 1}
              </button>
            ))}
          </div>

          <img
            className='rounded'
            style={{ height: '35vh', width: '35vh' }}
            src={pageData.versions[optionVersionAlbum].cover} alt='Imagem do album'
          />

          <h4 align="center" className='m-0'>{pageData.versions[optionVersionAlbum].description}</h4>
        </div>

        <div
          className='d-flex gap-5 flex-column justify-content-center align-items-center'
          style={{ color: `${color}`, width: '35vh' }}
        >
          {formatStockAvailable['1'] !== undefined &&
            <div className='d-flex flex-column justify-content-center align-items-center'>
              <h2 className='m-0' align='center'>{releaseDateAlbum > today ? 'DISPONÍVEL' : 'COM ESTOQUE'}</h2>
              <div style={{ backgroundColor: `${color}`, height: '1vh', width: '35vh', marginBottom: '2vh' }} />
              <div className='d-flex flex-wrap gap-1 justify-content-center align-items-center'>
                {formatStockAvailable['1'].map((format, key) => (
                  <button
                    key={key}
                    onClick={() => {
                      if(productFormat === key) return;
                      optionFormatRef.current[productFormat].classList.remove('productFormatSelected');
                      SetProductFormat(key);
                      SetProductPhoto(0);
                    }}
                    ref={b => optionFormatRef.current[key] = b}
                    className={`fs-4 rounded d-flex justify-content-center align-items-center`}
                    style={{ color: 'var(--color)', backgroundColor: 'transparent',
                            border: '2px solid var(--color)',  height: '6vh', width: '12vh', cursor: 'point' }}
                  >
                    {nameFormat[format.format - 1]}
                  </button>
                ))}
              </div>
            </div>
          }

          {formatStockAvailable['0'] !== undefined &&
            <div className='d-flex flex-column justify-content-center align-items-center w-100'>
              <h2 className='m-0' align='center'>{releaseDateAlbum > today ? 'EM BREVE' : 'SEM ESTOQUE'}</h2>
              <div style={{ backgroundColor: `${color}`, height: '1vh', width: '35vh', marginBottom: '2vh' }} />
              <div className='d-flex flex-wrap gap-1 justify-content-center align-items-center'>
                {formatStockAvailable['0'].map((format, key) => (
                  <button
                    key={key}
                    className={`fs-4 rounded d-flex justify-content-center align-items-center`}
                    style={{ color: 'var(--color)', backgroundColor: 'transparent',
                    border: '2px solid var(--color)',  height: '6vh', width: '12vh', cursor: 'default' }}
                  >
                    {nameFormat[format.format - 1]}
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
              style={{ color: `${color}`, width: '45vh', border: `1px solid ${color}`, minHeight: '52.5vh' }}
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
                    className='rounded' style={{ width: '5.5vh', height: '5.5vh', cursor: 'pointer', border: `1px solid ${color}` }} />
                )}
              </div>
            </div>

            <div
              className='d-flex gap-5 flex-column justify-content-center align-items-center'
              style={{ color: 'white', width: '35vh', marginBottom: '2vh' }}
            >
              <div className='d-flex flex-column justify-content-center align-items-center'>
                {releaseDateAlbum > today && <h5 align='center'>PREVISÃO DE ESTOQUE <br /> {dataProductsGroupedByVersion[idOptionVersion][productFormat].addedFormated}</h5>}
                <h1 className='m-3' style={{ fontSize: '10vh' }}>{dataProductsGroupedByVersion[idOptionVersion][productFormat].price}</h1>

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
          style={{ marginTop: '1vh', marginBottom: '5vh', width: '85%', color: 'white' }}
        >
          <h1 className='d-flex justify-content-center align-items-center' style={{ color: 'var(--color)' }}>CONHEÇA ESSE PRODUTO</h1>
          <div className='rounded w-100' style={{ height: '0.5vh', backgroundColor: 'var(--color)' }} />
          <div className='p-4 d-flex flex-column justify-content-center align-items-center gap-2' >
            <p dangerouslySetInnerHTML={{ __html: formatStockAvailable[1][productFormat].description }} className="w-100 text-decoration-none" align="justify" />

            <div className='d-flex flex-column justify-content-center align-items-star w-100'>
              <h4 style={{ color: 'var(--color)' }}>ESPECIFICAÇÕES</h4>
              <div className='d-flex flex-row justify-content-star align-items-star gap-1'>
                <p className='m-0' style={{ color: `${color}` }}>Altura:</p>
                <p className='m-0'>{formatStockAvailable[1][productFormat].height}</p>
                <p className='m-0'>cm</p>
              </div>
              <div className='d-flex flex-row justify-content-star align-items-star gap-1'>
                <p className='m-0' style={{ color: `${color}` }}>Largura:</p>
                <p className='m-0'>{formatStockAvailable[1][productFormat].width}</p>
                <p className='m-0'>cm</p>
              </div>
              <div className='d-flex flex-row justify-content-star align-items-star gap-1'>
                <p className='m-0' style={{ color: `${color}` }}>Comprimento:</p>
                <p className='m-0'>{formatStockAvailable[1][productFormat].length}</p>
                <p className='m-0'>cm</p>
              </div>
              <div className='d-flex flex-row justify-content-star align-items-star gap-1'>
                <p className='m-0' style={{ color: `${color}` }}>Peso:</p>
                <p className='m-0'>{formatStockAvailable[1][productFormat].weight}</p>
                <p className='m-0'>g</p>
              </div>
            </div>
          </div>
        </div>
      }
      <Footer />
    </div >
  )
}

export default ProductDetail