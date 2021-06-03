import React from 'react'

const Banner = ({children, title, subtitle}) => {
    return (
        <div className="banner">
            <h1 style={{fontWeight: 'bold', letterSpacing:'5px', color: '#fff', fontFamily: 'Verdana'}}>{title}</h1>
            <div></div>
            <p>{subtitle}</p>
            {children}
        </div>
    )
}

export default Banner
