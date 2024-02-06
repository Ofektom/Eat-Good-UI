import React from 'react';
import './orderSuccess.css'; // Assuming the CSS file is in the same directory

function OrderSuccess() {
  return (
    <div className="order-successful-modal-Nbu">
      <img className="auto-group-6u63-6H1" src="src/assets/Postman holding package.png" alt="Postman holding package" />
      <p className="order-delivered-successful-pTu">Order Delivered Successful!</p>
      <div className="frame-38813464-7hu">
        <div className="frame-38813455-psD">
          <p className="order-id-nJF">Order ID</p>
          <p className="item-908934-ts5" id="#"></p>
        </div>
        <div className="frame-38813457-dJs">
          <p className="payment-method-BbH">Payment Method</p>
          <p className="debit-card-hJj" id="#"></p>
        </div>
      </div>
      <div className="line-2-EZZ"></div>
      <div className="frame-38813461-MPH">
        <div className="frame-38813455-5q5">
          <p className="total-items-Ehy">Total Items</p>
          <p className="items-aWw">0 Items</p>
        </div>
        <div className="frame-38813457-j8w">
          <p className="ofada-stew-4h1"></p>
          <p className="item-20000-nsu"></p>
        </div>
        <div className="frame-38813458-JLT">
          <p className="peppered-jollof-rice-rcs"></p>
          <p className="item-70000-xfu"></p>
        </div>
        <div className="frame-38813459-s2B">
          <p className="grilled-suya-1PH"></p>
          <p className="item-50000-wXq"></p>
        </div>
      </div>
      <div className="line-1-UXm"></div>
      <div className="frame-38813462-bMV">
        <div className="frame-38813455-f6T">
          <p className="total-items-cXV"></p>
          <p className="item-120000-Yg3"></p>
        </div>
        <div className="frame-38813457-gXM">
          <p className="tax-12-dxP">Tax (12%)</p>
          <p className="item-12000-AhR"></p>
        </div>
      </div>
      <div className="line-3-rKM"></div>
      <div className="frame-38813458-zRZ">
        <p className="total-MG7">Total</p>
        <p className="item-132000-Vt7"></p>
      </div>
      <div className="buttons-qBH">
        <button className="button-BF9">Order again</button>
        <button className="button-fAK">Rate this Delivery</button>
      </div>
    </div>
  );
}

export default OrderSuccess;