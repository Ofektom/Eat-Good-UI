import axios from 'axios';
import { useEffect, useState } from 'react'
import './CartComponent.css'

const CartComponent = () => {
    const [cartList, setCartList] = useState([]);

    //ADD TO CART SECTION
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

      //VIEW CARTITEMS SECTION
      useEffect(() => {
        const fetchCartData = async () => {
          try {
            const cartResponse = await axios.get(`http://localhost:8081/api/v1/carts/cart/${cartId}`);
            setCartList(cartResponse.data);
          } catch (error) {
            console.error('Error fetching cart data:', error);
          }
        };
    
        fetchCartData();
      }, []);
  return (
    <div className='cart-section'>
        <div className="cart">
  { /* Cart content */ }
        <div className="cart-heading float-start">
            <h2>MY CART  <span className="badge bg-primary">{cartList.length}</span> </h2> 
        </div>

        <div className="col-12 cart-area">
            {cartList.map((cartItem) => (
            <div key={cartItem.id} className="row">
                <div className="col-3">
                <div className="cart-area-image">
                    <img src={cartItem.product.imageUrl} className="img-fluid" alt="Product" />
                </div>{ /*End Cart Area Image*/ }
                </div>{ /*End col-2*/ }
                <div className="col-8 cart-area-details">
                <p className="prod-desc">{cartItem.product.name}</p>
                <p> <span className="text-brown"> Note: {cartItem.product.note} </span> </p>
                <p> <span className="prod-price"> #{cartItem.product.price}</span> <span className="text-brown"> /{cartItem.product.size}</span></p>
                <div className="quantity-container  mt-4">
                    <i className="bi bi-dash quantity-icon" /> 
                    <span className="quantity">{cartItem.quantity}</span> 
                    <i className="bi bi-plus quantity-icon" />
                    <span className="float-end card-edit"> <img src="../src/assets/vuesax-bulk-edit-2.png" /> </span>
                </div>{ /*End Quantity Container*/ }
                </div>
                <div className="col-2 empty-div"></div>
                <div className="col-2 cart-area-actions clearfix"></div>
                <p> </p><hr /> <p />
            </div>
            ))}
        </div>
        </div>
        <div className="col-sm-12  col-md-10 offset-md-1  col-lg-10 offset-lg-1 checkout-area">
                    <div className="row">
                        <div className="col-md-12 cart-div">
                        
                            <div>
                                <p> Items <span className="float-end"> ₦ 120,000</span> </p>
                                <p> Tax(12%) <span className="float-end"> ₦ 12,000 </span> </p> 
                                <hr />
                                <p> Total: <span className="float-end"> ₦3,000 </span> </p>
                            </div>

                            <div className="d-grid gap-2 mb-4 pay-btn">
                              <button className="btn btn-primary buy-now-btn ">  Make Payments </button>
                          </div>
                        </div>
                    </div>
                        
                    
                </div>
    </div>
  )
}

export default CartComponent