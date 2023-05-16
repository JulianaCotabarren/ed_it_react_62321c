import React, { createContext } from "react";
import useLayout from "../hooks/useLayout";
import useProducts from "../hooks/useProducts";
import useFavourites from "../hooks/useFavourites";

export const EcommerceContext = createContext("");

const EcommerceProvider = ({ children }) => {
  const { loading } = useLayout();
  const {
    products,
    edit,
    editProductFields,
    getAllProducts,
    saveProduct,
    handleEditProductFields,
    handleResetEditProductFields,
    editProduct
  } = useProducts();
  const {
    favourites,
    getAllFavourites,
    isInFavourites,
    addToFavourites,
    removeFavourite,
  } = useFavourites();

  return (
    <EcommerceContext.Provider
      value={{
        loading,
        products,
        favourites,
        edit,
        editProductFields,
        getAllFavourites,
        getAllProducts,
        isInFavourites,
        addToFavourites,
        removeFavourite,
        saveProduct,
        handleEditProductFields,
        handleResetEditProductFields,
        editProduct
      }}
    >
      {children}
    </EcommerceContext.Provider>
  );
};

export default EcommerceProvider;
