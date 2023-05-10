import React, { createContext } from 'react'
import useLayout from '../hooks/useLayout'
import useProducts from '../hooks/useProducts'
import useFavourites from '../hooks/useFavourites'

export const EcommerceContext = createContext('')

const EcommerceProvider = ({children}) => {
  const {loading} = useLayout()
  const {products,getAllProducts,saveProduct} = useProducts()
  const {favourites,getAllFavourites,isInFavourites,addToFavourites,removeFavourite} = useFavourites()

  return(
    <EcommerceContext.Provider value={{
      loading,
      products,
      favourites,
      getAllProducts,
      saveProduct,
      getAllFavourites,
      isInFavourites,
      addToFavourites,
      removeFavourite
    }}>
      {children}
    </EcommerceContext.Provider>
  )
}

export default EcommerceProvider