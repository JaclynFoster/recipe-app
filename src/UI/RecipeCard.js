import React from 'react'
import recipeImage from '.././UI/recipe.jpeg'
import '../UI/RecipeCard.css'

const RecipeCard = ({ recipes }) => {
  // {recipes.map(item => {

  return (
    <div className="card">
      <img className="image" src={recipeImage} />
      <h3 className="name">Jamaican Jerk Chicken</h3>
      <button className="more">See More</button>
    </div>
  )
  // })}
}

export default RecipeCard
