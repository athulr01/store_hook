import React, { useState } from 'react';
import './Filter.css'; 

function Filter({ onFilterChange }) {
  const [color, setColor] = useState('');
  const [amount, setAmount] = useState('');
  const [rating, setRating] = useState('');

  const handleFilterChange = () => {
 
    const filterCriteria = {
      color,
      amount: parseInt(amount),
      rating: parseInt(rating),
    };

    
    onFilterChange(filterCriteria);
  };

  return (
    <div className="filter-container">
      <h2>Filter Products</h2>
      <div className="filter-group">
        <label htmlFor="color">Color:</label>
        <select id="color" value={color} onChange={(e) => setColor(e.target.value)}>
          <option value="">All</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
        </select>
      </div>
      <div className="filter-group">
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div className="filter-group">
        <label htmlFor="rating">Rating:</label>
        <input
          type="number"
          id="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
      </div>
      <button onClick={handleFilterChange}>Apply Filters</button>
    </div>
  );
}

export default Filter;
