import React, { useContext } from 'react'
import { EcommerceContext } from '../context/EcommerceProvider'
import Card from './Card'

const FavouriteContainer = () => {
    const {favourites,isInFavourites,addToFavourites,removeFavourite} = useContext(EcommerceContext)

    return (
      <div className='container d-flex flex-column align-items-center'>
        {favourites.length < 1 ? <h1 className='text-center fs-3 my-5'>There are no Favourites</h1> : favourites?.map((favourite)=>(
          <Card
            key={favourite.id}
            {...favourite}
            isInFavourites={isInFavourites}
            addToFavourites={addToFavourites}
            removeFavourite={removeFavourite}
            inFavourites
          />
        ))}
      </div>
    )
}

export default FavouriteContainer