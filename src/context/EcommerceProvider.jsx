import {createContext, useState} from 'react'

export const EcommerceContext = createContext('')

const EcommerceProvider = ({children}) => {

    const [carrito,setCarrito] = useState([])

    const productos = [
        {
            id: "1",
            imagen: 'https://http2.mlstatic.com/D_NQ_NP_605126-MLM51559383638_092022-O.webp',
            nombre: 'Iphone',
            version: '14 Pro Max',
            precio: 400000,
            year: 2023
        },
        {
            id: "2",
            imagen: 'https://http2.mlstatic.com/D_NQ_NP_803693-MLA47776072534_102021-O.webp',
            nombre: 'Iphone',
            version: '13 Pro Max',
            precio: 300000,
            year: 2022
        },
        {
            id: "3",
            imagen: 'https://http2.mlstatic.com/D_NQ_NP_624409-MLA54545219880_032023-O.webp',
            nombre: 'Samsung',
            version: 'a50',
            precio: 160000,
            year: 2019
        }
    ]

  return (
    <EcommerceContext.Provider value={{
        productos
    }}>
        {children}
    </EcommerceContext.Provider>
  )
}

export default EcommerceProvider