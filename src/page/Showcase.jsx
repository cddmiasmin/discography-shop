import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import PromotionalBanner from '../components/PromotionalBanner'
import ListAlbunsShowcase from '../components/ListAlbunsShowcase'

import { dataArtist } from './../data/dataArtist'

import './styles/showcase.css'

const Showcase = () => {
  return (
    <div
      className='container-showcase
      container-fluid d-flex flex-column justify-content-center align-items-center w-100 h-100 position-absolute'
    >
      <div className='d-flex justify-content-center align-items-center w-100 h-100 position-absolute'>
        <PromotionalBanner />
        <Header colorIsDarkOrLight={'light'} color={'black'} colorIsWhiteOrDark={'white'}/>
      </div>

      <div className='d-flex flex-column justify-content-center align-items-center w-100 top-100 position-absolute m-5'>

        <div className='d-flex flex-column justify-content-center align-items-center w-75'>
          <div className='d-flex flex-column justify-content-center align-items-center w-100 m-2'>
            <h1>PRÉ-VENDA</h1>
            <ListAlbunsShowcase data={dataArtist[1]} />
          </div>
          <br />

          <div className='d-flex flex-column justify-content-center align-items-center w-100 m-2'>
            <h1>LANÇAMENTOS</h1>
            <ListAlbunsShowcase data={dataArtist[1]} />
          </div>
          <br />

          <div className='d-flex flex-column justify-content-center align-items-center w-100 m-2'>
            <h1>NACIONAL</h1>
            <ListAlbunsShowcase data={dataArtist[1]} />
          </div>

          <br />
          <div className='d-flex flex-column justify-content-center align-items-center w-100 m-2'>
            <h1>MAIS VENDIDOS</h1>
            <ListAlbunsShowcase data={dataArtist[1]} />
          </div>
        </div>
        <br />
        <Footer colorIsDarkOrLight={'light'} color={'black'} colorIsWhiteOrDark={'white'}/>
      </div>
    </div>
  )
}

export default Showcase