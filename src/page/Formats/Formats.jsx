import React from 'react'

import './formats.css'

import Header from './../../components/Header/Header'

import { Tooltip } from '@mui/material';

const Formats = () => {
  return (
    <div className='d-flex flex-column w-100 justify-content-center align-items-center'>
      <Header colorIsDarkOrLight={'light'} color={'black'} colorIsWhiteOrBlack={'white'} />

      <div className='d-flex w-100 flex-column justify-content-center align-items-center position-absolute'
        style={{ top: '15vh' }}
      >
        <div className='d-flex w-100 flex-column justify-content-center align-items-center'>
          <h1>FORMATOS</h1>
          <div
            className='d-flex row gap-1 justify-content-center align-items-center p-2'
            style={{ width: '55%', height: '15vh'}}
          >
            <div className='option-format-button col rounded d-flex justify-content-center align-items-center h-100'>
              <Tooltip id='CassetteFormatsButton' title="Cassete">
                <img
                  style={{ height: '100%', cursor: 'pointer' }}
                  src='src\assets\images\Formats\cassette-svgrepo-com.svg' alt="Formato Cassete" />
              </Tooltip>
            </div>

            <div className='option-format-button col rounded d-flex justify-content-center align-items-center h-100'>
              <Tooltip id='CDFormatsButton' title="CD">
                <img
                  style={{ height: '90%', cursor: 'pointer' }}
                  src='src\assets\images\Formats\cd-svgrepo-com.svg' alt="Formato CD" />
              </Tooltip>
            </div>

            <div className='option-format-button col rounded d-flex justify-content-center align-items-center h-100'>
              <Tooltip id='DVDFormatsButton' title="DVD">
                <img
                  style={{ height: '80%', cursor: 'pointer' }}
                  src='src\assets\images\Formats\dvd-svgrepo-com.svg' alt="Formato DVD" />
              </Tooltip>
            </div>

            <div className='option-format-button col rounded d-flex justify-content-center align-items-center h-100'>
              <Tooltip id='VinylFormatsButton' title="Vinil">
                <img
                  style={{ height: '80%', cursor: 'pointer' }}
                  src='src\assets\images\Formats\vinyl-svgrepo-com.svg' alt="Formato Vinil" />
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Formats