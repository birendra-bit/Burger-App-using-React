import React, { Component } from 'react'

import Aux from '../../hoc/auxllary'
import Burger from '../../components/Burger/Burger'
class BurgerBuilder extends Component{
    state = {
        ingredients :{
            salad : 1,
            bacon : 2,
            cheese : 1,
            meat : 1
        }
    }
    render(){
        return(
            <Aux>
                {/* Burger components */}
                <Burger ingredients = {this.state.ingredients} />
                <div>Build controls</div>
            </Aux>
        )
    }
}
export default BurgerBuilder