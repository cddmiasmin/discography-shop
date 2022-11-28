import React, { useState } from 'react';

import Desktop from './Desktop';
import Mobile from './Mobile';

const Header = () => {
  const [isDrawerCartOpen, setIsDrawerCartOpen] = useState(false);
  const [isPopoverProfileOpen, setIsPopoverProfileOpen] = useState(false);

  return (
    <header
      className={`flex-row container-fluid d-flex position-absolute top-0 start-0 m-0 p-0
                  justify-content-center align-items-center `}
      style={{ height: '10%', width: '100%' }}>

      <div id='header-mobile' className='d-none w-100'>
        <Mobile
          isDrawerCartOpen={isDrawerCartOpen} setIsDrawerCartOpen={setIsDrawerCartOpen}
          isPopoverProfileOpen={isPopoverProfileOpen} setIsPopoverProfileOpen={setIsPopoverProfileOpen}
        />
      </div>

      <div id='header-desktop' className='d-flex w-100'>
        <Desktop
          isDrawerCartOpen={isDrawerCartOpen} setIsDrawerCartOpen={setIsDrawerCartOpen}
          isPopoverProfileOpen={isPopoverProfileOpen} setIsPopoverProfileOpen={setIsPopoverProfileOpen}
        />
      </div>

    </header>
  )
}

export default Header