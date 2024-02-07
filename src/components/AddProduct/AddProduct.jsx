import axios from 'axios';
import React, { useState } from 'react'
import './AddProduct.css'


const AddProduct = () => {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [size, setSize] = useState('');
    const [price, setPrice] = useState('');
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      // Get the token from localStorage
      const token = localStorage.getItem("jwtToken");
  
      // Define the product object
      const product = {
        name,
        category,
        size,
        price
      };
  
      // Send a POST request to the backend to add the product
      try {
        const response = await axios.post('http://localhost:8081/api/v1/products/vendor/add', product, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
  
        // Handle the response from the server
        if (response.status ===  200) {
          alert('Product added successfully!');
          // Reset the form fields
          setName('');
          setCategory('');
          setSize('');
          setPrice('');
        } else {
          alert('Failed to add product. Please try again.');
        }
      } catch (error) {
        console.error('Error adding product:', error);
        alert('An error occurred while adding the product.');
      }
    };
  
    return (
      <form className="form" onSubmit={handleSubmit}>
        <img src="../src/assets/Frame 38813503.png" className="img" alt="Dish Image" />
        <div className="div">New Dish</div>
        <img src="../src/assets/Food.png" className="img-2" alt="Camera Icon" />
        <div className="div-2">Dish</div>
        <div className="text">
          <img src="../src/assets/Food.png" className="img-3" alt="Food Icon" />
          <input
            className="input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter dish name"
          />
        </div>
        <div className="div-3">Dish category</div>
        <div className="div-4">
          <div className="div-5">
            <img src="../src/assets/soup.png" className="img-4" alt="Soup Icon" />
            <input
              className="input-2"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Enter dish category"
            />
          </div>
          <select
            id="menu"
            name="food"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
          </select>
        </div>
        <div className="div-6">Measurement/Size</div>
        <div className="div-7">
          <img src="../src/assets/Ellipse 290.png" className="img-6" alt="Measurement Icon" />
          <input
            className="input"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            placeholder="Enter measurement/size"
          />
        </div>
        <div className="div-8">Prize</div>
        <div className="div-9">
          <img src="../src/assets/tag-2.png" className="img-7" alt="Tag Icon" />
          <input
            className="input"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter prize"
          />
        </div>
        <div className="div-10">
          <button type="reset" className="button">Cancel</button>
          <button type="submit" className="button-2">Upload Dish</button>
        </div>
      </form>
    );
  };
  

export default AddProduct