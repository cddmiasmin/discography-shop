import React, {useEffect} from 'react'

import Header from '../../components/Header/Header'
import PromotionalBanner from '../../components/PromotionalBanner/PromotionalBanner'
import ListAlbunsShowcase from '../../components/ListAlbunsShowcase/ListAlbunsShowcase'
import ReleasesShowcase from '../../components/ReleasesShowcase'
import Footer from '../../components/Footer/Footer'

import { dataArtist } from '../../data/dataArtist'
import { dataPromotionalBanner } from '../../data/dataPromotionalBanner'

import './showcase.css'

const Showcase = () => {
  useEffect(() => { 
    document.body.style.setProperty('--colorIsWhiteOrBlack', 'white')
    document.body.style.setProperty('--color', 'black')
  });
  
  return (
    <div
      className='container-showcase
      container-fluid d-flex flex-column justify-content-center align-items-center w-100 h-100 position-absolute'
    >
      <div className='d-flex justify-content-center align-items-center w-100 h-100 position-absolute'>
        <PromotionalBanner />
        <Header colorIsDarkOrLight={'light'} color={'black'} colorIsWhiteOrBlack={'white'}/>
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
            <ReleasesShowcase data={dataPromotionalBanner[1]}/>
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
        <Footer colorIsDarkOrLight={'dark'} color={'white'} colorIsWhiteOrBlack={'black'}/>
      </div>
    </div>
  )
}

export default Showcase