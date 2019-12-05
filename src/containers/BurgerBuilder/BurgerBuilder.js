import React, { Component } from 'react'
import Aux from '../../hoc/auxllary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

const INGREDIENT_PRICE = {
    salad : 5,
    bacon : 5,
    cheese : 10,
    meat : 15
}

class BurgerBuilder extends Component{
    state = {
        ingredients :{
            salad : 0,
            bacon : 0,
            cheese : 0,
            meat : 0
        },
        totalPrice : 20,
        purchasable : false,
        purchasing : false
    }
purchaseCancelHandler = ()=>{
    this.setState({
        purchasing : false
    })
}

purchaseHandler =() =>{
    this.setState({ purchasing : true })
}
updatePurchaseSate(ingredients){
    const sum = Object.keys(ingredients).map(igkey => {
        return ingredients[igkey]
    }).reduce((sum,el)=>{
        return sum + el 
    } ,0)
    this.setState({purchasable : sum > 0 })
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
    this.updatePurchaseSate(updatedIngredients)
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
    this.updatePurchaseSate(updatedIngredients)
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
                <Modal show = {this.state.purchasing} modalClosed = {this.purchaseCancelHandler}>
                    <OrderSummary ingredients = {this.state.ingredients} totalPrice = {this.state.totalPrice} />
                </Modal>
                <Burger ingredients = {this.state.ingredients} />
                <BuildControls
                    addIngredient = {this.addIngredientHandler}
                    removeIngredient = { this.removeIngredientsHandler}
                    disabled = {disabledInfo}
                    purchasable = {this.state.purchasable}
                    totalPrice = {this.state.totalPrice}
                    ordered = {this.purchaseHandler}
                />
            </Aux>
        )
    }
}
export default BurgerBuilder