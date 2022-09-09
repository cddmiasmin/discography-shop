import React, { useEffect } from 'react'
import './style.css'
import Header from './../components/Header'
import Footer from './../components/Footer'
import { dataArtist } from './../data/dataArtist'

import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { BsFillShareFill } from 'react-icons/bs'
import { TbShoppingCart } from 'react-icons/tb'

const ProductDetail = () => {

  const getColorAvageImageIcon = (imageIcon, ratio) => {
    const canvas = document.createElement('canvas');

    let height = canvas.height = imageIcon.height;
    let width = canvas.width = imageIcon.width;

    const context = canvas.getContext('2d');
    context.drawImage(imageIcon, 0, 0);

    let data, length;
    let i = -4, count = 0;

    try {
      data = context.getImageData(0, 0, width, height);
      length = data.data.length;
    } catch (error) {
      console.error(error)
      return {
        R: 0,
        G: 0,
        B: 0
      }
    }

    let R, G, B;
    R = G = B = 0

    while ((i += ratio * 4) < length) {
      ++cont;

      R += data.data[i];
      G += data.data[i + 1];
      B += data.data[i + 2];
    }

    R = ~~(R / count);
    G = ~~(G / count);
    B = ~~(B / count);

    return {
      R, G, B
    }
  }

  const styleBackgroundBanner = () => {

    const image = document.getElementById('image');

    console.log(image)
    const { R, G, B } = getColorAvageImageIcon(image, 4);

    return {
      'background-color': 'radial-gradient(rbg(' + { R } + ',' + { G } + ',' + { B } + '), transparent)'
    }
  }

  const style = {
    'background-image': 'linear-gradient(to right, Black 75%,  transparent)',
    'padding-right': '30vh',
  }

  return (
    <div className='w-100 h-100 d-flex justify-content-center align-items-center position-absolute'>
      <div className='w-100 h-100 d-flex position-absolute top-0 flex-column justify-content-star align-items-center position-relative'>
        <div
          className='w-100 d-flex justify-content-end position-relative'
          style={{ height: '52vh' }}>

          <div className='w-100 h-100 d-flex justify-content-end position-absolute'>
            <img id="image" className='h-100 w-25' src={dataArtist[0].icon} alt="" />
          </div>

          <div className='flex-row w-100 h-100 position-absolute d-flex justify-content-star align-items-end gap-5 ps-5'
            style={style}>
            <div className='h-100 flex-column d-flex justify-content-center align-items-center'>
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
              style={{ height: '240px', width: '240px', marginBottom: '3vh' }}
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