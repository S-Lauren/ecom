import React from 'react'; 


const Filter = ({size, order}) => {

  return (
  <>  
    <div className="row">
      <div className="col-md-4">
        <p>Number of product : {size}</p>
        <div className="col-md-4">
          <label>Order By</label>
          <select className="form-control" onChange={order}>
            <option value="lowest"> Lowest to Highest</option>
            <option value="hightest">Highest to Lowest</option>
          </select>
        </div>
      </div>
    </div>
  </>
  )


}

export default Filter; 