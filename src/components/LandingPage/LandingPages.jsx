import { useState } from 'react'
import './LandingPages.css';
import logoImage from "/src/assets/images/thai-hot-pot.png";
import heroImage from "/src/assets/ellipse-291-bg.png";
import upImage from "/src/assets/images/Frame 38813437.png"
import downImage from "/src/assets/images/Frame 38813437@2x.png"
import { Link } from 'react-router-dom';


  export default function LandingPages () {
    const [isActiveLeft, setIsActiveLeft] = useState(false);
    const [isActiveRight, setIsActiveRight] = useState(false);

    const handleClickLeft = () => {
        setIsActiveLeft(true);
        setIsActiveRight(false);
    };

    const handleClickRight = () => {
        setIsActiveRight(true);
        setIsActiveLeft(false);
    };
  return (
    <div className='landing-container'>
   
        <div className='landing-navbar'>
            <div className='app-logo'>
                <img src={logoImage} alt="logo" className='landing-logo' />
                <div className='logo-text'>
                    Chow
                    <p className='logo-slogan'>...eat your choice</p>
                </div>
            </div>
            
  
                <ul className='nav-list'>
                    <Link to={"#"} onClick={() => document.getElementById('hero-section').scrollIntoView({ behavior: 'smooth' })}><li>Home</li></Link>
                    <Link to={"#"} onClick={() => document.getElementById('services-section').scrollIntoView({ behavior: 'smooth' })}><li>Services</li></Link>
                    <Link to={"#"} onClick={() => document.getElementById('menu-section').scrollIntoView({ behavior: 'smooth' })}><li>Menu</li></Link>
                    <Link to={"#"} onClick={() => document.getElementById('footer').scrollIntoView({ behavior: 'smooth' })}><li>Contact</li></Link>
                </ul>
                <Link to={"/signup"}><button className='button1' ><div className='btn-text1'>Customer</div></button></Link>
                <Link to={"/sign"}><button className='button2' ><div className='btn-text'>Vendor</div></button></Link>
        </div>
        <div>
         <div id="hero-section">
            <div className='hero-first'>
                <h2 className='hero-text'>
                Claim Best Offer on African <span className='hero-inline'>Food</span>  & <span className='hero-inline'>Ingredients.</span>  
                </h2>
                <p className='hero-paragraph'>
                Our job is to fill your tummy with delicious food with fast and free delivery
                </p>
                <Link to={"/login"}><button className='hero-button'>Get Started</button></Link>
            </div>
            <div className='hero-second'>
                <img className='hero-main-image' src={heroImage} alt="hero image" />
                <div className='hero-up-card'>
                    <div className='card-up'>
                            
                                <div className="card-up-rating">
                                  <img className="star-up" src="./src/assets/images/star.png"/>
                                  <p className="rating-up">4.8(32)</p>
                                </div>
                            <div className="card-up-content">
                                
                                  <p className="product-name-up">Ofada stew</p>
                                  <div className="card-up-down">
                                    <button className="add-to-cart" id="addToCartButton">
                                      <p className="add-text">Add</p>
                                      <img className="plus-icon" src="./src/assets/Outline.png"/>
                                    </button>
                                    <div className="product-price-size-up">
                                      <p className="price-up">₦ 100,000</p>
                                      <p className="size-up">/ 500kg</p>
                                    </div>
                                  </div>
                               
                            </div>
                    </div>
                    <img className='img-up' src={upImage} alt="card up" />
                </div>
                <img className="group-53" src="../src/assets/group-53.png"/>
                <img className="noto-fire" src="../src/assets/images/noto_fire.png"/>
                <img className='rectangle1' src="../src/assets/Rectangle.png" alt="" />
                <div className='hero-card-down'>
                    <div className='card-down'>

                        <div className="card-down-rating">
                            <img className="star-down" src="./src/assets/images/star.png"/>
                            <p className="rating-down">4.8(32)</p>
                        </div>
                        <div className="card-down-content">

                            <p className="product-name-down">Ofe Oha</p>
                            <div className="card-down-down">
                                <button className="add-to-cart2" id="addToCartButton2">
                                    <p className="add-text2">Add</p>
                                    <img className="plus-icon2" src="./src/assets/Outline.png"/>
                                </button>
                                <div className="product-price-size-down">
                                    <p className="price-down">₦ 100,000</p>
                                    <p className="size-down">/ 500kg</p>
                                </div>
                            </div>
            
                        </div>
                        </div>
                    <img className='img-down' src={downImage} alt="" />
                </div>
                <img className='rectangle2' src="src/assets/Rectangle.png" alt="" />

            </div>
        </div>
      </div>
       <div id="services-section">
       <div className='services'>
            <img className='rectangle3' src="../src/assets/Rectangle.png" alt="" />
            <div className='services-title'>What we Serve</div>
            <img className='rectangle4' src="../src/assets/Rectangle-yellow.png" alt="" />
            <div className='services-contents'>
                <div className='content1'>
                    <img className="order-food" src="../src/assets/images/Order food-pana 1.png"/>
                    <div className="frame-38813526-1o1">
                        <p className="easy-to-order">Easy To Order</p>
                        <p className="only-need">You only need a few steps in ordering food</p>
                    </div>
                </div>
                <div className='content2'>
                    <img className="take-away" src="../src/assets/images/Take Away-rafiki 1.png"/>
                    <div className="frame-38813527-1K9">
                        <p className="fastest-delivery">Fastest Delivery</p>
                        <p className="delivery-that">Delivery that is always ontime even faster</p>
                    </div>
                </div>
                <div className='content3'>
                    <img className="waiters" src="../src/assets/images/Waiters-rafiki 1.png"/>
                    <div className="frame-38813528-Hfy">
                        <p className="best-quality">Best Quality</p>
                        <p className="not-only-fast">Not only fast for us quality is also number one</p>
                    </div>
                </div>
            </div>
        </div>
        </div>

        
        <div id="menu-section">
            <div className='menu-title'>
                <div className='menu-title-text'>
                    Our Menu
                </div>
                <div className='menu-buttons'>
                    <div 
                        className='menu-button' 
                        style={{ background: isActiveLeft ? '#2F80ED' : '#E0E0E0' }}
                        onClick={handleClickLeft}
                    >
                        <span className='arrow-left' >
                            {isActiveLeft ? <img src="../src/assets/white-arrow.png" style={{ transform: "scalex(-1)" }} /> : <img src="../src/assets/black-arrow.png" alt="" /> }
                        </span>
                    </div>
                    <div 
                        className="menu-button" 
                        style={{ background: isActiveRight ? '#2F80ED' : '#E0E0E0' }}
                        onClick={handleClickRight} 
                    >
                        <span className='arrow-right' style={{ color: isActiveRight ? '#FFFFFF' : '#010F1C' }}>
                            {isActiveRight ? <img src="../src/assets/white-arrow.png"  /> : <img src="../src/assets/black-arrow.png" alt="" style={{ transform: "scalex(-1)" }}/> }
                        </span>
                    </div>
                </div>
            </div>
            <div className='menu-action'>
                <div className='menu-category'  style={{overflowY: 'scroll', height: '200px', width: '400px'}}>
                    <div className="frame-rice" onClick={"#"}>
                        <img className="rice-image" src="../src/assets/rice-bowl.png"/>
                        <p className="rice-dishes">Rice Dishes</p>
                    </div>
                    <div className="frame-soups" onClick={"#"}>
                        <img className="soup-image" src="../src/assets/soup.png"/>
                        <p className="soups-and-stews">Soups and Stews</p>
                    </div>
                    <div className="frame-meat" onClick={"#"}>
                        <img className="meat-image" src="../src/assets/meat-n8B.png"/>
                        <p className="grilled-and-roasted">Grilled and Roasted Foods</p>
                    </div>
                    <div className="frame-raw" onClick={"#"}>
                        <img className="raw-image" src="../src/assets/raw-food.png"/>
                        <p className="raw-foods">Raw Foods</p>
                    </div>
                </div>
                <div className='menu-items'>
                    <div className='item-1'>
                        <img className='product-image1' src="../src/assets/images/Desktop - 3 (1).png" alt="product-image" />
                        <h3 className='product-name'>Native Jollof Rice</h3>
                        <h3 className='product-price'>₦ 100,000/</h3><span className='product-size'>500kg</span>
                        <div className='product-button' onClick={"#"}>Order Now <span className='item-arrow'><img src="../src/assets/white-arrow.png" alt="" /></span></div>
                    </div>
                    <div className='item-2'>
                    <img className='product-image2' src="../src/assets/frame-15-bg.png" alt="product-image" />
                        <h3 className='product-name2'>Goat Meat Jollof Rice</h3>
                        <h3 className='product-price2'>₦ 100,000/</h3><span className='product-size2'>500kg</span>
                        <div className='product-button2' onClick={"#"}>Order Now <span className='item-arrow2'><img src="../src/assets/white-arrow.png" alt="" /></span></div>
                    </div>
                </div>
            </div>
        </div>
        <div id="footer">
            <p className="copyright-contact">© 2024 Bellefu | Powered by Ofektom</p>
            <div className="social-contact">
                <Link to={"https://web.facebook.com/okpoho.t/"}><img className="grouppy1" src="../src/assets/facebook_logo.png"/></Link>
                <Link to={"https://twitter.com/CritiqAll"}><img className="grouppy2" src="../src/assets/images/Twitter logo.png"/></Link>
                <Link to={"#"}><img className="grouppy3" src="../src/assets/images/linkedin logo.png"/></Link>
                <Link to={"#"}><img className="grouppy4" src="../src/assets/images/instagram logo.png"/></Link>
            </div>
        </div>

    </div>
  )
}

