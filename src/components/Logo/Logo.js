import React from 'react'
import './Logo.css'
import burgerLogo from '../../assets/image/burger-logo.png'
const logo = props =>(
    <div className="Logo" >
        <img src={burgerLogo} alt="MyBurger"/>
    </div>
)

export default logo