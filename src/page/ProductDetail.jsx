import React, { useEffect, useState } from 'react'
import './style.css'
import Header from './../components/Header'
import Footer from './../components/Footer'
import { dataArtist } from './../data/dataArtist'
import { FastAverageColor } from 'fast-average-color';

import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { BsFillShareFill } from 'react-icons/bs'
import { TbShoppingCart } from 'react-icons/tb'

const ProductDetail = () => {
  const [color, setColor] = useState('#0000');
  const [colorIsDark, setColorIsDark] = useState(false);

  const getColor = () => {
    const fac = new FastAverageColor();
    fac.getColorAsync(dataArtist[0].album[4].cover)
        .then(color => {
            setColor(color.hex)
            setColorIsDark(color.isDark)
        })
        .catch(e => {
            
        });

  }
  
  getColor()

  console.log(color);
  console.log(colorIsDark);
  const style = {
    'paddingRight': '30vh',
    'backgroundImage': 'linear-gradient(to right, '+color+' 75%,  transparent)'
  }

  return (
    <div className='w-100 h-100 d-flex justify-content-center align-items-center position-absolute'>
      <div className='w-100 h-100 d-flex position-absolute top-0 flex-column justify-content-star align-items-center position-relative'>
        <div
          className='w-100 d-flex justify-content-end position-relative'
          style={{ height: '52vh' }}>

          <div id="image-container" className=' w-100 h-100 d-flex justify-content-end position-absolute'>
            <img id="image" className='h-100 w-25' src={dataArtist[0].icon} alt="" />
          </div>


          <div className='flex-row w-100 h-100 position-absolute d-flex justify-content-star align-items-end gap-5 p-4'
            style={style}>
            <div className='h-75 flex-column d-flex justify-content-center align-items-center ps-5'>
              <h1>{dataArtist[0].album[4].name}</h1>
              <h3>{dataArtist[0].name}</h3>
              <h6>{dataArtist[0].album[4].year}</h6>
              <div className='mt-3 flex-row d-flex justify-content-center align-items-center gap-4'>
                <AiOutlineHeart style={{ 'color': 'white', height: '3vh', width: '3vh' }} />
                <TbShoppingCart style={{ 'color': 'white', height: '3vh', width: '3vh' }} />
                <BsFillShareFill style={{ 'color': 'white', height: '2vh', width: '2vh' }} />
              </div>
            </div>

            <img
              style={{ height: '240px', width: '240px' }}
              src={dataArtist[0].album[4].cover}
              alt=""
            />
          </div>
        </div>
      </div>
      <Header />
    </div>
  )
}

export default ProductDetail