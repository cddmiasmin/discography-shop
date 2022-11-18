import React, { useEffect, useState, useRef } from 'react';

import './format.css';

import Loading from '../../components/Loading';
import Header from './../../components/Header/Header';
import Album from './../../components/Album/Album';
import Footer from './../../components/Footer/Footer';

import api from '../../services/api';

import { dataOptionsToSortBy } from './../../data/dataOptionsToSortBy'
import { useGetColor } from './../../functions/useGetColor';
import { useChooseBackgroundImage } from './../../functions/useChooseBackgroundImage';

import { _ } from 'lodash';

const Formats = () => {

  const [dataFormats, SetDataFormats] = useState([]);
  const [dataAlbum, SetDataAlbum] = useState([]);
  const [dataSortedData, SetSortedData] = useState([]);

  const [optionFormatSelected, SetOptionFormatSelected] = useState(0);
  const [sortingOptionSelected, SetSortingOptionSelected] = useState(dataOptionsToSortBy[0].value);

  useEffect(() => {
    api.get(`/formats`).then((response) => {
      SetDataFormats(response.data.result);
    });

    SetBannerInPortraitOrLandscapeMode(data.landscape);
    ChooseImageForTheBanner();
    getColor(bannerInPortraitOrLandscapeMode[imageNumber].imgUrl);

  }, []);

  useEffect(() => {
    if (dataFormats.length !== 0) {
      SetOptionFormatSelected(dataFormats[0].code);
    }
  }, [dataFormats]);

  const SortAlbumByChoiceSortBy = () => {
    let sortedDataAux;

    if (sortingOptionSelected === 'date-recent')
      sortedDataAux = _.orderBy(dataAlbum, ['releaseDate', 'albumName'], ['desc', 'asc']);
    else if (sortingOptionSelected === 'date-old')
      sortedDataAux = _.orderBy(dataAlbum, ['releaseDate', 'albumName'], ['asc', 'asc']);
    else if (sortingOptionSelected === 'biggest-price')
      sortedDataAux = _.orderBy(dataAlbum, ['price', 'albumName'], ['desc', 'asc']);
    else if (sortingOptionSelected === 'lowest-price')
      sortedDataAux = _.orderBy(dataAlbum, ['price', 'albumName'], ['asc', 'asc']);
    else if (sortingOptionSelected === 'album-a-z')
      sortedDataAux = _.orderBy(dataAlbum, ['albumName','artistName'], ['asc', 'asc']);
    else if (sortingOptionSelected === 'album-z-a')
      sortedDataAux = _.orderBy(dataAlbum, ['albumName','artistName'], ['desc', 'asc']);
    else if (sortingOptionSelected === 'artist-a-z')
      sortedDataAux = _.orderBy(dataAlbum, ['artistName','albumName'], ['asc', 'asc']);
    else
      sortedDataAux = _.orderBy(dataAlbum, ['artistName','albumName'], ['desc', 'asc']);
      
    SetSortedData(sortedDataAux);
  }

  useEffect(() => {
    if (dataAlbum.length !== 0) SortAlbumByChoiceSortBy()
  }, [dataAlbum, sortingOptionSelected]);

  useEffect(() => {

    api.get(`/format/${optionFormatSelected}`).then((response) => {
      SetDataAlbum(response.data.result);
    });

  }, [optionFormatSelected]);

  const {
    color,
    colorIsDarkOrLight,
    colorIsWhiteOrBlack,
    getColor,
  } = useGetColor();

  const {
    data,
    imageNumber,
    bannerInPortraitOrLandscapeMode,
    SetBannerInPortraitOrLandscapeMode,
    ChooseImageForTheBanner,
  } = useChooseBackgroundImage();

  if (!dataFormats.length  || !dataAlbum.length  || !dataSortedData.length ) {
    return (<Loading />)
  }

  return (
    <div className='w-100 h-100 d-flex justify-content-center align-items-center flex-column bg-black'>

      <div id='bg-formats'
        style={{
          backgroundImage: `url(${bannerInPortraitOrLandscapeMode[imageNumber].imgUrl})`,
          width: '100%', height: '30vh', backgroundPosition: 'center', backgroundSize: 'cover',
          opacity: '28%', borderRadius: '0px 0px 15px 15px', borderBottom: '3px solid var(--color)',
          marginBottom: '4vh'
        }} />

      <Header colorIsDarkOrLight={'light'} color={color} colorIsWhiteOrBlack={'white'} />
      <div id='container-formats' className='fs-1 d-flex w-100 flex-column justify-content-end align-items-center position-absolute'
        style={{ color: 'white', top: '15vh', zIndex: '2' }}
      > FORMATOS </div>
      <div
        className='d-flex flex-wrap justify-content-center align-items-center'
        style={{ marginBottom: '3vh', width: '70%', gap: '5vh' }}
      >
        <div className='d-flex flex-wrap flex-column gap-1 justify-content-center align-items-center'>
          <h3 className='m-0'>O formato:</h3>
          <div className="select m-2 d-flex justify-content-center align-items-center">
            <select
              className='w-100 h-100' name="format" id="format"
              onChange={(e) => {
                const code = e.target.value;
                if (code === optionFormatSelected) return;
                else SetOptionFormatSelected(code);
              }}
              defaultValue={optionFormatSelected}
            >
              {dataFormats.map((format, key) => (
                <option
                  //ref={el => selectOptionRef.current[key] = el}
                  key={key} value={format.code}
                >
                  {format.format}
                </option>
              ))}
            </select>
          </div>
        </div>
        <p>⚪</p>
        <div className='d-flex flex-wrap flex-column gap-1 justify-content-center align-items-center'>
          <h3 className='m-0'>Ordenado por:</h3>
          <div className="select m-2 d-flex justify-content-center align-items-center">
            <select
              className='w-100 h-100' name="format" id="format"
              onChange={(e) => {
                const code = e.target.value;
                if (code === optionFormatSelected) return;
                else SetSortingOptionSelected(code);
              }}
              defaultValue={optionFormatSelected}
            >
              {dataOptionsToSortBy.map((option, key) => (
                <option
                  //ref={el => selectOptionRef.current[key] = el}
                  key={key} value={option.value}
                >
                  {option.option}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className={`rounded `} style={{ backgroundColor: 'var(--color)', height: '0.5vh', width: '80%' }} />
      <div className='d-flex flex-wrap justify-content-center align-items-end gap-4' style={{ marginTop: '4vh', marginBottom: '4vh', width: '85%' }}>
        {dataSortedData.map((album, key) =>
          <Album
            key={key}
            cover={album.cover}
            artist={album.artistName}
            name={album.albumName}
            year={album.releaseDate}
            slugArtist={album.artistSlug}
            slugAlbum={album.albumSlug}
          />
        )}
      </div>
      <Footer colorIsDarkOrLight={colorIsDarkOrLight} color={color} colorIsWhiteOrBlack={colorIsWhiteOrBlack} />
    </div>
  )
}

export default Formats
