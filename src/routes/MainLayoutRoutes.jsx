import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Spinner from '../components/Spinner'

const MainLayoutRoutes = () => {
    const routes = [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'Add Product',
            path: '/product'
        },
        {
            name: 'Favourites',
            path: '/favourites'
        }
    ]
  return (
    <div>
        <Navbar brand_name={'Ecommerce'} routes={routes}/>
        <Spinner/>
        <Outlet/>
    </div>
  )
}

export default MainLayoutRoutes