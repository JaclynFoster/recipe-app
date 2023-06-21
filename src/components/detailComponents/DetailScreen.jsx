import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import salmon from '../../assets/salmon.jpg'
import './DetailScreen.css'
import { useParams } from 'react-router-dom'

const DetailScreen = ({ recipe, setRecipes }) => {
  const { id } = useParams()
  const getDetails = () => {
    axios
      .get(`/recipes/${id}`)
      .then(res => {
        setRecipes(res.data)
        console.log(res.data)
      })
      .catch(err => {
        console.log('error on getDetails:', err)
      })
  }

  useEffect(() => {
    getDetails()
  })

  return (
    <section className="detail">
      <img className="detail-image" src={salmon} />

      <div className="detail-container">
        <div className="ingredients-container">
          <div className="cooktime">
            <h1 className="name">Recipe Name</h1>
            <span>Prep Time: 15 minutes</span>
            <span>Cook Time: 60 minutes</span>
            <span>Serves: 4</span>
          </div>
          <div className="ingredients">
            <h1 className="name">Ingredients:</h1>

            <span>5 tsp That</span>
            <span>3 cups of whatever</span>
            <span>Spoonful of Sugar</span>
            <span>Dash of Awesome</span>
          </div>
        </div>
        <div className="instructions">
          <h1 className="instruct-title">Instructions:</h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Porttitor rhoncus dolor purus non enim praesent elementum. Vitae
            proin sagittis nisl rhoncus mattis rhoncus urna neque. Leo vel
            fringilla est ullamcorper eget nulla. Mollis aliquam ut porttitor
            leo a diam sollicitudin. Proin sed libero enim sed faucibus. Magna
            ac placerat vestibulum lectus mauris ultrices eros in. Non diam
            phasellus vestibulum lorem. Faucibus turpis in eu mi bibendum neque.
            Amet dictum sit amet justo donec enim diam vulputate ut. Purus
            gravida quis blandit turpis cursus.
          </p>
          <p>
            Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida
            cum. Volutpat maecenas volutpat blandit aliquam etiam erat velit.
            Maecenas accumsan lacus vel facilisis. Purus in massa tempor nec
            feugiat nisl. Sagittis nisl rhoncus mattis rhoncus urna neque
            viverra. Non pulvinar neque laoreet suspendisse. Nunc id cursus
            metus aliquam eleifend mi in nulla posuere. Neque sodales ut etiam
            sit amet nisl purus in mollis. Quam viverra orci sagittis eu
            volutpat. Nulla malesuada pellentesque elit eget gravida. Dictumst
            vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras.
            Hendrerit dolor magna eget est lorem ipsum dolor sit. Risus feugiat
            in ante metus. Dictum at tempor commodo ullamcorper a lacus
            vestibulum sed arcu. Consequat nisl vel pretium lectus. Eleifend mi
            in nulla posuere. Fermentum odio eu feugiat pretium nibh ipsum
            consequat nisl. Tortor dignissim convallis aenean et tortor.
            Bibendum enim facilisis gravida neque convallis a. Sollicitudin ac
            orci phasellus egestas tellus rutrum tellus pellentesque eu.
          </p>
        </div>
      </div>
    </section>
  )
}

export default DetailScreen

