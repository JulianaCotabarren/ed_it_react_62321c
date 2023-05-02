import { useState } from 'react'

const useCarrito = () => {
    const [carrito,setCarrito] = useState([])
    const agregarAlCarrito = (producto) => setCarrito([...carrito,producto])
    const eliminarDelCarrito = (id) => setCarrito(carrito.filter((item) => item.id !== id))
    const estaEnElCarrito = (id) => carrito.some((item) => item.id === id) //También puede ser: const estaEnElCarrito = (id) => carrito.includes(id)

  return {
    carrito,
    agregarAlCarrito,
    eliminarDelCarrito,
    estaEnElCarrito
  }
}

export default useCarrito

/* En este componente debería agregar la lógica para que los productos que voy agregando al carrito se resten del stock, y que cuando se llegue al número del stock ya no se puedan agregar mas unidades */