import { useEffect, useState } from 'react'
import './ProductDashboard.css'
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductDashboard = () => {
    const [productList, setProductList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [cartList, setCartList] = useState([]);
    const pageSize = 10;


    //VIEW BY CATEGORY SECTION
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

    


      //PAGINATION SECTiON
        // Calculate total number of pages
        const totalPages = Math.ceil(productList.length / pageSize);

        // Handle page change
        const handlePageChange = (page) => {
            setCurrentPage(page);
        };

        // Handle previous page
        const handlePrevPage = () => {
            if (currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1);
            }
        };

        // Handle next page
        const handleNextPage = () => {
            if (currentPage < totalPages) {
            setCurrentPage((prevPage) => prevPage + 1);
            }
        };

  return (
    <><div className="body-wrapper">
    <nav className="navbar navbar-expand-lg ">
    
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
            <div className="d-flex justify-content-between w-100">
               
                <form className="d-flex search-form  w-25">
                    <div className="input-group">
                        <span className="input-group-text"> <img src="../src/assets/vuesax-bulk-search-normal-4RZ.png" className="img-fluid" /> </span>
                        <input type="search" className="form-control rounded-2" placeholder="Search" aria-label="Search" />
                        <span className="input-group-text"> <img src="../src/assets/vuesax-bulk-candle-2.png" className="img-fluid" /> </span>
                    </div>
                </form>
            </div>
        </div>
      </nav>

    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-1 col-md-1 col-sm-12  sidebar">
                { /* Sidebar content */ }
              
                <ul>
                    <li className="first-sidebar-img"> <img src="src/assets/thai-hot-pot.png" /> </li>
                    <hr />
                    <li className="sidebar-items"> <img src="../src/assets/vuesax-bulk-home.png" /> <p> Home</p> </li>
                    <li className="sidebar-items"> <img src="../src/assets/vuesax-bulk-gps.png" /> <p> Track </p></li>
                    <li className="sidebar-items"> <img src="../src/assets/vuesax-bulk-clock.png" /> <p> Orders </p> </li>
                    <li className="sidebar-items"> <img src="../src/assets/vuesax-bulk-messages-2-875.png" /> <p> Chat </p> </li>
                    <li className="sidebar-items"> <img src="../src/assets/vuesax-bulk-notification-mhd.png" /> <p> Alert </p>  </li>
                    <li className="sidebar-items"> <img src="../src/assets/vuesax-bulk-setting-2-7RM.png" /> <p> Settings </p> </li>
                    <li> <img src="./images/ellipse-5-bg.png" className="img-fluid rounded-4" /> </li>
                    <li> <img src="./images/signout.png" /> </li>

                </ul>
            </div>

            <div className="col-lg-8 col-md-8 col-sm-12 main-content float-start">
                { /* Main content */ }
                <div className="col-12 categories">
                  <div className="row"> 
                
                  <ul>
                            <Link to={"/admin-dashboard"}><li onClick={() => handleCategoryClick('trending')}> 
                                
                                    <img src="src/assets/images/Fire.png" /> Trending
                               
                            </li></Link>
                            
                            <Link to={"/admin-dashboard"}><li onClick={() => handleCategoryClick('soups')}>
                                <img src="src/assets/images/soup.png" /> Soups and Stews
                            </li></Link>

                        
                            <Link to={"/admin-dashboard"}><li onClick={() => handleCategoryClick('rice')}>
                                <img src="src/assets/rice-bowl.png" /> Rice Dishes
                            </li></Link>
                          
                            <Link to={"/admin-dashboard"}><li onClick={() => handleCategoryClick('grilled')}>
                                <img src="src/assets/meat.png" /> Grilled and Roasted Foods
                            </li></Link>    
                          </ul>
                  
                  </div>
                   
                </div> { /*End Categories*/ }

                <div className="col-sm-12 col-md-10 col-lg-12 products d-flex">
                    <div className="row">


                    {productList.length > 0 ? (
                            productList.map((product) => (
                                <div key={product.id} className="col-sm-12 col-md-3 col-lg-3 rounded-4 card-prod">
                                <div className="card product-card">
                                    <div className="col-11">
                                    <img src={product.imageUrl} className="card-img-top img-fluid rounded-5" alt="Product" />

                                    <span className="rating float-end">
                                        <i className="bi bi-star-fill" /> {product.rating} ({product.ratingCount})
                                    </span>
                                    </div>
                                    <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    </div>
                                    <div className="card-footer">

                                    <button className="btn float-start" onClick={() => handleAddToCart(product.id, product.userId)}>
                                        Add
                                    </button>
                                    
                                    <span className="price float-end">₦ {product.price}</span>
                                    <p className="product-weight float-end">/{product.size}</p>
                                    </div>
                                    {/* End Card Footer */}
                                </div>
                                </div>
                            ))
                            ) : (
                            <p>No product added yet</p>
                            )}
                       


                    </div>{ /*End Row*/ }
                </div> { /* End Products col-12 */ }

                {/* Pagination */}
      {totalPages > 1 && (
        <div className="pagination">
          {/* Previous button */}
          <button onClick={handlePrevPage} disabled={currentPage === 1}>
            Previous
          </button>

          {/* Page numbers */}
          {[currentPage].map((page) => (
            <li key={page} className="active" onClick={() => handlePageChange(page)}>
              {page}
            </li>
          ))}

          {/* Next button */}
          <button onClick={handleNextPage} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      )}


            </div> { /* End Main Content */ }

            { /* Cart Section */ }
<div className="col-lg-3 col-md-3 col-sm-12  cart">
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
  </div> { /*End Cart Area*/ }

             
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

            </div> { /* End Cart */ }

            <div className="col-lg-1 col-md-1 col-sm-12  empty-space">
                { /* Empty space */ }
            </div>
        </div> { /* End Row */ }
    </div> { /* End Container-fluid */ }

</div> { /*End Body wrapper */ }</>
  );
};


export default ProductDashboard;