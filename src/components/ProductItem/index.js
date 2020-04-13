import React from 'react'; 

const ProductItem = ({products}) => {
return(
  <>
  
      {products.map((prod,i) => {
        return (
        
          <div key={i} className="card col-md-4">
            <div className="card-title">
              <p>{prod.title}</p>
            </div>
            <div className="card-body">
              <p>Price : {prod.price}</p>
            </div>
            <button className="btn btn-primary"> Add To Basket</button>
          </div>
        
        )
      })}
 
  </>

  )


}

export default ProductItem; 