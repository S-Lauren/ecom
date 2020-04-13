import React from 'react'; 

const ProductItem = (props) => {
return(
  <>
  
      {props.products.map((x,i) => {
        return <div key={i}>{x.title}</div>
      })}
 
  </>

  )


}

export default ProductItem; 