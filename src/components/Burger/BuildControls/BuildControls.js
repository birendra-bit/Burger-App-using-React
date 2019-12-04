import React from 'react';
import './BuildControls.css'

import BuildControl from './BuildControl/BuildControl'
const controls = [
    { label : 'Salad', type:'salad'},
    { label : 'Bacon', type:'bacon'},
    { label : 'Cheese', type:'cheese'},
    { label : 'Meat', type:'meat'}

]
const style = {
    color : 'white',
    fontSize : '20px'
}
const buildControls = props=>(
    <div className='BuildControls'>
        <p style = {style}>Price : Rs <strong>{props.totalPrice}</strong> </p>
        {controls.map(ctrl =>(
            <BuildControl key={ctrl.label} label = {ctrl.label} 
            added ={()=> props.addIngredient(ctrl.type)} 
            removed = {()=> props.removeIngredient(ctrl.type)}
            disabled = {props.disabled[ctrl.type]}
            />
        ) )}
    </div>
)

export default buildControls