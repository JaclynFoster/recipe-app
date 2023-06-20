import React from 'react'
import { Link } from 'react-router-dom'
import '../components/Header.css'

const Header = () => {
  return (
    <header className="header">
      <h2 className="title">Devmountain Eatery</h2>
      <nav className="nav">
        <Link to="">
          <button className="link">Home</button>
        </Link>
        <Link to="/newRecipe">
          <button className="link">Add Recipe</button>
        </Link>
      </nav>
    </header>
  )
}

export default Header

