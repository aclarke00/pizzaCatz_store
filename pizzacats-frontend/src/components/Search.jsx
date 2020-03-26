import React from 'react'

const Search=(props)=> {
  

    let handleOnChange=(event)=>{
        props.updateInput(event.target.value)
    }

    return(
        <div>
            <h2>Search</h2>
            <input type="text" value={props.searchTerm} onChange={handleOnChange}></input>

        </div>
    )
}




export default Search