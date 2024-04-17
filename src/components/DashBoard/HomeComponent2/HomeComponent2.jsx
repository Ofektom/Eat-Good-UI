import './HomeComponent2.css'
import { useEffect, useState } from 'react';
import editIcon from "/src/assets/vuesax-bulk-edit-2.png"
import axios from 'axios';
import { useParams } from 'react-router-dom';

const HomeComponent2 = () => {
  const { cartId } = useParams();
    const [cartData, setCartData] = useState(null);

     //  VIEW CART SECTION
     useEffect(() => {
      const fetchCartData = async () => {
        try {
          const response = await fetch(`http://localhost:8081/api/v1/carts/cart/${cartId}`);
          if (!response.ok) {
            throw new Error('Failed to fetch cart data');
          }
          const data = await response.json();
          console.log('Cart Data:', data); // Log the data to inspect in the console
          setCartData(data);
        } catch (error) {
          console.error('Error fetching cart data:', error);
        }
      };
    
      fetchCartData();
    }, [cartId]);


  
    const handleAddToCart = async (productId, productUserId) => {
        try {
          // Use the userId from the product object
          const userId = productUserId;
      
          // Call the backend endpoint to add the product to the cart
         await axios.post(`http://ocalhost:8081/api/v1/carts/adding-to-cart/${userId}/${productId}`);
      
         
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

      const handleMakePayment = async () => {
        try {
          // Call the backend endpoint to add the product to the cart
         await axios.post("http://localhost:8081/api/v1/paystack/createplan");
      
         
        } catch (error) {
          console.error('Error adding product to cart:', error);
        }
      };

  return (
    <div>
      
        <div className="second-receiver-container">
            <h1>Receiver Details</h1>
        </div> 

       {cartData && (
  <div className='second-cart-section'>
    <div className="second-cart">
      <div className="second-cart-heading">
        <h2 className='second-cart-title'>MY CART</h2>
        <div className="second-cart-length">
          <p className='second-length-text'>{cartData.count}</p>
        </div>
      </div>

      {cartData.cartItemDtos.map((cartItem) => (
        <div key={cartItem.product.id} className="second-cart-area">
          <div className="second-cart-row">
            <img 
              src='../src/assets/images/Edikaikong soup.png'
              // src={cartItem.product.imageUrl} 
              className="second-cart-area-image" 
              alt="Product" 
            />
            <div className="second-cart-area-details">
              <p className="second-prod-desc">
                {cartItem.product.name}
              </p>
              <p className="second-cart-note">
                Note: More pepper
              </p>
              <p className="second-prod-price"> 
                ₦{cartItem.product.price}
              </p>
              <span className="second-cart-size">
                /{cartItem.product.size}kg
              </span>
              <div className="second-quantity-container">
                <div className='second-quantity'>
                  <div className="second-add-sub" role='button' onClick={handleRemoveFromCart}>-</div>
                  <div className="second-quantity-value">
                    {cartItem.quantity}
                  </div> 
                  <div className="second-add-sub" role='button' onClick={handleAddToCart}>+</div> 
                </div>
                <img src={editIcon} alt="Edit Icon" /> 
              </div>
            </div>
          </div>
          <hr className='second-hairline' /> 
        </div>
      ))}

    </div>
    <div className="checkout-area">
      <div className="checkout">
        <div className='checkout-details'>
          <p>Items <span className="float-end">₦{cartData.subtotalPrice}</span></p>
          <p>Tax (12%) <span className="float-end">₦{cartData.tax}</span></p>
          <hr />
          <p>Total: <span className="float-end">₦{cartData.grandTotal}</span></p>
        </div>
        <button className="make-payment" onClick={handleMakePayment}>Make Payment</button>
      </div>
    </div>
  </div>
)}
    </div>
  )
}

export default HomeComponent2