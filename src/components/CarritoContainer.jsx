import React, { useContext } from 'react'
import { EcommerceContext } from '../context/EcommerceProvider'

const CarritoContainer = () => {
    const {carrito} = useContext(EcommerceContext)
  return (
    <div>
        {!carrito.length ? <h1>Carrito vacio</h1> : carrito.map(({nombre,precio,count}) => (
            <>
                <div className='d-flex card'>
                    <span>Nombre: {nombre}</span>
                    <span>Precio: ${precio}</span>
                    <span>Cantidad: x{count}</span>
                </div>
            </>
        ))}          
    </div>
  )
}

export default CarritoContainer