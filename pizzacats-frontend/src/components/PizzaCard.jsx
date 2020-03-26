import React from 'react'

const PizzaCard = (props) => {

    let {name,ingredients,price} = props.pizzaData

    let handleOnClick=(event)=>{
        props.removePizza(props.pizzaData)
    }

    return(
        <div>
            name: {name} {<br/>}
            ingredients: {ingredients} {<br/>}
            price: {price} {<br/>}
            <button onClick={handleOnClick}>Delete</button>


        </div>
    )

}





export default PizzaCard