import React, { useEffect, useState } from 'react'
import './HomeComponent1.css'
import trendingIcon from "/src/assets/images/Fire.png"
import soupsIcon from "/src/assets/soup.png"
import riceIcon from "/src/assets/rice-bowl.png"
import meatIcon from "/src/assets/meat.png"
import rawIcon from "/src/assets/coffee-beans.png"
import ratingStar from "/src/assets/star-ZDd.png"
import plusIconActive from '/src/assets/plus-24-outline-B1V.png'
import editIcon from "/src/assets/vuesax-bulk-edit-2.png"
import axios from 'axios'
import PropTypes from 'prop-types'

import foodSample from "/src/assets/images/Ofe oha.png"
import { useParams } from 'react-router-dom'

const HomeComponent1 = ({handleMakePayment}) => {
  const { cartId } = useParams();
  const [selectedCategory, setSelectedCategory] = useState('');
    const [productList, setProductList] = useState([]);
    const [cartData, setCartData] = useState(null);
   

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

      //  VIEW CART SECTION
      useEffect(() => {
        const fetchCartData = async (cartId) => {
          try {
            const response = await fetch(`http://localhost:8081/api/v1/carts/cart/${cartId}`);
            const data = await response.json();
            setCartData(data);
          } catch (error) {
            console.error('Error fetching cart data:', error);
          }
        };
    
        fetchCartData(cartId);
      }, [cartId]);



    const handleAddToCart = async (productId, productUserId) => {
        try {
          // Use the userId from the product object
          const userId = productUserId;
      
          // Call the backend endpoint to add the product to the cart
         await axios.post(`http://localhost:8081/api/v1/carts/adding-to-cart/${userId}/${productId}`);
      
         
        } catch (error) {
          console.error('Error adding product to cart:', error);
        }
      };


      const handleRemoveFromCart = async (productId) => {
        try {
          // Call the backend endpoint to add the product to the cart
         await axios.post(`http://localhost:8081/api/v1/carts/remove-from-cart/${productId}`);
      
         
        } catch (error) {
          console.error('Error adding product to cart:', error);
        }
      };

  return (
    <div>
        <div className='category'>
            <ul className='category-list'>
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
        
        <div className="products-container">
                <div className="row1">

                    {productList.length > 0 ? (
                            productList.map((product) => (
                                
                                <div 
                                    key={product.id} 
                                    className="product-card"
                                >
                                    
                                    <div className="card-lower">
                                    <img src={foodSample} className="product-image" alt="Product" />
                                        <div className="rating">
                                            <img src={ratingStar} className="rating-star" /> 
                                            <p className='rating-number'>
                                                {product.rating} ({product.ratingCount})
                                            </p>
                                        </div>
                                        <div className='product-details'>
                                            <h5 className="product-title">
                                                {product.name}
                                            </h5>
                                            <div className="card-footer">
                                                <button 
                                                    className="card-button" 
                                                    onClick={() => handleAddToCart(product.id, product.userId)}
                                                >
                                                    Add
                                                    <img className='plus-icon-active' src={plusIconActive} alt="plus" />
                                                </button>
                                                <div className='price-size'>
                                                    <span className="price">
                                                        ₦{product.price}
                                                    </span>
                                                    <p className="size">
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
        {/* {cartData && ( */}
        <div className='cart-section'>
          <div className="cart">
          { /* Cart content */ }
            <div className="cart-heading">
                <h2 className='cart-title'>MY CART</h2>
                  <div className="cart-length">
                    <p className='length-text'>
                    4
                    {/* {cartData.cartItemDtos.length} */}
                    </p>
                  </div>
                
            </div>

            {/* {cartData.cartItemDtos.map((cartItem) => ( */}
            <div className="cart-area">
                  <div className="cart-row">
                    <img 
                          src='../src/assets/images/Edikaikong soup.png'
                          // src={cartItem.product.imageUrl} 
                          className="cart-area-image" 
                          alt="Product" 
                    />
                    <div className="cart-area-details">
                        <p className="prod-desc">
                        Ofada stew
                        {/* {cartItem.product.name} */}
                        </p>
                        <p className="cart-note">
                           Note: More pepper
                           {/* {cartItem.product.note} */}
                        </p>
                        <p className="prod-price" >
                          ₦1000,000 
                          {/* ₦{cartItem.product.price} */}
                        </p>
                        <span className="cart-size">
                          /100kg
                          {/* /{cartItem.product.size}kg */}
                        </span>
                        <div className="quantity-container">
                          <div className='quantity'>
                            <div className="add-sub" role='button' onClick={handleRemoveFromCart}>-</div>
                            <div className="quantity-value">
                              1
                            {/* {cartItem.quantity} */}
                              </div> 
                            <div className="add-sub" role='button' onClick={handleAddToCart}>+</div> 
                          </div>
                          <img src={editIcon} /> 
                        </div>
                        
                    </div>
                    
                  </div>
                  <hr className='hairline' /> 
                </div>

              {/* ))} */}

          </div>
          <div className="checkout-area">
                  <div className="checkout">
                      <div className='checkout-details'>
                          <p> Items <span className="float-end"> 
                          ₦ 120,000
                          {/* ₦ {cartData.subtotalPrice} */}
                          </span> </p>
                          <p> Tax(12%) <span className="float-end"> 
                          ₦ 120,000
                          {/* ₦ {cartData.tax}  */}
                          </span> </p> 
                          <hr />
                          <p> Total: <span className="float-end"> 
                          ₦3,000
                          {/* ₦ {cartData.grandTotal}  */}
                          </span> </p>
                      </div>
                      <button className="make-payment" onClick={handleMakePayment}>Make Payments</button>
                  </div>
          </div>
        </div>
         {/* )} */}
    </div>
  )
}
HomeComponent1.propTypes = {
  handleMakePayment: PropTypes.func.isRequired,
};
export default HomeComponent1