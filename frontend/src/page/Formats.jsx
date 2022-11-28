import React, { useEffect, useState, useContext } from 'react';

import './../style/selectOptionSortBy.css';

import Loading from '../components/Loading';
import Header from '../components/Header/Header';
import Album from '../components/Album/Album';
import Pagination from '../components/Pagination/Pagination';
import Footer from '../components/Footer/Footer';

import api from '../services/api';

import { dataOptionsToSortBy } from '../data/dataOptionsToSortBy';

import { useChooseBackgroundImage } from '../functions/useChooseBackgroundImage';
import { ColorContext } from '../contexts/ColorContext';
import { usePagination } from '../functions/usePagination';
import { useSortBy } from '../functions/userSortBy';

const Formats = () => {

  const [dataFormats, SetDataFormats] = useState([]);
  const [dataAlbum, SetDataAlbum] = useState([]);

  const [optionFormatSelected, SetOptionFormatSelected] = useState(0);

  const {
    getColor,
    fixColor
} = useContext(ColorContext);

  const {
    data,
    imageNumber,
    bannerInPortraitOrLandscapeMode,
    SetBannerInPortraitOrLandscapeMode,
    ChooseImageForTheBanner,
  } = useChooseBackgroundImage();

  const {
    dataSortedData,
    sortingOptionSelected,
    SetSortingOptionSelected,
    SortAlbumByChoiceSortByForFormat
  } = useSortBy(dataAlbum);

  const {
    numberOfPages,
    currentItems,
    currentPage,
    SetCurrentPage
  } = usePagination(dataSortedData);

  useEffect(() => {
    api.get(`/formats`).then((response) => {
      SetDataFormats(response.data.result);
    });

    SetBannerInPortraitOrLandscapeMode(data.landscape);
    ChooseImageForTheBanner();
    getColor(bannerInPortraitOrLandscapeMode[imageNumber].imgUrl);
    fixColor('white');
  }, []);

  useEffect(() => {
    if (dataFormats.length !== 0) {
      SetOptionFormatSelected(dataFormats[0].code);
    }
  }, [dataFormats]);

  useEffect(() => {
    if (dataAlbum.length !== 0) SortAlbumByChoiceSortByForFormat(dataAlbum, sortingOptionSelected);
  }, [dataAlbum, sortingOptionSelected]);

  useEffect(() => {

    api.get(`/format/${optionFormatSelected}`).then((response) => {
      SetDataAlbum(response.data.result);
    });

  }, [optionFormatSelected]);


  if (!dataFormats.length || !dataAlbum.length || !dataSortedData.length || !currentItems.length) {
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

      <Header />
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
                else {
                  SetOptionFormatSelected(code);
                  SetCurrentPage(0);
                }
              }}
              defaultValue={optionFormatSelected}
            >
              {dataFormats.map((format, key) => (
                <option key={key} value={format.code}> {format.format} </option>
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
                else {
                  SetSortingOptionSelected(code);
                  SetCurrentPage(0);
                }
              }}
              defaultValue={sortingOptionSelected}
            >
              {dataOptionsToSortBy[0].optionone.map((option, key) => (
                <option key={key} value={option.value} >
                  {option.option}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className={`rounded `} style={{ backgroundColor: 'var(--color)', height: '0.5vh', width: '80%' }} />
      <div className='d-flex flex-wrap justify-content-center align-items-end gap-4' style={{ marginTop: '4vh', marginBottom: '4vh', width: '85%' }}>
        {currentItems.map((album, key) =>
          <Album
            key={key}
            cover={album.cover}
            artist={album.artistName}
            name={album.albumName}
            date={album.releaseDate}
            price={album.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
            slugArtist={album.artistSlug}
            slugAlbum={album.albumSlug}
          />
        )}
      </div>
      <Pagination numberOfPages={numberOfPages} currentPage={currentPage} SetCurrentPage={SetCurrentPage} />
      <Footer />
    </div>
  )
}

export default Formats
