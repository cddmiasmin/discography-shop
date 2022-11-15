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

  const [dataArtist, SetDataArtist] = useState([]);
  const [dataAlbum, SetDataAlbum] = useState([]);
  const [dataVersionAlbum, SetDataVersionAlbum] = useState([]);
  const [dataProductAlbum, SetDataProductAlbum] = useState([]);
  const [dataBundledProductVersions, SetDataBundledProductVersions] = useState([]);

  const [formatStockAvailable, SetFormatStockAvailable] = useState([]);
  const [optionVersionAlbum, SetOptionVersionAlbum] = useState(0);
  const [idOptionVersion, SetIdOptionVersion] = useState(0);
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
    if (dataVersionAlbum.length !== 0) {
      getColor(dataVersionAlbum[optionVersionAlbum].cover);
      SetIdOptionVersion(dataVersionAlbum[0].code);
    }
  }, [dataVersionAlbum, optionVersionAlbum]);

  useEffect(() => {
    if (dataAlbum.length !== 0)
      api.get(`/products/${dataAlbum.cd_album}`).then((response) => {
        SetDataProductAlbum(response.data.result);
      });
  }, [dataAlbum]);

  const GroupingProductVersions = (data) => {
    const dataProductAlbumAux = _.groupBy(data, (product) => {
      return product.version
    })
    return dataProductAlbumAux;
  }

  const HowIsTheStockOfFormats = (data) => _.groupBy(data, (format) => format.situation);

  useEffect(() => {
    if (dataProductAlbum.length !== 0) {
      SetDataBundledProductVersions(GroupingProductVersions(dataProductAlbum));
      SetFormatStockAvailable(HowIsTheStockOfFormats(dataBundledProductVersions[idOptionVersion]));
    }
  }, [dataProductAlbum]);

  //console.log(dataProductAlbum);
  //console.log(dataBundledProductVersions)
  //console.log(dataAlbum);
  //console.log(dataVersionAlbum)
  //console.log(dataArtist);
  console.log(formatStockAvailable)

  const [productFormat, SetProductFormat] = useState(0);
  

  const {
    color,
    colorIsDarkOrLight,
    colorIsWhiteOrBlack,
    getColor,
  } = useGetColor();

  if (dataArtist.length === 0 || dataAlbum.length === 0 || dataBundledProductVersions.length === 0
    || dataVersionAlbum.length === 0 || dataProductAlbum.length === 0 || idOptionVersion === 0 ||
    formatStockAvailable.length === 0
    ) {
    return (<Loading />)
  }

  const ChoseAlbumCoverClick = (keyOption, codeVersion) => {
    SetOptionVersionAlbum(keyOption);
    SetIdOptionVersion(codeVersion);
  }

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
          style={{ backgroundColor: `${color}`, height: '50vh', width: '37vh' }}
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

          <h4 className='m-0'>{dataVersionAlbum[optionVersionAlbum].description}</h4>
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
                    onClick={() => SetProductFormat(key)}
                    className={`bg-${colorIsDarkOrLight} fs-4 rounded d-flex justify-content-center align-items-center`}
                    style={{ color: `${color}`, height: '6vh', width: '12vh', cursor: 'point' }}
                  >
                    {format.format}
                  </button>
                ))}
              </div>
            </div>
          }
        </div>
      </div>


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