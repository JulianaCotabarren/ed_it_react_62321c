import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
/* import { isItemExist } from "../helper"; */

const Card = (props) => {
  const {
    id,
    name,
    brand,
    model,
    price,
    isInFavourites,
    addToFavourites,
    removeFavourite,
    inFavourites,
    handleEditProductFields,
  } = props;
  return (
    <div className="card w-50">
      <div className="card-body">{name}</div>
      <div className="card-body">{brand}</div>
      <div className="card-body">{model}</div>
      <div className="card-body">{price}</div>
      <div className="d-flex justify-content-end px-3">
        {!inFavourites && isInFavourites(id) && (
          <span
            role={"button"}
            onClick={() => removeFavourite(id)}
            className="fs-3"
          >
            <AiFillHeart />
          </span>
        )}
        {!inFavourites && !isInFavourites(id) && (
          <span
            role={"button"}
            onClick={() => addToFavourites({ id, name, brand, model, price })}
            className="fs-3"
          >
            <AiOutlineHeart />
          </span>
        )}
        {inFavourites && isInFavourites(id) && (
          <span
            role={"button"}
            onClick={() => removeFavourite(id)}
            className="fs-3"
          >
            <AiFillDelete />
          </span>
        )}
        <span className="fs-3">
          <AiFillEdit
            onClick={() =>
              handleEditProductFields({ id, name, brand, model, price })
            }
          />
        </span>
      </div>
    </div>
  );
};

export default Card;
