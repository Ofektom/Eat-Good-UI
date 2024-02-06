import React from 'react'
import './LandingPage.css'
import { Link } from 'react-router-dom'

const LandingPage = () => {
    const handleAddToCart1 = () => {
    alert('Item added to cart!');
};

const handleAddToCart2 = () => {
  alert('Item added to cart!');
};


  return (
    <div className="landing-page-29H">
    <div className="auto-group-3rps-AmH">
        <div className="frame-38813524-thH">
            <div className="frame-38813522-RhD">
    <img className="thai-hot-pot-UvP" src="../src/assets/images/thai-hot-pot.png"/>
    <div className="eat-good-naija-ngB">Eat Good Naija</div>
    </div>

    <div className="frame-38813523-7TZ">
   <ul className="frame-38813521-FZm">
    <li className="frame-2-76B" >Home</li>
        <li className="frame-2-76B">Services</li>
        <li className="frame-3-ni7">Menu</li>
        <li className="contact-haB">Contact</li>
    </ul>
 
    <Link to={"./signup"}><button className="cta-EKD">
    Vendor Sign Up
  </button></Link>
  </div>
  </div>

  <div className="frame-38813535-G11">
    <div className="frame-54-PLX">
      <p className="claim-best">
        <span className="claim-best-sub-0">Claim Best Offer on African</span>
        <span className="claim-best-sub-1"> </span>
        <span className="claim-best-sub-2">Food</span>
        <span className="claim-best-sub-3"> </span>
        <span className="claim-best-sub-4">&amp; </span>
        <span className="claim-best-sub-5">Ingredients. </span>
        <span className="claim-best-sub-6"> </span>
</p>
<p className="our-job">Our job is to filling your tummy with delicious food and  with fast and free delivery</p>
<Link to={"./sign"}><button className="cta-DGw">Customer Sign Up</button></Link>

</div>

{/* <!-- Center Left --> */}
<div className="frame-38813534-hT1">
<div className="ellipse-16-FUX">
</div>
<div className="auto-group-xq7d-xdq">
  <div className="ellipse-291-6V9">
  </div>
  <div className="rectangle-7-Azo">
  </div>
  <div className="rectangle-8-UVh">
  </div>
  <div className="meal-card-zD9">
    <div className="frame-38813444-7oZ">
      <div className="frame-38813443-Dbh">
        <img className="star-jpw" src="../src/assets/images/star.png"/>
        <p className="item-4832-sw9">4.8(32)</p>
      </div>
      <div className="frame-38813442-CTd">
        <p className="ofe-oha-8cB">Ofe Oha</p>
        <div className="frame-38813441-eaX">
          <div className="add-to-cart-Cc3" id="addToCartButton1" onClick={handleAddToCart1}>
            <p className="add-J9H">Add</p>
            <img className="plus-24-outline-RDu" src="../src/assets/images/Add to cart.png"/>
          </div>
          <div className="frame-38813440-ra7">
            <p className="item-100000-mwy">
              <span className="item-100000-mwy-sub-0">₦</span>
              <span className="item-100000-mwy-sub-1">100,000</span>
            </p>
            <p className="kg-jGX">/ 500kg</p>
          </div>
        </div>
      </div>
    </div>
    <img className="frame-38813437-EDH" src="../src/assets/images/Frame 38813437@2x.png"/>
</div>


<img className="group-53-YUs" src="../src/assets/images/fluent_send-24-filled.png"/>
<img className="noto-fire-Tbq" src="../src/assets/images/noto_fire.png"/>
<div className="meal-card-zbm">
  <div className="frame-38813444-wG7">
    <div className="frame-38813443-STm">
      <img className="star-kzF" src="./src/assets/images/star.png"/>
      <p className="item-4832-3iT">4.8(32)</p>
    </div>
    <div className="frame-38813442-Nkj">
      <p className="ofada-stew-XtX">Ofada stew</p>
      <div className="frame-38813441-fjq">
        <div className="add-to-cart-E2F" id="addToCartButton2" onClick={handleAddToCart2}>
          <p className="add-KJb">Add</p>
          <img className="plus-24-outline-41H" src="./src/assets/images/Add to cart.png"/>
        </div>
        <div className="frame-38813440-KC7">
          <p className="item-100000-Gd9">₦ 0</p>
          <p className="kg-mK1">/ 0kg</p>
        </div>
      </div>
    </div>
</div>
<img className="frame-38813437-4ou" src="../src/assets/images/Frame 38813437.png"/>
</div>
</div>
</div>
</div>

<div className="frame-38813533-wco">
<div className="auto-group-rarz-en7">
  <div className="rectangle-10-AkT">
  </div>
  <p className="what-we-serve-V23">What We Serve</p>
  <div className="rectangle-9-9MV">
  </div>
</div>
<div className="frame-38813532-qEK">
  <div className="frame-38813529-BJB">
    <img className="order-food-pana-1-K9V" src="../src/assets/images/Order food-pana 1.png"/>
    <div className="frame-38813526-1o1">
      <p className="easy-to-order-mnB">Easy To Order</p>
      <p className="you-only-need-a-few-steps-in-ordering-food-7b9">You only need a few steps in ordering food</p>
    </div>
  </div>
  <div className="frame-38813530-BL7">
    <img className="take-away-rafiki-1-hpF" src="../src/assets/images/Take Away-rafiki 1.png"/>
    <div className="frame-38813527-1K9">
      <p className="fastest-delivery-NQb">Fastest Delivery</p>
      <p className="delivery-that-is-always-ontime-even-faster-Wmh">Delivery that is always ontime even faster</p>
    </div>
  </div>
  <div className="frame-38813531-dbR">
    <img className="waiters-rafiki-1-xdh" src="../src/assets/images/Waiters-rafiki 1.png"/>
    <div className="frame-38813528-Hfy">
      <p className="best-quality-2dZ">Best Quality</p>
      <p className="not-only-fast-for-us-quality-is-also-number-one-mb9">Not only fast for us quality is also number one</p>
    </div>
  </div>
</div>
</div>


{/* <!-- OUR MENU --> */}

<div className="component-1-5rj">
<div className="frame-38813520-qL7">
  <p className="our-menu-wP9">Our Menu</p>
  <div className="frame-38813519-t3V">
    <img className="frame-11-qjR" src="../src/assets/images/fe_arrow-left.png"/>
    <img className="frame-12-m7H" src="../src/assets/images/fe_arrow-right.png"/>
  </div>
</div>
<div className="frame-38813512-W4s">
  <div className="frame-38813511-FHM">
    <div className="auto-group-tqmq-oJs">
      <div className="frame-13-kV1">
        <img className="frame-30-Ef5" src="../src/assets/images/Rice Bowl.png"/>
        <p className="rice-dishes-yMm">Rice Dishes</p>
      </div>
      <div className="frame-38813507-Vb1">
        <img className="soup-13Z" src="../src/assets/images/soup.png"/>
        <p className="soups-and-stews-Kpw">Soups and Stews</p>
      </div>
    </div>
    <div className="frame-38813508-e6X">
      <img className="meat-ZDV" src="../src/assets/images/Meat.png"/>
      <p className="grilled-and-roasted-foods-VN3">Grilled and Roasted Foods</p>
    </div>
    <div className="auto-group-8jtd-RmV">
      <div className="frame-38813509-jXH">
        <img className="frame-38813501-HYo" src="../src/assets/images/Frame 38813501.png"/>
        <p className="raw-foods-1Du">Raw Foods</p>
      </div>
    </div>
  </div>



  {/* <!-- LOWER LEFT --> */}
<div className="frame-38813512-R2j">
  <div className="frame-14-K87">
    <div className="group-39-qcF">
      <div className="native-jollof-rice-Ns5">Native Jollof Rice</div>
      <div className="kg-UQK">
        <span className="kg-UQK-sub-0">₦ 0 </span>
        <span className="kg-UQK-sub-1">/ 0kg</span>
      </div>
    </div>
    <div className="group-38-Eno">
      <div className="order-now-ZKH"><a href="#"></a></div>
      <img className="fe-arrow-right-zvP" src="../src/assets/images/fe_arrow-right.png"/>
    </div>
  </div>
  <div className="frame-15-D2T">
    <div className="group-39-KbH">
      <div className="goat-meat-jollof-rice-4Hy">Goat Meat Jollof Rice</div>
      <div className="kg-NpT">
        <span className="kg-NpT-sub-0">₦ 0 </span>
        <span className="kg-NpT-sub-1">/ 0kg</span>
      </div>
    </div>
    <div className="group-38-Bmu">
      <div className="order-now-K7R"><a href="#"></a></div>
      <img className="fe-arrow-right-ccK" src="../src/assets/images/fe_arrow-right.png"/>
    </div>
  </div>
</div>
</div>
</div>
</div>


{/* <!-- FOOTER --> */}
<div className="item-4-Ggs">
<p className="eatgoodnaija-powered-by-eatgoodnaija-C4j">© 2023 EatGoodNaija| Powered by EatGoodNaija</p>
<div className="frame-2-6fu">
</div>
<div className="group-2017-dQw">
  <img className="group-85-n2w" src="../src/assets/images/facebook logo.png"/>
  <img className="group-86-zeo" src="../src/assets/images/Twitter logo.png"/>
  <img className="group-87-YRR" src="../src/assets/images/linkedin logo.png"/>
  <img className="group-88-Hdu" src="../src/assets/images/instagram logo.png"/>
</div>
</div>
</div>

    
  )
};

export default LandingPage