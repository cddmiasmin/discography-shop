import React, { useState, useEffect, useContext } from 'react'

import './../style/selectOptionSortBy.css';

import Loading from '../components/Loading';
import Header from '../components/Header/Header';
import Album from '../components/Album/Album';
import Pagination from '../components/Pagination/Pagination';
import Footer from '../components/Footer/Footer';

import api from './../services/api';

import { dataOptionsToSortBy } from '../data/dataOptionsToSortBy';

import { useChooseBackgroundImage } from '../functions/useChooseBackgroundImage';
import { ColorContext } from '../contexts/ColorContext'; 
import { usePagination } from '../functions/usePagination';
import { useSortBy } from '../functions/userSortBy';

const PreOrder = () => {

  const [pageData, SetpageData] = useState([]);

  useEffect(() => {
    api.get(`/albums/preorder`).then((response) => {
      SetpageData(response.data.result);
    });

    SetBannerInPortraitOrLandscapeMode(data.landscape);
    ChooseImageForTheBanner();
    getColor(bannerInPortraitOrLandscapeMode[imageNumber].imgUrl);
    fixColor('white');
  }, []);

  const {
    dataSortedData,
    sortingOptionSelected,
    SetSortingOptionSelected,
    SortAlbumByChoiceSortByForPreOrder
  } = useSortBy();

  useEffect(() =>{
    if(pageData.length !== 0) SortAlbumByChoiceSortByForPreOrder(pageData, sortingOptionSelected);
  }, [pageData, sortingOptionSelected])

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
    numberOfPages,
    currentItems,
    currentPage,
    SetCurrentPage
  } = usePagination(dataSortedData);

  // console.log('PD', pageData)
  // console.log('CI', currentItems)
  // console.log('DSD', dataSortedData)

  if (!pageData.length ||  !currentItems.length || !dataSortedData.length) {
    return (<Loading />)
  }

  return (
    <div className='w-100 h-100 d-flex justify-content-center align-items-center flex-column bg-black'>
      <div id='bg-releases'
        style={{
          backgroundImage: `url(${bannerInPortraitOrLandscapeMode[imageNumber].imgUrl})`,
          width: '100%', height: '30vh', backgroundPosition: 'center', backgroundSize: 'cover',
          opacity: '28%', borderRadius: '0px 0px 15px 15px', borderBottom: '3px solid var(--color)'
        }} />

      <Header />
      <div id='container-releases' className='d-flex w-100 flex-column justify-content-end align-items-center position-absolute'
        style={{ color: 'white', top: '15vh', zIndex: '2' }}
      >
        <h1>PRÉ-VENDA</h1>
      </div>
      <div className='d-flex flex-row gap-2 justify-content-center align-items-center p-4'>
        <h5 className='m-0'>ORDENAR POR:</h5>
        <div className="select m-2 d-flex justify-content-center align-items-center">
          <select
            className='w-100 h-100' name="format" id="format"
            onChange={(e) => SetSortingOptionSelected(e.target.value)}
            defaultValue={sortingOptionSelected}
          >
            {dataOptionsToSortBy[0].optionthree.map((option, key) => (
              <option key={key} value={option.value} >
                {option.option}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className={`rounded `} style={{ backgroundColor: 'var(--color)', height: '0.5vh', width: '85%' }} />
      <div className='d-flex flex-wrap justify-content-center align-items-end gap-5' style={{ marginTop: '4vh', marginBottom: '4vh', width: '85%' }}>
        {currentItems.map((album, key) => 
          <Album
            key={key}
            cover={album.cover}
            artist={album.artistName}
            name={album.albumName}
            date={album.releaseDateFormated}
            price={null}
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

export default PreOrder