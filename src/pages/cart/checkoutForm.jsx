import React, { useState } from 'react';
import './checkoutForm.css'; // 

function CheckoutForm() {
  
  return (
    <div className="checkout-form">
      <h2>Checkout</h2>
      <form>
        <div className="form-group">
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
           
           
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="streetAddress">Street Address:</label>
          <input
            type="text"
            id="streetAddress"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
                 
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="zipCode">ZIP Code:</label>
          <input
            type="text"
            id="zipCode"
            required
          />
        </div>
        <button className='button1' type="submit">Complete Purchase</button>
      </form>
    </div>
  );
}

export default CheckoutForm;
