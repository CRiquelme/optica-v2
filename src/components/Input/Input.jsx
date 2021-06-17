import React from 'react'
import './input.scss'

const Input = ( { onChange, type, value, name, placeholder, className } ) => {
    return (
        <>
            <input autoComplete="off" type={type} name={name} onChange={ onChange } value={ value } placeholder={placeholder} className={className} />
        </>
    )
}

export default Input
