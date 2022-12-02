import React, { useContext, useEffect } from 'react'
import { ColorContext } from '../contexts/ColorContext'

import Logo from './../components/Logo';

const NotFound = () => {

  const { getColor, colorIsWhiteOrBlack } = useContext(ColorContext);

  useEffect(() => getColor('', true));

  return (
    <div className={`flex-column w-100 h-100 d-flex justify-content-center align-items-center text-${colorIsWhiteOrBlack} gap-3 p-4`}
      style={{ backgroundColor: '#020202' }}
    >
      <Logo size={80}/>
      <img 
        style={{width: '50vh', height: '50vh'}}
        className='rounded-circle'
        src="https://i.makeagif.com/media/12-06-2015/wm6Fo7.gif" 
        alt="404" 
      />
      <h1>404</h1>
      <h3>PÁGINA NÃO ENCONTRADA</h3>
    </div>
  )
}

export default NotFound