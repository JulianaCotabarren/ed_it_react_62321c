import React, { useContext } from 'react'
import { EcommerceContext } from '../context/EcommerceProvider'
import ItemCount from './ItemCount'

const CarritoContainer = () => {
    //const {producto} = props
    const {carrito, eliminarDelCarrito} = useContext(EcommerceContext)

    /* const handleEliminar = () => {
        if(count >= 1) {setCount(0)}
        carrito.length ===0
    } */
  return (
    <div className='container'>
        {!carrito.length ? <h1>Carrito vacio</h1> : carrito.map(({nombre,version,precio,count,id}) => (
            <>
                <div className='d-flex card'>
                    <span>Nombre: {nombre}</span>
                    <span>Version: {version}</span>
                    <span>Precio: ${precio}</span>
                    <span>{count}</span>
                    {/* <ItemCount cantidad={count} sinBotonAgregar={true}/> */}
                    <button onClick={() => eliminarDelCarrito(id)} className='btn btn-danger'>Eliminar</button>
                </div>
            </>
        ))}          
    </div>
  )
}

export default CarritoContainer