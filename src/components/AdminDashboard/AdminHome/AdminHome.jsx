import React, { useEffect, useState } from 'react'
import './AdminHome.css'
import trendingIcon from "/src/assets/images/Fire.png"
import soupsIcon from "/src/assets/soup.png"
import riceIcon from "/src/assets/rice-bowl.png"
import meatIcon from "/src/assets/meat.png"
import rawIcon from "/src/assets/coffee-beans.png"
import ratingStar from "/src/assets/star-ZDd.png"
import arrowDown from '/src/assets/Down-arrow.png'
import arrowDown2 from '/src/assets/Down-arrow2.png'

import foodSample from "/src/assets/images/Ofe oha.png"
import AddProductButton from '../AddProductButton/AddProductButton'
import Navbar from '../../DashBoard/Navbar/Navbar'
import axios from 'axios'

const AdminHome = () => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [productList, setProductList] = useState([]);
   

    const fetchProducts = async (category) => {
        try {
          let endpoint;
          if (category === 'trending') {
            endpoint = '/api/v1/products/trending';
          } else {
            endpoint = `/api/v1/products/category/${category}`;
          }
      
          const response = await fetch(endpoint);
          const data = await response.json();
          setProductList(data);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };
      
      const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        fetchProducts(category);
      };

      useEffect(() => {
        // Fetch products on component mount
        fetchProducts(selectedCategory);
      }, [selectedCategory]);



//  VIEW PRODUCT SECTION
    useEffect(() => {
      const fetchProductData = async () => {
        try {
          // Fetch product data from the API endpoint
          const productResponse = await fetch("http://localhost:8081/api/v1/products/user/view/all");
          const productData = await productResponse.json();
          setProductList(productData);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchProductData();
    }, []);

    const handleAvailabilityChange = async (productId, isAvailable) => {
      try {
          const endpoint = isAvailable ? 
          `http://localhost:8081/api/v1/products/product-available/${productId}` : 
          `http://localhost:8081/api/v1/products/out-of-stock/${productId}`;
          await axios.patch(endpoint);
          // Update the product availability in the local state
          setProductList(productList.map(product => product.id === productId ? { ...product, isAvailable } : product));
      } catch (error) {
          console.error('Error updating availability:', error);
      }
  };

    
  return (
    <div className='admin-home-container'>
        <Navbar />
        <div className='admin-category'>
            <ul className='admin-category-list'>
                <li className={selectedCategory ===  'trending' ? 'trending-active' : 'trending'} onClick={() => handleCategoryClick('trending')}>
                    <img className='category-image' src={trendingIcon} /> Trending
                </li>
                <li className={selectedCategory === 'soups' ? 'soups-active' : 'soups'} onClick={() => handleCategoryClick('soups')}>
                    <img className='category-image' src={soupsIcon} /> Soups and Stews
                </li>
                <li className={selectedCategory === 'rice' ? 'rice-active' : 'rice'} onClick={() => handleCategoryClick('rice')}>
                    <img className='category-image' src={riceIcon} /> Rice Dishes
                </li>
                <li className={selectedCategory === 'grilled' ? 'grilled-active' : 'grilled'} onClick={() => handleCategoryClick('grilled')}>
                    <img className='category-image' src={meatIcon} /> Grilled and Roasted Foods
                </li>  
                <li className={selectedCategory === 'raw' ? 'raw-active' : 'raw'} onClick={() => handleCategoryClick('raw')}>
                    <img className='category-image' src={rawIcon} /> Raw Food
                </li>  
            </ul>
        </div>
        <AddProductButton />
        <div className="admin-products-container">
                <div className="admin-row1">

                    {productList.length > 0 ? (
                            productList.map((product) => (
                                
                                <div 
                                    key={product.id} 
                                    className="admin-product-card"
                                >
                                    
                                    <div className="admin-card-lower">
                                    <img src={foodSample} className="admin-product-image" alt="Product" />
                                        <div className="admin-rating">
                                            <img src={ratingStar} className="admin-rating-star" /> 
                                            <p className='admin-rating-number'>
                                                {product.rating} ({product.ratingCount})
                                            </p>
                                        </div>
                                        <div className='admin-product-details'>
                                            <h5 className="admin-product-title">
                                                {product.name}
                                            </h5>
                                            <div className="admin-card-footer">
                                            <select 
                                                id={product.isAvailable ? "admin-card-button" : "admin-card-button2"} 
                                                name="isAvailable" 
                                                value={product.isAvailable ? 'Available' : 'Sold out'} 
                                                onChange={(e) => handleAvailabilityChange(product.id, e.target.value === 'Available')}
                                                required
                                              >
                                                <option 
                                                    className="card-button-text" 
                                                    value="Available">
                                                     Available
                                                      <img className='admin-plus-icon-active' src={arrowDown} alt="plus" />
                                                </option>
                                                <option 
                                                    className="card-button-text" 
                                                    value="Sold out">
                                                     Sold out
                                                      <img className='admin-plus-icon-active' src={arrowDown2} alt="plus" />
                                                </option>
                                            </select>
                     
                                                {/* <button 
                                                    className={product.isAvailable ? "admin-card-button" : "admin-card-button2"}
                                                    onClick={() => handleAvailabilityChange(product.id, !product.isAvailable)}
                                                >
                                                    <p className='card-button-text'>{product.isAvailable ? 'Available' : 'Sold out'}</p>
                                                    <img className='admin-plus-icon-active' src={product.isAvailable ? arrowDown : arrowDown2} alt="plus" />
                                                </button> */}
                                                <div className='admin-price-size'>
                                                    <span className="admin-price">
                                                        ₦{product.price}
                                                    </span>
                                                    <p className="admin-size">
                                                        /{product.size}
                                                        <span>kg</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                
                             ))
                        ) : (
                            <p>No food added yet</p>
                    )} 
                </div>
                
        </div> 
    </div>
  )
}

export default AdminHome