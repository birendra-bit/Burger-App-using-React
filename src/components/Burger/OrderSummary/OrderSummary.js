import React from 'react'
import Aux from '../../../hoc/auxllary'


const orderSummary = props =>{
    const ingredientsSummary = Object.keys(props.ingredients).map( igkey => {
             return (
                <li key = {igkey} style = {{listStyleType:'square'}} >
                    <span style={{textTransform :'capitalize' }}> {igkey} </span> : 
                    <strong> {props.ingredients[igkey]} </strong>
                 </li>)
        }
    )
    return(
        <Aux>
            <h3>Your Order Summary</h3>
            <p>A delicious burger with following ingredients : </p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p>Your Sub_Total : <strong>Rs {props.totalPrice} </strong></p>
            <p>Continue to checkout?</p>
        </Aux>
    )
}

export default orderSummary