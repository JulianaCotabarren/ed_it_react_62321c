import React from 'react'

const Tarjeta = (props) => {
  const { imagen,nombre,version,precio,year,id } = props
  return (
    <div className="card mx-2" style={{width: "18rem"}}>
  <img src={imagen} className="card-img-top w-50 h-50 mx-auto" alt="celu image"/>
  <div className="card-body">
    <h5 className="card-title">Nombre: {nombre}</h5>
    <h6 className="fs-4 text-center">Version: {version}</h6>
    <p className="card-text">
        Precio: {precio}
    </p>
    <div className='my-5'>
      <span>Año: {year}</span>
    </div>
    <button className="btn btn-primary">
        Mas info
    </button>
  </div>
</div>
  )
}

export default Tarjeta