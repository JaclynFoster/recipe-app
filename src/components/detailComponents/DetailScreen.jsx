import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import salmon from '../../assets/salmon.jpg'
import './DetailScreen.css'
import { useParams } from 'react-router-dom'

const DetailScreen = () => {
  const { id } = useParams()
  const [details, setDetails] = useState([])

  console.log('id', id)
  const getDetails = () => {
    axios
      .get(`https://recipes.devmountain.com/recipes/${id}`)
      .then(res => {
        setDetails(res.data)
        console.log(res.data)
      })
      .catch(err => {
        console.log('error on getDetails:', err)
      })
  }

  useEffect(() => {
    getDetails()
  }, [])

  return (
    <section className="detail">
      <img className="detail-image" src={details.image_url} />

      <div className="detail-container">
        <div className="ingredients-container">
          <div className="cooktime">
            <h1 className="name">{details.recipe_name}</h1>
            <span>Prep Time: {details.prep_time}</span>
            <span>Cook Time: {details.cook_time}</span>
            <span>Serves: {details.serves}</span>
          </div>
          <div className="ingredients-holder">
            <h1 className="name">Ingredients:</h1>
            {details.ingredients &&
              details.ingredients.map(ingredient => {
                return (
                  <h4 className="ingredients">
                    {ingredient.quantity}
                    {ingredient.ingredient}
                  </h4>
                )
              })}
          </div>
        </div>
        <div className="instructions-container">
          <h1 className="instruct-title">Instructions:</h1>
          <div>
            <p className="instructions">
              {details.instructions && JSON.parse(details.instructions)}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DetailScreen


