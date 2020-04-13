import React, {useState, useEffect} from 'react'; 
import ProductItem from '../ProductItem'; 
const Product = () => {

  // State here... 
  const [filterProduct, setFilterProduct] = useState([]); 


// Update State Here....
  useEffect(() => {
    fetch('http://localhost:4000/products')
      .then(response => response.json())
      .then(data => setFilterProduct(data));
    }, []);



  return (
      <>
        <ProductItem products={filterProduct}/>
      </>

  )


}

export default Product; 