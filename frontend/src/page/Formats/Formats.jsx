import React, { useRef, useEffect, useState, useLayoutEffect } from 'react'

import './format.css'

import Header from './../../components/Header/Header'
import Album from './../../components/Album/Album'
import Footer from './../../components/Footer/Footer'

import api from '../../services/api'

import { useGetColor } from './../../functions/useGetColor'
import { useChooseBackgroundImage } from './../../functions/useChooseBackgroundImage'

import { _ } from 'lodash';
import Loading from '../../components/Loading'

const Formats = () => {

  const elementRefOptionFormat = useRef([]);

  const [dataFormats, SetDataFormats] = useState([]);
  const [dataAlbumByFormat, SetDataAlbumByFormat] = useState([]);
  const [dataVersionsByFormat, SetDataVersionsByFormat] = useState([]);
  const [dataArtistsByFormat, SetDataArtistsByFormat] = useState([]);

  const [versionsAlbumsGrouped, SetVersionsAlbumsGrouped] = useState(1);
  const [artistsGrouped, SetArtistsGrouped] = useState(1);
  const [optionFormatSelected, SetOptionFormatSelected] = useState(0);
  const [optionFormatSelectedOld, SetOptionFormatSelectedOld] = useState(optionFormatSelected);

  const GroupAlbumVersions = (data) => {
    const groupVersionsByAlbum = _.groupBy(data, (album) => {
      return album.album
    })
    SetVersionsAlbumsGrouped(groupVersionsByAlbum);
  }

  const GroupArtists = (data) => {
    const groupArtistsAux = _.groupBy(data, (artist) => {
      return artist.code
    })

    SetArtistsGrouped(groupArtistsAux);
  }

  // useLayoutEffect(() => {
  //   if (elementRefOptionFormat.current[optionFormatSelectedOld] !== undefined
  //       && elementRefOptionFormat.current[optionFormatSelectedOld] !== null
  //     ) {
  //       elementRefOptionFormat.current[optionFormatSelectedOld].classList.remove('selected');
  //       console.log('ANTES', optionFormatSelectedOld)
  //     //console.log(elementRefOptionFormat.current[optionFormatSelected].classList)
  //   }
  // }, [optionFormatSelectedOld]);

  useLayoutEffect(() => {
    //console.log(elementRefOptionFormat.current[optionFormatSelected-1]);
    // if (elementRefOptionFormat.current[optionFormatSelected-1] !== undefined
    //   && elementRefOptionFormat.current[optionFormatSelected-1] !== null
    // ) {
    //   elementRefOptionFormat.current[optionFormatSelected-1].classList.add('selected');
    //   console.log('DEPOIS', optionFormatSelected);
    // }
  }, [optionFormatSelected])

  useEffect(() => {
    api.get(`/formats`).then((response) => {
      SetDataFormats(response.data.result);
    });

    SetBannerInPortraitOrLandscapeMode(data.landscape);
    ChooseImageForTheBanner();
    getColor(bannerInPortraitOrLandscapeMode[imageNumber].imgUrl);

    console.log(elementRefOptionFormat.current)
    console.log(elementRefOptionFormat.current[optionFormatSelected-1]);

    if (elementRefOptionFormat.current[optionFormatSelected] !== undefined)
      elementRefOptionFormat.current[optionFormatSelected].classList.add('selected');
  }, []);

  useEffect(() => {
    if (dataFormats.length !== 0) SetOptionFormatSelected(dataFormats[0].code);
  }, [dataFormats]);

  useEffect(() => {
    api.get(`/format/albums/${optionFormatSelected}`).then((response) => {
      SetDataAlbumByFormat(response.data.result);
    });

    api.get(`/format/versions/${optionFormatSelected}`).then((response) => {
      SetDataVersionsByFormat(response.data.result);
    });

    api.get(`/format/artists/${optionFormatSelected}`).then((response) => {
      SetDataArtistsByFormat(response.data.result);
    });
  }, [optionFormatSelected]);

  useEffect(() => {
    if (dataVersionsByFormat.length !== 0) GroupAlbumVersions(dataVersionsByFormat);
  }, [dataVersionsByFormat]);

  useEffect(() => {
    if (dataArtistsByFormat.length !== 0) GroupArtists(dataArtistsByFormat);
  }, [dataArtistsByFormat]);

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

  const ChooseFormatOption = (key, code) => {
    if (code === optionFormatSelected) return;
    else {
      SetVersionsAlbumsGrouped(1);
      SetArtistsGrouped(1);
      SetOptionFormatSelectedOld(optionFormatSelected);
      SetOptionFormatSelected(code);
    }
  }

  //console.log(elementRefOptionFormat.current);
  
  //console.log(dataFormats);
  //console.log(dataAlbumByFormat);
  //console.log(dataVersionsByFormat);
  //console.log(dataArtistsByFormat);
  //console.log(versionsAlbumsGrouped);
  //console.log(versionsAlbumsGrouped[6][0].cover);
  //console.log(artistsGrouped[101][0].name);
  //console.log(optionFormatSelectedOld)
  //console.log(artistsGrouped);

  if ( dataFormats.length === 0 
    || dataAlbumByFormat.length === 0 || versionsAlbumsGrouped === 1
    || dataArtistsByFormat.length === 0 || artistsGrouped === 1
    || dataVersionsByFormat.length === 0) {
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
      <div className='w-100 d-flex flex-wrap flex-row gap-2 justify-content-center align-items-center'>
        {dataFormats.map((format, key) => (
          <div
            key={key}
            id={`format-option-${key}`}
            ref={el => elementRefOptionFormat.current[key] = el}
            onClick={() => ChooseFormatOption(key, format.code)}
            className='format-option fs-4 d-flex gap-3 justify-content-center align-items-center'
            style={{ color: 'white', width: '15vh', cursor: 'pointer' }}>
            {format.format}
          </div>
        ))}
      </div>
      <div className={`rounded `} style={{ backgroundColor: 'var(--color)', height: '0.5vh', width: '85%' }} />
      <div className='d-flex flex-wrap justify-content-center align-items-end gap-4' style={{ marginTop: '4vh', marginBottom: '4vh', width: '85%' }}>
        {dataAlbumByFormat.map((album, key) =>
          <Album
            key={key}
            cover={versionsAlbumsGrouped[album.code][0].cover}
            artist={artistsGrouped[album.artist][0].name}
            name={album.name}
            year={album.releaseDate}
            slugArtist={artistsGrouped[album.artist][0].slug}
            slugAlbum={album.slug}
          />
        )}
      </div>
      <Footer colorIsDarkOrLight={colorIsDarkOrLight} color={color} colorIsWhiteOrBlack={colorIsWhiteOrBlack} />
    </div>
  )
}

export default Formats
