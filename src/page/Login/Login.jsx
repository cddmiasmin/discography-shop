import React from 'react'
import './login.css'

const Login = () => {
  return (
    <div className='d-flex position-absolute w-100 h-100 justify-content-center align-items-center bg-transparent'>

      <video autoPlay loop muted className='bg-video'> 
        <source src="src/assets/backgrounds/video1.mp4" type="video/mp4"/>
      </video>

      <div className='card-login w-50 h-100 d-flex justify-content-center align-items-center '>
        IASMIN
      </div>

    </div>
  )
}

export default Login