import React from 'react'
import Form from '../components/Form'



const Product = () => {
  
  const initialState = {
    name:"",
    brand:"",
    model:"",
    price:""
  }
  return (
    <div className='container d-flex flex-column align-items-center my-5'>
      <Form initialState={initialState} buttonText={"Agregar"}/>
    </div>
  )
}

export default Product