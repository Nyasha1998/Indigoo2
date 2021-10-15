import React from 'react'
import { SingleCard } from './HomeElements'



const SingleProduct = ({ product, name, name2, name3, id }) => {
    return (
        <SingleCard>
          <h1>{product}</h1>
          <p>{name}</p>
          <p>{name2}</p>
          <p>{name3}</p>    
        </SingleCard>
    )
}

export default SingleProduct
