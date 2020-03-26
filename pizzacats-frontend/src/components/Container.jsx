import React from 'react'
import PizzaCard from './PizzaCard.jsx'
import Form from './Form.jsx'
import Search from './Search.jsx'

class Container extends React.Component{

    state = {
        pizzas: [],
        input: ''
    }

    componentDidMount() {
        fetch("http://localhost:3000/pizzas")
        .then(r=>r.json())
        .then(pizzas => this.setState({
            pizzas: pizzas
            })
        )
    }

    mapPizza = () => {
        // let {pizzas} = this.state
        return this.filterPizza().map(pizza => (
        <PizzaCard key={pizza.id} pizzaData={pizza} removePizza={this.removePizza} />
         ))
    }

    updateSearchTerm=(newInput)=>{
        this.setState({
            input: newInput
        })
    }

    filterPizza = () => {
        let {pizzas, input} = this.state
        let filteredArray = pizzas.filter(pizza => pizza.ingredients.includes(input))
        return filteredArray
    }

    addOnePizza = (pizzaObj) => {
        let {pizzas} = this.state
        let updatedArray = pizzas

        fetch('http://localhost:3000/pizzas', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(pizzaObj)
        })
        .then(r=>r.json())
        .then(newPizza=> {
            updatedArray.push(newPizza)
            this.setState({
                pizzas: updatedArray, 
                input: this.state.input
            })
        })
    }



    render(){

        return(
            <div>
                <h1>Welcome to PizzaKatz Pizzeria</h1><br/>
                <Form addOnePizza={this.addOnePizza}/> {<br/>}
                <Search searchTerm={this.state.input} updateInput={this.updateSearchTerm} />

                 {this.mapPizza()}
                

            </div>


        )}
}





export default Container