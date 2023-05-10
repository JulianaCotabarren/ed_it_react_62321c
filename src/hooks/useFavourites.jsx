import { useEffect, useState } from 'react'
import { axiosClient } from '../axios'
import useLayout from './useLayout'

const useFavourites = () => {
    const {showLoading,hideLoading} = useLayout()
    const [favourites,setFavourites] = useState([])

    const getAllFavourites = async () => {
      showLoading()
      try {
        const res = await axiosClient.get('/favourites')
        setFavourites(res.data)
        hideLoading()
      } catch (error) {
          console.log(error);
          hideLoading()
      }
    }

    const isInFavourites = (id) => favourites.some((favourite)=> favourite.id === id)

    const addToFavourites = async (object) => {
      showLoading()
      try {
        await axiosClient.post('/favourites',object)
        await getAllFavourites()
        hideLoading()
      } catch (error) {
          console.log(error);
          hideLoading()
      }
    }

    const removeFavourite = async (id) => {
      showLoading()
      try {
        await axiosClient.delete(`/favourites/${id}`)
        await getAllFavourites()
        hideLoading()
      } catch (error) {
        console.log(error);
        hideLoading()
      }
    }


    useEffect(() => {
      getAllFavourites()    
    }, [])  

  return {
    favourites,
    getAllFavourites,
    isInFavourites,
    addToFavourites,
    removeFavourite
  }
}

export default useFavourites