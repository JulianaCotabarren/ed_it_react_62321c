import React, { useContext } from "react";
import { EcommerceContext } from "../context/EcommerceProvider";
import Card from "./Card";
import { AiFillCloseCircle } from "react-icons/ai";
import Form from '../components/Form'


const ProductContainer = () => {
  const {
    products,
    edit,
    editProductFields,
    isInFavourites,
    addToFavourites,
    removeFavourite,
    handleEditProductFields,
    handleResetEditProductFields
  } = useContext(EcommerceContext);

  return (
    <div className="container d-flex flex-column align-items-center">
      {edit && (
        <div className="container">
          <div className="d-flex justify-content-end w-75 fs-2">
            <AiFillCloseCircle onClick={handleResetEditProductFields} />
          </div>
          <h1 className="text-center">Edit Product</h1>
          <Form edit={edit} initialState={editProductFields} buttonText={"Editar"}/>
        </div>
      )}
      {!edit &&
        products?.map((product) => (
          <Card
            key={product.id}
            {...product}
            isInFavourites={isInFavourites}
            addToFavourites={addToFavourites}
            removeFavourite={removeFavourite}
            inFavourites={false}
            handleEditProductFields={handleEditProductFields}
          />
        ))}
    </div>
  );
};

export default ProductContainer;
