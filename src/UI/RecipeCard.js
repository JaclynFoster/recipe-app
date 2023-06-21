import React from 'react'
import recipeImage from '.././UI/recipe.jpeg'
import '../UI/RecipeCard.css'
import { useNavigate } from 'react-router-dom'

const RecipeCard = ({ recipe }) => {
    const navigate = useNavigate()
    const seeMore = () => {
        navigate(`/recipe/${recipe.recipe_id}`)
    }


  return (
    <div className="card">
      <img className="image" src={recipe.image_url} />
      <h3 className="name">{recipe.recipe_name}</h3>
      <button onClick={() => seeMore()}className="more">See More</button>
    </div>
  )

}

export default RecipeCard
