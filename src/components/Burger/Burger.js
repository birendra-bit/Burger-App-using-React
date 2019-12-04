import React from 'react'
import './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import BugerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props) =>{
    let transformedIngredients = Object.keys(props.ingredients).map(igKeys => {
        return [...Array(props.ingredients[igKeys])].map((_,i)=>{
            return <BugerIngredient key={igKeys+i} type={igKeys}/>
        })
    }).reduce(( arr, el )=>{
        return arr.concat(el);
    },[])
    if( transformedIngredients.length === 0 ){
        transformedIngredients = <p>add ingredients to burger</p>
    }
    return(
        <div className='Burger'>
            <BurgerIngredient type='bread-top'/>
            {transformedIngredients}
            <BurgerIngredient type='bread-bottom'/>

        </div>
    )
}

export default burger