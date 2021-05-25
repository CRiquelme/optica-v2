import React from 'react'
import './select.scss'

const Select = ( { onChange, name, id, content } ) => {
    return (
        <>
            <select name={name} id={id} onChange={onChange}>
                for (const item in content) {
                    <option value={ content[item] }>
                        { content[item] }
                    </option>
                }
            </select>
        </>
    )
}

export default Select
