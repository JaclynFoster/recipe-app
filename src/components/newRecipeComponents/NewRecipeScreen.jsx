import React, { useState } from 'react'
import { Formik } from 'formik'

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
    console.log('values:', values, ingredients)
  }

  return (
    <section>
      <h1>Tell us about your Recipe!</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <input
              onChange={handleChange}
              value={values.recipeName}
              placeholder="Name"
              name="recipeName"
            />
            <input
              onChange={handleChange}
              value={values.imageURL}
              placeholder="Image URL"
              name="imageURL"
            />
            <input
              onChange={handleChange}
              value={values.type}
              type="radio"
              placeholder="Cook"
              name="type"
            />
            <label>Cook</label>
            <input
              onChange={handleChange}
              value={values.type}
              type="radio"
              placeholder="Bake"
              name="type"
            />
            <label>Bake</label>
            <input
              onChange={handleChange}
              value={values.type}
              type="radio"
              placeholder="Drink"
              name="type"
            />
            <label>Drink</label>
            <input
              onChange={handleChange}
              value={values.prepTime}
              placeholder="Prep Time"
              name="prepTime"
            />
            <input
              onChange={handleChange}
              value={values.cookTime}
              placeholder="Cook Time"
              name="cookTime"
            />
            <input
              onChange={handleChange}
              value={values.serves}
              placeholder="Serves"
              name="serves"
            />
            <input
              onChange={e => setName(e.target.value)}
              value={name}
              placeholder="Ingredient"
              name="ingredients"
            />
            <input
              name="quantity"
              onChange={e => setQuantity(e.target.value)}
              value={quantity}
              placeholder="Quantity"
            />
            <button type="button" className="add-btn" onClick={addIngredient}>
              Add Another
            </button>
            <textarea
              onChange={handleChange}
              value={values.instructions}
              placeholder="What are the instructions?"
              name="instructions"
            />
            <button type="button">Save</button>
          </form>
        )}
      </Formik>
    </section>
  )
}

export default NewRecipeScreen


