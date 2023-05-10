import React from 'react'

const Input = (props) => {
  const {name,type='text',value,onChange,required} = props

  return (
    <div className="mb-3">
      <label className="form-label">{name}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="form-control"
      />
    </div>
  )
}

export default Input