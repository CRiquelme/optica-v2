import React from 'react'

//Styles
import './button.scss'

// component
const Button = ({onClick, value, className}) => { 
    return (
        <>
          <input className={className} type="button" value={value} onClick={()=>onClick()} />
        </>
    )
}

export default Button
