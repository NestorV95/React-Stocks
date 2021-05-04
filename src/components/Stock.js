import React from 'react'

const Stock = (props) => {

  const trade=()=>{
    props.trade(props.stock)
  }

  return(
    <div>

      <div className="card" onClick={()=>trade()}>

        <div className="card-body">

          <h5 className="card-title">{props.stock.name}</h5>
          <p className="card-text">{props.stock.price}</p>
          
        </div>

      </div>

    </div>
  )
}

  
    


export default Stock
