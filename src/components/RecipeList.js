import React, { Component } from 'react'
import Recipe from './Recipe';
import RecipeSearch from './RecipeSearch';


//we had an array that we got from the props { recipes } and the value is in this.props
//then we did destructuring to get the value out of the props
//next we used the map method to iterate or loop through that array
//for each and every item in the array, we returned a component of <Recipe/>
//since we were returning multiple elements, we had to use the key prop
//within the key prop we passed the key value pair of recipe_id b/c it will be unique
//the rest of the key value pairs we passed with a recipe object into a recipe prop
//once we go to recipe.js we will be able to use those values to make UI



export default class RecipeList extends Component {
    
    render() {
        const { recipes, handleDetails, value, handleSubmit, handleChange, error } = this.props;
        return (
            <React.Fragment>
               <RecipeSearch value={value} handleChange={handleChange} handleSubmit={handleSubmit}/>
                <div className="container my-5">
                {/* Title */}
                <div className="row">
                <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
                <h1 className="text-slanted">Recipe List</h1>
                </div>
                </div>
                {/* End of title */}
                {/* write logic to grab value within array 
                        return with () signifies we are returning something with jsx
                        loop each item in array, and the id comes from the tempList each item has an Id*/}
                <div className="row">
                  {error?<h1 className="text-danger text-center">{error}</h1> :recipes.map(recipe => {
                    return ( <Recipe 
                    key={recipe.recipe_id} 
                    recipe = {recipe} 
                    handleDetails={handleDetails}/>
                    );
                    })}
                
                </div>
                </div>             
           </React.Fragment>
        );
    }
}
