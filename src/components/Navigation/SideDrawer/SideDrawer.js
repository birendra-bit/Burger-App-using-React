import React from 'react'
import Logo from '../../Logo/Logo'
import NavugationItems from '../NavigationItems/NavigationItems'
import './SideDrawer.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
import Aux from '../../../hoc/auxllary'

const sideDrawer = props =>{
    let attachedClass = ["SideDrawer","Close"]
        if( props.open){
             attachedClass = ["SideDrawer","Open"]
        }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className= {attachedClass.join(' ')} >
            <Logo height ="15%" />
            <nav>
                <NavugationItems/>
            </nav>
        </div>
    </Aux>
    )
}

export default sideDrawer