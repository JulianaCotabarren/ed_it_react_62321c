import { useState } from 'react'

//Este es un hook genérico para aplicar a CUALQUIER formulario
const useForm = (initialState) => {
    const [form,setForm] = useState(initialState)
    const handleChange = (e) => {
        const {name,value} = e.target
        setForm({
            ...form,
            [name]:value
        })
    }
  return {
    form,
    handleChange
  }
}

export default useForm