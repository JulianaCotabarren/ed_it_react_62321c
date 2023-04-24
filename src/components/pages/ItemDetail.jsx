import React, { useContext } from 'react'
import { EcommerceContext } from '../../context/EcommerceProvider'
import { useParams } from 'react-router-dom'
import Tarjeta from '../Tarjeta'

const ItemDetail = () => {
    const {id} = useParams()
    const {productos} = useContext(EcommerceContext)
    const producto = productos.find((producto) => producto.id === id )

  return (
    <div>
        <Tarjeta {...producto} sinBoton={true}/>
    </div>
  )
}

export default ItemDetail