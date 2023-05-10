import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayoutRoutes from './MainLayoutRoutes'
import Home from '../pages/Home'
import Product from '../pages/Product'
import Favourites from '../pages/Favourites'

const routes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<MainLayoutRoutes/>}>
                <Route index element={<Home/>}/>
                <Route path='product' element={<Product/>}/>
                <Route path='favourites' element={<Favourites/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default routes