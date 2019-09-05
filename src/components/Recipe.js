import React, { Component } from 'react'

//in the render we console.log(this.props.recipe) to ensure recipe props have been passed doww
//next we need to destructure and get all the varaibles out of the recipe object
//api request depending on the ID we have. 
//when application loads, we fetch the 30 popular dishes



export default class Recipe extends Component {
    render() {
        const {
            image_url,
            title,
            source_url,
            publisher,
            recipe_id
        } = this.props.recipe;
const{handleDetails} = this.props;
        return (
          <React.Fragment>
            <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
                <div className="card">
                    <img src={image_url} 
                    className="img-card-top" 
                    style={{height:"14rem"}}
                    alt="recipe"/>
                    <div className="card-body text-capitalize">
                        <h6>{title}</h6>
                        <h6 className="text-warning text-slanted"> 
                        provided by {publisher}</h6>
                    </div>
                    <div className="card-footer">
                        <button type="button"
                        className="btn btn-primary text-capitalize"
                        onClick={()=>handleDetails(0,recipe_id)}
                        >
                        details</button>
                        <a href={source_url} 
                        className="btn btn-success mx-2 text-capitalize" 
                        rel="noopener noreferrer"
                        target="_blank">Recipe Url</a>
                    </div>
                </div>
            </div>  
          </React.Fragment>
        );
    }
}
