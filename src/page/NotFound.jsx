import React from 'react'

import  Logo  from './../components/Logo'

const NotFound = () => {
  return (
    <div className='position-absolute flex-column w-100 h-100 d-flex justify-content-center align-items-center gap-5'>
      <Logo size={70} color={'light'}/>
      <div className='row w-100 h-70 d-flex justify-content-center align-items-center'>
        <span className='col d-flex justify-content-end' style={{fontSize: '15rem'}}>4</span>
        <img className='col' src="src\assets\images\broken-vinyl-record.png" alt="" style={{width: 'auto'}}/>
        <span className='col' style={{fontSize: '15rem'}}>4</span>
      </div>
    </div>
  )
}

export default NotFound