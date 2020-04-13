import React from 'react';
import './App.css'; 
import Product from '../Product'; 

function App() {
  return (
    <div>
      <div className="header">
          <p className="header-p"> Ecommerce App</p>
      </div>
      <Product /> 
    </div>
  );
}

export default App;
