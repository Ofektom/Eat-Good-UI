import React from 'react'
import { Link } from 'react-router-dom'
import './AddProductButton.css'

const AddProductButton = () => {
  return (
    <div>
        <Link to={"/product-add"}><button className="add-new-dish-btn"><p className='button-text'>Add new Dish</p></button></Link> 
    </div>
  )
}

export default AddProductButton