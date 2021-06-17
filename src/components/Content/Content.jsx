import React from 'react'
import './content.scss'

const Content = ( { content, className} ) => {
    return (
        <>
            <p className={className}>{ content }</p>
        </>
    )
}

export default Content
