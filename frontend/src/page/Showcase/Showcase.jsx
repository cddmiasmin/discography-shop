import React, {useEffect, useState, useContext} from 'react'

import Header from '../../components/Header/Header'
import PromotionalBanner from '../../components/PromotionalBanner/PromotionalBanner'
import ListAlbunsShowcase from '../../components/ListAlbunsShowcase/ListAlbunsShowcase'
import ReleasesShowcase from '../../components/ReleasesShowcase'
import Footer from '../../components/Footer/Footer'

import Axios from 'axios';
import { dataArtist } from '../../data/dataArtist'
import { dataPromotionalBanner } from '../../data/dataPromotionalBanner'
import { ColorContext } from '../../contexts/ColorContext'

import './showcase.css'

const Showcase = () => {

  const [listAlbums, SetListAlbums] = useState();

  const {
    getColor
} = useContext(ColorContext);

  useEffect(() => { 
    // Axios.get("http://localhost:3000/api/albums").then((response) =>  {
    //   SetListAlbums(response.data.result)
    // });
    getColor('', true);
  });

  console.log(JSON.parse(localStorage.getItem('user')))
  return (
    <div
      className='container-showcase
      container-fluid d-flex flex-column justify-content-center align-items-center w-100 h-100 position-absolute'
    >
      <div className='d-flex justify-content-center align-items-center w-100 h-100 position-absolute'>
        <PromotionalBanner />
        <Header/>
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
        <Footer/>
      </div>
    </div>
  )
}

export default Showcase