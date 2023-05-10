import { useState, useEffect } from 'react'
import { axiosClient } from '../axios'
import useLayout from './useLayout'

const useProducts = () => {
    const {showLoading,hideLoading} = useLayout()
    const [products,setProducts] = useState([])

    const getAllProducts = async () => {
        showLoading()
        try {
            const res = await axiosClient.get('/products')
            setProducts(res.data)
            hideLoading()
        } catch (error) {
            console.log(error);
            hideLoading()
        }
    }

    const saveProduct = async (object) => {
      showLoading()
      try {
          await axiosClient.post('/products',object)
          await getAllProducts()
          hideLoading()
      } catch (error) {
          console.log(error);
          hideLoading()
      }
  }

    useEffect(() => {
      getAllProducts()
    }, [])
    

  return {
    products,
    getAllProducts,
    saveProduct
  }
}

export default useProducts