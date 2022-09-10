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
  const [colorIsDarkOrLight, setColorIsDarkOrLight] = useState('light');

  useEffect(() => {
    console.log('effetc')
  }, [colorIsDarkOrLight])

  const getColor = () => {
    const fac = new FastAverageColor();
    fac.getColorAsync('src/assets/images/dataArtist/album/Dance Fever.jpg')
      .then(color => {
        setColor(color.hex)
        if (color.isDark == false) setColorIsDarkOrLight('dark')
        console.log(color.isDark)
      })
      .catch(e => {

      });

  }

  getColor();

  const style = {
    'paddingRight': '30vh',
    'backgroundImage': 'linear-gradient(to right, ' + color + ' 75%,  transparent)'
  }

  const sccss = {
    backgroundColor: `${color}`
  }

  return (
    <div className={`w-100 h-100 d-flex justify-content-center align-items-center position-absolute text-${colorIsDarkOrLight}`} 
          style={sccss}>
      <div className='w-100 h-100 d-flex position-absolute top-0 flex-column justify-content-star align-items-center position-relative'>
        <div
          className='w-100 d-flex justify-content-end position-relative'
          style={{ height: '52vh' }}>

          <div id="image-container" className=' w-100 h-100 d-flex justify-content-end position-absolute'>
            <img id="image" className='h-100 w-25' src={'src/assets/images/dataArtist/album/Dance Fever.jpg'} alt="" />
          </div>


          <div className='flex-row w-100 h-100 position-absolute d-flex justify-content-star align-items-end gap-5 p-4'
            style={style}>
            <div className='h-75 flex-column d-flex justify-content-center align-items-center ps-5'>
              <h1>{dataArtist[0].album[4].name}</h1>
              <h3>{dataArtist[0].name}</h3>
              <h6>{dataArtist[0].album[4].year}</h6>
              <div className='mt-3 flex-row d-flex justify-content-center align-items-center gap-4'>
                <AiOutlineHeart style={{ 'color': { colorIsDarkOrLight }, height: '3vh', width: '3vh' }} />
                <TbShoppingCart style={{ 'color': { colorIsDarkOrLight }, height: '3vh', width: '3vh' }} />
                <BsFillShareFill style={{ 'color': { colorIsDarkOrLight }, height: '2vh', width: '2vh' }} />
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
      <Header color={colorIsDarkOrLight} />
    </div>
  )
}

export default ProductDetail