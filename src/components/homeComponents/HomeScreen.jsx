import React, { useEffect, useState } from 'react'
import AdBanner from './AdBanner'
import axios from 'axios'
import RecipeCard from '../../UI/RecipeCard'
import { BsSearch } from 'react-icons/bs'
import './HomeScreen.css'

const HomeScreen = () => {
  const [recipe, setRecipes] = useState([])
  const [searchRecipe, setSearchRecipe] = useState({ query: '', result: [] })
  const getRecipes = () => {
    axios
      .get('https://recipes.devmountain.com/recipes')
      .then(res => {
        setRecipes(res.data)
        console.log(res.data)
      })
      .catch(err => {
        console.log('error on getRecipes:', err)
      })
  }

  const searchResults = e => {
    const results = recipe.filter(recipe => {
      let title = recipe.recipe_name.toLowerCase()
      let params = e.target.value.toLowerCase()
      if (e.target.value === '') return recipe
      return title.includes(params)
    })
    setSearchRecipe({
      query: e.target.value,
      result: results
    })
  }

  const checkFilter = () => {
    if (searchRecipe.query.length > 0) {
      return searchRecipe.result
    }
    return recipe
  }

  useEffect(() => {
    getRecipes()
  }, [])

  return (
    <div>
      <AdBanner />
      <div className="search-container">
        <BsSearch className="search-icon" />
        <input
          placeholder="Search for a Recipe"
          type="search"
          className="search"
          value={searchRecipe.query}
          onChange={searchResults}
        />
      </div>

      <div className="card-container">
      {checkFilter().map(recipe => {
        return (
        <RecipeCard recipe={recipe} />
        )
      })}
      <RecipeCard recipe={recipe} />
      </div>
    </div>
  )
}

export default HomeScreen
