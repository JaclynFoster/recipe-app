import React, { useState } from 'react'
import { Formik, Form } from 'formik'
import axios from 'axios'
import './NewRecipe.css'

const NewRecipeScreen = () => {
  const [ingredients, setIngredients] = useState([])
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState('')
  

  const initialValues = {
    type: '',
    recipeName: '',
    imageURL: '',
    prepTime: '',
    cookTime: '',
    serves: '',
    ingredients: [],
    instructions: ''
  }

  const addIngredient = () => {

    setIngredients([...ingredients, { name, quantity }])
    setName('')
    setQuantity('')
  }

  const onSubmit = values => {
     values.ingredients = ingredients
    axios
      .post(`https://recipes.devmountain.com/recipes`, values)
      .then(res => {
        console.log('values:', values, ingredients)
        console.log(res.data)
      })
      .catch(err => {
        console.log('error onSubmit:', err)
      })
  }

  return (
    <section className="form-section">
      <h1 className="h1">Tell us about your Recipe!</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <form className="new-form" onSubmit={handleSubmit}>
            <div className="input-section-one">
              <input
                className="recipe-input"
                onChange={handleChange}
                value={values.recipeName}
                placeholder="Name"
                name="recipeName"
              />
              <input
                className="recipe-input"
                onChange={handleChange}
                value={values.imageURL}
                placeholder="Image URL"
                name="imageURL"
              />
            </div>
            <div className="radio-section">
              <input
                className="recipe-radio"
                onChange={handleChange}
                value="Cook"
                type="radio"
                placeholder="Cook"
                name="type"
              />
              <label className="label">Cook</label>
              <input
                className="recipe-radio"
                onChange={handleChange}
                value="Bake"
                type="radio"
                placeholder="Bake"
                name="type"
              />
              <label className="label">Bake</label>
              <input
                className="recipe-radio"
                onChange={handleChange}
                value="Drink"
                type="radio"
                placeholder="Drink"
                name="type"
              />
              <label className="label">Drink</label>
            </div>
            <div className="input-section-two">
              <input
                className="recipe-prep"
                onChange={handleChange}
                value={values.prepTime}
                placeholder="Prep Time"
                name="prepTime"
              />
              <input
                className="recipe-prep"
                onChange={handleChange}
                value={values.cookTime}
                placeholder="Cook Time"
                name="cookTime"
              />
              <input
                className="recipe-prep"
                onChange={handleChange}
                value={values.serves}
                placeholder="Serves"
                name="serves"
              />
            </div>
            <div className="ingredient-input-section">
              <div className="ingredient-inputs">
                <input
                  className="recipe-input"
                  onChange={e => setName(e.target.value)}
                  value={name}
                  placeholder="Ingredient"
                  name="ingredients"
                />
                <input
                  className="recipe-input"
                  name="quantity"
                  onChange={e => setQuantity(e.target.value)}
                  value={quantity}
                  placeholder="Quantity"
                />
              </div>

              {ingredients.map(ingredient => {
                return (
                  <ul className="ingredient-list">
                    <li>
                      {ingredient.name} {ingredient.quantity}
                    </li>
                  </ul>
                )
              })}
            </div>
            <button type="button" className="add-btn" onClick={addIngredient}>
              Add Another
            </button>
            <textarea
              className="textarea"
              onChange={handleChange}
              value={values.instructions}
              placeholder="What are the instructions?"
              name="instructions"
            />
            <button className="save-btn" type="submit">
              Save
            </button>
          </form>
        )}
      </Formik>
    </section>
  )
}

export default NewRecipeScreen





