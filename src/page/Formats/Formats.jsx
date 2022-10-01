import React, { useEffect, useState } from 'react'

import './formats.css'

import Header from './../../components/Header/Header'
import ListAlbunsSearch from './../../components/ListAlbunsSearch'
import Footer from './../../components/Footer'

import { dataArtist } from '../../data/dataArtist'

import { useGetColor } from './../../functions/useGetColor'

import { Tooltip } from '@mui/material';


const Formats = () => {

  const [selectedOption, SetSelectedOption] = useState('src/assets/images/Formats/cassette-svgrepo-com.svg');

  const {
    color,
    colorIsDarkOrLight,
    colorIsWhiteOrBlack,
    getColor,
  } = useGetColor();

  useEffect(() => getColor(selectedOption), [color, selectedOption])

  useEffect(() => {
    document.body.style.setProperty('--colorIsWhiteOrBlack', `${colorIsWhiteOrBlack}`);
    document.body.style.setProperty('--color', `${color}`);
  }, [color])

  const ChangeColors = (newImg) => {
    var newImgIdAux = document.getElementById(newImg).getAttribute('src');
    SetSelectedOption(newImgIdAux);
  }

  const ChangeSelectedOption = (newOption) => {
    var oldOption = document.querySelector('.selected-option');
    oldOption.classList.remove("selected-option");

    var newOptionAux = document.getElementById(newOption);
    newOptionAux.classList.add("selected-option");
  }

  const FormatOptionSelected = (imgId, option, divMother) => {
    ChangeColors(imgId);
    ChangeSelectedOption(divMother);
  }

  return (
    <div className='d-flex flex-column w-100 justify-content-center align-items-center' style={{ color: `${color}` }}>
      <Header colorIsDarkOrLight={colorIsDarkOrLight} color={color} colorIsWhiteOrBlack={colorIsWhiteOrBlack} />

      <div id='bg-header' className='w-100 position-absolute'
        style={{ height: '9vh', backgroundColor: `${color}`, borderRadius: '0 0 10px 10px', top: 0, zIndex: -1 }}
      />

      <div className='d-flex w-100 flex-column justify-content-center align-items-center position-absolute gap-2'
        style={{ top: '15vh' }}
      >
        <div className='d-flex w-100 flex-column justify-content-center align-items-center'>
          <h1>FORMATOS</h1>
          <div
            className='d-flex flex-row flex-wrap gap-1 justify-content-around align-items-center p-2 gap-2'
            style={{ width: '55%', height: '15vh' }}
          >
            <div id='cassette-mother' className='option-format-button selected-option d-flex justify-content-center align-items-center h-100'
              onClick={() => FormatOptionSelected('CassetteImg', 'CASSETE', 'cassette-mother')}
              style={{ width: '15vh', height: '100%' }}
            >
              <Tooltip id='CassetteFormatsButton' title="Cassete">
                <img
                  id='CassetteImg'
                  style={{ height: '100%', cursor: 'pointer' }}
                  src='src\assets\images\Formats\cassette-svgrepo-com.svg' alt="Formato Cassete" />
              </Tooltip>
            </div>

            <div id='cd-mother' className='option-format-button  d-flex justify-content-center align-items-center h-100'
              onClick={() => FormatOptionSelected('CDImg', 'CD', 'cd-mother')}
              style={{ width: '15vh', height: '100%' }}
            >
              <Tooltip id='CDFormatsButton' title="CD">
                <img
                  id='CDImg'
                  style={{ height: '90%', cursor: 'pointer' }}
                  src='src\assets\images\Formats\cd-svgrepo-com.svg' alt="Formato CD" />
              </Tooltip>
            </div>

            <div id='dvd-mother' className='option-format-button  d-flex justify-content-center align-items-center h-100'
              onClick={() => FormatOptionSelected('DVDImg', 'DVD', 'dvd-mother')}
              style={{ width: '15vh', height: '100%' }}
            >
              <Tooltip id='DVDFormatsButton' title="DVD">
                <img
                  id='DVDImg'
                  style={{ height: '80%', cursor: 'pointer' }}
                  src='src\assets\images\Formats\dvd-svgrepo-com.svg' alt="Formato DVD" />
              </Tooltip>
            </div>

            <div id='vinyl-mother' className='option-format-button  d-flex justify-content-center align-items-center h-100'
              onClick={() => FormatOptionSelected('VinylImg', 'VINIL', 'vinyl-mother')}
              style={{ width: '15vh', height: '100%' }}
            >
              <Tooltip id='VinylFormatsButton' title="Vinil">
                <img
                  id='VinylImg'
                  style={{ height: '80%', cursor: 'pointer' }}
                  src='src\assets\images\Formats\vinyl-svgrepo-com.svg' alt="Formato Vinil" />
              </Tooltip>
            </div>
          </div>
        </div>
        <div className='p-5 rounded' style={{ width: '80%', border: `2px solid var(--color)`, color: `${colorIsWhiteOrBlack}` }}>
          <ListAlbunsSearch data={dataArtist[0]} />
        </div>
        <br />
        <br />
        <br />
        <Footer colorIsDarkOrLight={colorIsDarkOrLight} color={color} colorIsWhiteOrBlack={colorIsWhiteOrBlack} />
      </div>

    </div>
  )
}

export default Formats