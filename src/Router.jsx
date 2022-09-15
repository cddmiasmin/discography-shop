import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Showcase from './page/Showcase'
import Login from './page/Login'
import Registration from './page/Registration'
import ProductDetail from './page/ProductDetail'
import ProductSearch from './page/ProductSearch'
import Artists from './page/Artists'
import ArtistProfile from './page/ArtistProfile'
import Formats from './page/Formats'
import PreOrder from './page/PreOrder'
import Releases from './page/Releases'
import NotFound from './page/NotFound'


const Router = () => {
    return (
        <Routes>
            <Route index path="/" element={<Showcase />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/cadastro" element={<Registration />}/>
            <Route path="/produto" element={<ProductDetail />}/>
            <Route path="/busca" element={<ProductSearch />}/>
            <Route path="/artista" element={<Artists />}/>
            <Route path="/perfil" element={<ArtistProfile />}/>
            <Route path="/formato" element={<Formats />}/>
            <Route path="/prevenda" element={<PreOrder />}/>
            <Route path="/lancamento" element={<Releases />}/>
            <Route path="*" element={<NotFound />}/>
        </Routes>
    )
}

export default Router