import React, { Component } from 'react'
import Aux from '../../hoc/auxllary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICE = {
    salad : 5,
    bacon : 5,
    cheese : 10,
    meat : 15
}

class BurgerBuilder extends Component{
    state = {
        ingredients :{
            salad : 1,
            bacon : 2,
            cheese : 1,
            meat : 1
        },
        totalPrice : 20
    }
addIngredientHandler = (type)=>{
    const oldCount = this.state.ingredients[type]
    const updatedCount = oldCount + 1 
    const updatedIngredients = {
        ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCount
    const priceAddition = INGREDIENT_PRICE[type]
    const oldPrice = this.state.totalPrice
    const newPrice = oldPrice + priceAddition
    this.setState({totalPrice:newPrice, ingredients : updatedIngredients})
}
removeIngredientsHandler = ( type )=>{
    const oldCount = this.state.ingredients[type]
    if( oldCount <= 0 )
    return
    const updatedCount = oldCount - 1 
    const updatedIngredients = {
        ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCount
    const priceDeduction = INGREDIENT_PRICE[type]
    const oldPrice = this.state.totalPrice
    const newPrice = oldPrice - priceDeduction
    this.setState({totalPrice:newPrice, ingredients : updatedIngredients})
}
    render(){
        const disabledInfo = {
            ...this.state.ingredients
        }
        for ( let key in disabledInfo ){
            disabledInfo[key] = disabledInfo[key] <= 0 
        }
        return(
            <Aux>
                {/* Burger components */}
                <Burger ingredients = {this.state.ingredients} />
                <BuildControls
                    addIngredient = {this.addIngredientHandler}
                    removeIngredient = { this.removeIngredientsHandler}
                    disabled = {disabledInfo}
                    totalPrice = {this.state.totalPrice}
                />
            </Aux>
        )
    }
}
export default BurgerBuilder