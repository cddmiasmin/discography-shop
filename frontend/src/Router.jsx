import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Showcase from './page/Showcase/Showcase'
import Login from './page/Login/Login'
import Registration from './page/Registration/Registration'
import ProductDetail from './page/ProductDetail/ProductDetail'
import ProductSearch from './page/ProductSearch'
import Artists from './page/Artists/Artists'
import ArtistProfile from './page/ArtistProfile'
import Formats from './page/Formats'
import PreOrder from './page/PreOrder'
import Releases from './page/Releases'
import NotFound from './page/NotFound'

import { ColorContextProvider } from './contexts/ColorContext'

const Router = () => {
    return (
        <ColorContextProvider>
            <Routes>
                <Route index path="/" element={ <Showcase /> }/>
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Registration />} />
                <Route path="/produto/:artist/:album" element={<ProductDetail />} />
                <Route path="/busca" element={<ProductSearch />} />
                <Route path="/artista" element={<Artists />} />
                <Route path='/perfil/:slug' element={<ArtistProfile />} />
                <Route path="/formato" element={<Formats />} />
                <Route path="/prevenda" element={<PreOrder />} />
                <Route path="/lancamento" element={<Releases />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </ColorContextProvider>
    )
}

export default Router