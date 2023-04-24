import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from '../components/pages/Home'
import Carrito from '../components/pages/Carrito'
import ItemDetail from '../components/pages/ItemDetail'
import EcommerceLayout from './EcommerceLayout'

const index = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<EcommerceLayout/>}>
                <Route index element={<Home/>}/>
                <Route path='carrito' element={<Carrito/>}/>
                <Route path='item/:id' element={<ItemDetail/>}/>
            </Route>            
        </Routes>
    </BrowserRouter>
  )
}

export default index