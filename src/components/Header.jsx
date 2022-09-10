import React from 'react'
import Logo from '../components/Logo'
import { Link } from 'react-router-dom'
import { BsFillBagFill } from 'react-icons/bs';
import { IoPerson } from 'react-icons/io5'
import { HiSearch } from 'react-icons/hi'

const Header = (props) => {
  return (
    <header
      className={`flex-row container-fluid d-flex position-absolute top-0 start-0
                  justify-content-center align-items-center text-${props.color}`}
      style={{ height: '10%', width: '100%' }}>
      <div className='col d-flex justify-content-star align-items-center ms-4 gap-4'>
        <Link to='/artista' className={`text-decoration-none text-${props.color}`}>ARTISTAS</Link>
        <Link to='/formato' className={`text-decoration-none text-${props.color}`}>FORMATOS</Link>
        <Link to='/prevenda' className={`text-decoration-none text-${props.color}`}>PRÉ-VENDA</Link>
      </div>

      <div className='col d-flex justify-content-center align-items-center'>
        <Logo size={55} color={props.color}/>
      </div>

      <div className='col d-flex justify-content-end align-items-center me-4 gap-4'>
        <div>
          <HiSearch />
        </div>
        <IoPerson />
        <BsFillBagFill />
      </div>
    </header>
  )
}

export default Header