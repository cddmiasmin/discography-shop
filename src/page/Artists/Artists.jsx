import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom';

import './artists.css'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ArtistIcon from '../../components/ArtistIcon';

import { FastAverageColor } from 'fast-average-color';

import { dataArtist } from './../../data/dataArtist'

import { useGetColor } from '../../functions/useGetColor';
import { useChooseBackgroundImage } from '../../functions/useChooseBackgroundImage';

import { _ } from 'lodash'

import { BsFillArrowUpCircleFill } from 'react-icons/bs'

const Artists = () => {

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

  const [artistColor, SetArtistColor] = useState([])

  const alphabetAndNumbers = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "123"];

  useEffect(() => {
    SetBannerInPortraitOrLandscapeMode(data.landscape);
    ChooseImageForTheBanner();
  }, [])

  useEffect(() => getColor(bannerInPortraitOrLandscapeMode[imageNumber].imgUrl))

  const SortingArtistNamesInAlphabeticalOrder = (data) => {
    const sortingArtistInAlphabeticalOrder = _.orderBy(data, ['name'], ['asc'])
    const groupArtistByLetter = _.groupBy(sortingArtistInAlphabeticalOrder, (artist) => {
      return artist.name[0]
    })

    return groupArtistByLetter;
  }

  const artistNames = SortingArtistNamesInAlphabeticalOrder(dataArtist);

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

  var cont= 0;

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
      <Header colorIsDarkOrLight={'light'} color={color} colorIsWhiteOrBlack={'white'} />
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
                  <ArtistIcon key={key} id={artist.id} color={artistColor[cont++]} name={artist.name} icon={artist.icon}/>
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
        <Footer colorIsDarkOrLight={colorIsDarkOrLight} color={color} colorIsWhiteOrBlack={colorIsWhiteOrBlack} />
      </div>
    </div >
  )
}

export default Artists