import { useContext } from "react";
import { EcommerceContext } from "../context/EcommerceProvider";
import Tarjeta from "./Tarjeta";

const ProductsContainer = () => {
  const { productos } = useContext(EcommerceContext);

  return (
    <div className="container-fluid d-flex p-3">
      {productos.map((producto) => (
        <Tarjeta 
          key={producto.id} 
          {...producto} 
        />
      ))}
      {/* {productos.map(({id,imagen,nombre,version,precio,year,sinBoton}) => (
        <Tarjeta
          key={id}
          imagen={imagen}
          id={id}
          nombre={nombre}
          version={version}
          precio={precio}
          year={year}
          sinBoton={true}
        /> */}
    </div>
  );
};

export default ProductsContainer;
