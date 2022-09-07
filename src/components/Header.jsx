import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
      <header 
        className='row container-fluid d-flex justify-content-center align-items-center position-absolute top-0
                  bg-black'
        style={{height: "70px"}}
      >
        <div className='col'>
          <Link to="/artista" className='text-decoration-none text-white ms-3 me-3'>ARTISTAS</Link>
          <Link to="/formato" className='text-decoration-none text-white me-3'>FORMATOS</Link>
          <Link to="/prevenda" className='text-decoration-none text-white me-3'>PRÉ-VENDA</Link>
        </div>

        <div 
          className='col'
        >
          <img 
            src="src/assets/images/logo.png" alt="" 
            style={{width: '55px', height: '45px'}}
          />
        </div>

      </header>
    )
}

export default Header