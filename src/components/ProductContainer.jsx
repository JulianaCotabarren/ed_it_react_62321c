import React, { useContext } from 'react'
import { EcommerceContext } from '../context/EcommerceProvider'
import Card from './Card'

const ProductContainer = () => {
    const {products,isInFavourites,addToFavourites,removeFavourite} = useContext(EcommerceContext)

  return (
    <div className='container d-flex flex-column align-items-center'>
      {products?.map((product)=>(
        <Card
          key={product.id}
          {...product}
          isInFavourites={isInFavourites}
          addToFavourites={addToFavourites}
          removeFavourite={removeFavourite}
          inFavourites={false}
        />
      ))}
    </div>
  )
}

export default ProductContainer