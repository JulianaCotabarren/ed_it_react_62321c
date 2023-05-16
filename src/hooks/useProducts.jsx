import { useState, useEffect } from 'react'
import { axiosClient } from '../axios'
import useLayout from './useLayout'

const useProducts = () => {
    const {showLoading,hideLoading} = useLayout()
    const [products,setProducts] = useState([])
    const [edit,setEdit] = useState(false)
    const [editProductFields,setEditProductFields] = useState(null)

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
    const editProduct = async (object) => {
      showLoading()
      try {
          await axiosClient.put(`/products/${object?.id}`,object)
          await getAllProducts()
          alert('The product has been edited')
          handleResetEditProductFields()
          hideLoading()
      } catch (error) {
          console.log(error);
          hideLoading()
      }
    }

    const handleEditProductFields = (object) => {
      setEdit(true)
      setEditProductFields(object)
    }
    const handleResetEditProductFields = () => {
      setEdit(false)
      setEditProductFields(null)
    }
    useEffect(() => {
      getAllProducts()
    }, [])
    
  return {
    products,
    edit,
    editProductFields,
    getAllProducts,
    saveProduct,
    handleEditProductFields,
    handleResetEditProductFields,
    editProduct
  }
}

export default useProducts