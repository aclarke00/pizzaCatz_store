import React from 'react'

class Form extends React.Component {

    state={
        ingredients: ''
    }

    handleInput=(event)=>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit=(event)=>{
        event.preventDefault()
        this.props.addOnePizza(this.state)
    }

    render() {
    return(
        <div>

            <h3>Create Your Pie Here</h3>
            <form onSubmit={this.handleSubmit}>
            Ingredients: <input type="text" name="ingredients" onChange={this.handleInput}></input>
            <input type="submit" value="Create Pizza" onChange={this.handleInput}></input>
            </form>

        </div>
    )
    }
}




export default Form