import React, {useState, useEffect} from 'react'; 
import ProductItem from '../ProductItem'; 
const Product = () => {

  // State here... 
  const [filterProduct, setFilterProduct] = useState([]); 
  const [img, setImg] = useState([]);

  const apiKey =  '14014759-eeee2880afbdb8bf4148d4071';


  useEffect(() => {
    fetch('http://localhost:4000/products')
      .then(response => response.json())
      .then(data => setFilterProduct(data));
    }, []);



  useEffect( () => {
    fetch( `https://pixabay.com/api/?key=${apiKey}&q=leather+clothes`)
    .then(resp => resp.json())
    .then(data => {
      
    
      setImg(data.hits.map(x => {
        return x.previewURL;
        }));
    })

  }, [img]);

  return (

      <>
    
        <div className="row" >
          <ProductItem products={filterProduct} images={img}/>
        </div>
      </>

  )


}

export default Product; 