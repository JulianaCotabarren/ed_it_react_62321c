import React, { useContext } from "react";
import Input from "../shared/Input";
import useForm from "../hooks/useForm";
import { defineInputType } from "../helper";
import { EcommerceContext } from "../context/EcommerceProvider";


const Form = (props) => {
    const {initialState,buttonText="Submit",buttonClassName="btn btn-primary w-100"} = props
    const {form,handleChange} = useForm(initialState)
    const {saveProduct} = useContext(EcommerceContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        saveProduct(form)
    }


  return (
    <form onSubmit={handleSubmit} className="w-50 mx-auto">
        {Object.entries(form)?.map(([key,value])=>( //la transformación de objeto a array mediante .entries me genera un key automático para cada value. Ej: form[[0,name],[1,brand],[2,model],[3,price]]
            <Input
                key={key} 
                name={key}//y si pongo name={value}???
                type={defineInputType(key)}//si el key corresponde al campo price el type es number y sino es string
                value={value}
                onChange={handleChange}
                required
            />
        ))}
        
      
      <button type="submit" className={buttonClassName}>
        {buttonText}
      </button>
    </form>
  );
};

export default Form;
