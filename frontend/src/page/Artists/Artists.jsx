import React, { useEffect, useState, useContext } from 'react'

import './artists.css'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ArtistIcon from '../../components/ArtistIcon';

import { FastAverageColor } from 'fast-average-color';

import api from './../../services/api'

import { ColorContext } from '../../contexts/ColorContext'; 
import { useChooseBackgroundImage } from '../../functions/useChooseBackgroundImage';

import { _ } from 'lodash'

import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import Loading from '../../components/Loading';

const Artists = () => {

  const {
    color,
    getColor,
} = useContext(ColorContext);

  const {
    data,
    imageNumber,
    bannerInPortraitOrLandscapeMode,
    SetBannerInPortraitOrLandscapeMode,
    ChooseImageForTheBanner,
  } = useChooseBackgroundImage();

  const [listArtists, SetListArtists] = useState([]);
  const [artistColor, SetArtistColor] = useState([]);

  const alphabetAndNumbers = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "123"];

  useEffect(() => {
    api.get("/artists").then((response) =>  {
      SetListArtists(response.data.result)
    });
    SetBannerInPortraitOrLandscapeMode(data.landscape);
    ChooseImageForTheBanner();
    getColor(bannerInPortraitOrLandscapeMode[imageNumber].imgUrl, true);
  }, [])


  const SortingArtistNamesInAlphabeticalOrder = (data) => {
    const groupArtistByLetter = _.groupBy(data, (artist) => {
      return artist.name[0]
    })

    return groupArtistByLetter;
  }

  const artistNames = SortingArtistNamesInAlphabeticalOrder(listArtists);

  useEffect(() => SetArtistColor(CollectIcons()), [artistNames]);

  const CollectIcons = () => {
    var artistColorAux = [];

    alphabetAndNumbers.map((character) => {
      if (artistNames[`${character}`] !== undefined) {
        artistNames[`${character}`].map((artist) => {
          const fac = new FastAverageColor();
          fac.getColorAsync(artist.icon)
            .then(color => {
              artistColorAux.push(color.hex)
            })
            .catch(e => {
              artistColorAux.push('#ffff')
            });
        })
      }
    })
    return artistColorAux;
  }

  var cont = 0;

  if (listArtists.length === 0) {
    return (<Loading/>)
  }

  return (
    <div
      className='d-flex flex-column w-100 h-100 justify-content-center align-items-center bg-black'
    >
      <div id='bg-artist' style={{ backgroundImage: `url(${bannerInPortraitOrLandscapeMode[imageNumber].imgUrl})` }} />
      <div id='container-artists-options' className='d-flex w-100 flex-column justify-content-end align-items-center position-absolute'
        style={{ color: 'white', height: '45vh', top: 0 }}
      >
        <div
          id='artists-options'
          className='d-flex w-100 h-100 flex-column justify-content-end align-items-center'
          style={{ marginBottom: '6vh', top: 0 }}
        >
          <h1 className='m-0 p-2'>ARTISTAS</h1>
          <div className='rounded' style={{ width: '55%', height: '0.2vh', backgroundColor: 'white' }} />
          <section
            id='#'
            className='d-flex flex-wrap justify-content-center align-items-center gap-2 p-3'
            style={{ width: '50%' }}
          >
            {alphabetAndNumbers.map((character, key) => (
              (artistNames[`${character}`] !== undefined &&
                <a href={'#' + character}
                  key={key}
                  className='option-character d-flex flex-wrap rounded justify-content-center align-items-center text-decoration-none'
                  style={{ width: '5vh', height: '5vh', color: 'black', backgroundColor: 'white' }}
                >
                  <h5 className='m-0'>{character}</h5>
                </a>
              )))}
          </section>
        </div>
      </div>
      <Header />
      <div className='d-flex w-100 flex-column justify-content-end align-items-center'>
        {alphabetAndNumbers.map((character, key) => (
          (artistNames[`${character}`] !== undefined &&
            <section
              key={key}
              id={character}
              className='d-flex w-100 flex-column flex-wrap justify-content-star align-items-center gap-2'
              style={{ marginTop: '5vh', paddingBottom: '4vh' }}
            >
              <div
                className='d-flex flex-column flex-wrap justify-content-center align-items-center gap-2'
                style={{ width: '85%', borderBottom: '1px solid white', borderRadius: '0px 0px 10px 10px' }}
              >
                <h2 className='d-flex w-100 justify-content-star align-items-center ms-4'>{character}</h2>
              </div>

              <div
                className='d-flex flex-row flex-wrap justify-content-star align-items-center gap-2'
                style={{ width: '85%' }}
              >
                {artistNames[`${character}`].map((artist, key) => (
                  <ArtistIcon size={'20vh'} key={key} code={artist.code} slug={artist.slug}
                    color={artistColor[cont++]} name={artist.name} icon={artist.icon}
                  />
                ))}
              </div>
            </section>
          )
        ))}

        <a href="#"
          className='d-flex position-fixed bottom-0 end-0 pointer m-4 text-white'
          style={{ backgroundColor: `${color}`, width: '7vh', height: '7vh', borderRadius: '50%' }}>
          <BsFillArrowUpCircleFill id='back-to-top' className='w-100 h-100' />
        </a>
        <br />
        <br />
        <br />
        <Footer />
      </div>
    </div >
  )
}

export default Artists