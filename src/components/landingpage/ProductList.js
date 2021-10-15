import React from 'react'
import {data} from './productData'
import SingleProduct from './SingleProduct'
import {Cards} from './HomeElements'

const ProductList = () => {


    return (
        <Cards>
          {data.map((product, id) => {
              return (
                  <SingleProduct
                    key={id}
                    {...product}
                  />
              )
          })}
        </Cards>
    )
}

export default ProductList
