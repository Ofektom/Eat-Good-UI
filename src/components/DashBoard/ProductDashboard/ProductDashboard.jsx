import React from 'react'
import './ProductDashboard.css'

const ProductDashboard = () => {

  return (
  <div className="body-wrapper">
 
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        {/* <!-- <a className="navbar-brand text-center" href="#">Logo</a> --> */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
            aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
            <div className="d-flex justify-content-between w-100">
                <div className="d-none d-lg-block">
                    
                </div>
                <form className="d-flex align-items-center w-30">
                    <div className="input-group">
                        <span className="input-group-text"><i className="bi bi-search"></i></span>
                        <input type="search" className="form-control" placeholder="Search" aria-label="Search"/>
                        <span className="input-group-text"><i className="bi bi-filter"></i></span>
                    </div>
                </form>
            </div>
        </div>
      </nav>
     

        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-1 col-md-1 col-sm-12 bg-light sidebar">
                    
                  
                    <ul>
                        <li className="first-sidebar-img"> <img src="./images/thai-hot-pot.png"/> </li>
                        <hr/>
                        <li className="sidebar-items"> <img src="./images/vuesax-bulk-home.png"/> <p> Home</p> </li>
                        <li className="sidebar-items"> <img src="./images/vuesax-bulk-gps.png"/> <p> Track </p></li>
                        <li className="sidebar-items"> <img src="./images/vuesax-bulk-clock.png"/> <p> Orders </p> </li>
                        <li className="sidebar-items"> <img src="./images/vuesax-bulk-messages-2-875.png"/> <p> Chat </p> </li>
                        <li className="sidebar-items"> <img src="./images/vuesax-bulk-notification-mhd.png"/> <p> Alert </p>  </li>
                        <li className="sidebar-items"> <img src="./images/vuesax-bulk-setting-2-7RM.png"/> <p> Settings </p> </li>
                        <li> <img src="./images/Ellipse 4.png" className="img-fluid rounded-4" /> </li><br/>
                        <li> <img src="./images/signout.png"/> </li>

                    </ul>
                </div>

                <div className="col-lg-8 col-md-8 col-sm-12 main-content float-start">
                   
                    <div className="col-12 categories">
                      <div className="row"> 
                    
                          <ul>
                            <li> <img src="images/fire.png"/> Trending</li>
                            <li> <img src="images/soup.png"/> Soups and Stews</li>
                            <li> <img src="images/rice-bowl.png"/> Rice Dishes</li>
                            <li> <img src="images/meat.png"/> Grilled and Roasted Foods</li>
                            <li> <img src="images/coffee-beans.png"/> Raw Food </li>
                        </ul>
                      
                      </div>
                       
                    </div> 

                    <div className="col-sm-12 col-md-10 col-lg-12 products d-flex">
                        <div className="row">

                            <div className="col-sm-12 col-md-3 col-lg-3 rounded-4 card-prod ">
                                <div className="card product-card">
                                    <div className="col-11">
                                        <img src="images/frame-38813436.png"
                                            className="card-img-top img-fluid rounded-5" alt="..."/>
                                        <span className="rating float-end"> <i className="bi bi-star-fill"></i>
                                            &nbsp;4.8(32) </span>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title"> Product Title</h5>
                                    </div>
                                    <div className="card-footer">
                                        <button className="btn float-start">Add  <i
                                                className="bi bi-plus"></i> </button>
                                        <span className="price float-end"> ₦ 100,000 </span>
                                        <p className="product-weight float-end"> /500kg </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-3 col-lg-3 rounded-4 card-prod ">
                                <div className="card product-card">
                                    <div className="col-11">
                                        <img src="images/frame-38813436.png"
                                            className="card-img-top img-fluid rounded-5" alt="..."/>
                                        <span className="rating float-end"> <i className="bi bi-star-fill"></i>
                                            &nbsp;4.8(32) </span>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title"> Product Title</h5>
                                    </div>
                                    <div className="card-footer">
                                        <button className="btn float-start">Add <i
                                                className="bi bi-plus"></i> </button>
                                        <span className="price float-end"> ₦ 100,000 </span>
                                        <p className="product-weight float-end"> /500kg </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-3 col-lg-3 rounded-4 card-prod ">
                                <div className="card product-card">
                                    <div className="col-11">
                                        <img src="images/frame-38813436.png"
                                            className="card-img-top img-fluid rounded-5" alt="..."/>
                                        <span className="rating float-end"> <i className="bi bi-star-fill"></i>
                                            &nbsp;4.8(32) </span>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title ">Product Title</h5>
                                    </div>
                                    <div className="card-footer">
                                        <button className="btn float-start">Add <i
                                                className="bi bi-plus"></i> </button>
                                        <span className="price float-end"> ₦ 100,000 </span>
                                        <p className="product-weight float-end"> /500kg </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-3 col-lg-3 rounded-4 card-prod ">
                                <div className="card product-card">
                                    <div className="col-11">
                                        <img src="images/frame-38813436.png"
                                            className="card-img-top img-fluid rounded-5" alt="..."/>
                                        <span className="rating float-end"> <i className="bi bi-star-fill"></i>
                                            &nbsp;4.8(32) </span>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title ">Product Title</h5>
                                    </div>
                                    <div className="card-footer">
                                        <button className="btn float-start">Add <i
                                                className="bi bi-plus"></i> </button>
                                        <span className="price float-end"> ₦ 100,000 </span>
                                        <p className="product-weight float-end"> /500kg </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div> 


                </div> 

                <div className="col-lg-3 col-md-3 col-sm-12 bg-light cart">
                   
                    <div className="cart-heading float-start">
                        <h2>MY CART  <span className="badge bg-primary">4</span> </h2> 
                    </div>

                    <div className="col-12 cart-area">
                      <div className="row">
                          <div className="col-3">
                              <div className="cart-area-image">
                                  <img src="images/frame-38813436.png" className="img-fluid"/>
                              </div>
                          </div>
                          <div className="col-8 cart-area-details">
                              <p className="prod-desc"> Ofada stew </p>
                              <p> <span className="text-brown"> Note: Make it spicy </span> </p>
                              <p> <span className="prod-price"> #100,000 </span> <span className="text-brown"> /500kg </span></p>
                              <div className="quantity-container  mt-4">
                                  <i className="bi bi-dash quantity-icon"></i> &nbsp;
                                  <span className="quantity">1</span> &nbsp;
                                  <i className="bi bi-plus quantity-icon"></i>
                                  <span className="float-end card-edit"> <img  src="images/vuesax-bulk-edit-2.png"/> </span>
                              </div>
                          </div>
                          <div className="col-1 empty-div">

                          </div>
                          <div className="col-2 cart-area-actions clearfix">

                          </div>

                          <p> <hr/> </p>
                      </div> 

                    </div> 

                    <div className="col-12 cart-area">
                      <div className="row">
                          <div className="col-3">
                              <div className="cart-area-image">
                                  <img src="images/frame-38813436.png" className="img-fluid"/>
                              </div>
                          </div>
                          <div className="col-8 cart-area-details">
                              <p className="prod-desc"> Ofada stew </p>
                              <p> <span className="text-brown"> Note: Make it spicy </span> </p>
                              <p> <span className="prod-price"> #100,000 </span> <span className="text-brown"> /500kg </span></p>
                              <div className="quantity-container  mt-4">
                                  <i className="bi bi-dash quantity-icon"></i> &nbsp;
                                  <span className="quantity">1</span> &nbsp;
                                  <i className="bi bi-plus quantity-icon"></i>
                                  <span className="float-end card-edit"> <img  src="images/vuesax-bulk-edit-2.png"/> </span>
                              </div>
                          </div>
                          <div className="col-2 empty-div">

                          </div>
                          <div className="col-2 cart-area-actions clearfix">

                          </div>

                          <p> <hr/> </p>
                      </div> 

                    </div> 


                    <div className="col-12 cart-area">
                      <div className="row">
                          <div className="col-3">
                              <div className="cart-area-image">
                                  <img src="images/frame-38813436.png" className="img-fluid"/>
                              </div>
                          </div>
                          <div className="col-8 cart-area-details">
                              <p className="prod-desc"> Ofada stew </p>
                              <p> <span className="text-brown"> Note: Make it spicy </span> </p>
                              <p> <span className="prod-price"> #100,000 </span> <span className="text-brown"> /500kg </span></p>
                              <div className="quantity-container  mt-4">
                                  <i className="bi bi-dash quantity-icon"></i> &nbsp;
                                  <span className="quantity">1</span> &nbsp;
                                  <i className="bi bi-plus quantity-icon"></i>
                                  <span className="float-end card-edit"> <img  src="images/vuesax-bulk-edit-2.png"/> </span>
                              </div>
                          <div className="col-2 empty-div">

                          </div>
                          <div className="col-2 cart-area-actions clearfix">

                          </div>

                          <p> <hr/> </p>
                      </div>

                    </div> 

                 
                    <div className="col-sm-12  col-md-10 offset-md-1  col-lg-10 offset-lg-1 checkout-area">
                        <div className="row">
                            <div className="col-md-12 cart-div">
                            
                                <div>
                                    <p> Items <span className="float-end"> ₦ 120,000</span> </p>
                                    <p> Tax(12%) <span className="float-end"> ₦ 12,000 </span> </p> 
                                    <hr/>
                                    <p> Total: <span className="float-end"> ₦3,000 </span> </p>
                                </div>

                                <div className="d-grid gap-2 mb-4 pay-btn">
                                  <button className="btn btn-primary buy-now-btn ">  Make Payments </button>
                              </div>
                            </div>
                        </div>
                            
                        
                    </div>

                </div> 

                <div className="col-lg-1 col-md-1 col-sm-12 bg-light empty-space">
                  
                </div>
            </div> 
        </div> 

    </div>
    </div>
  );
};


export default ProductDashboard;