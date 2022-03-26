import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { IProduct } from '../types/products'

type ProductListProps = {
  products: IProduct[],
  onRemove: (id: number) => void
}

const ProductManager = (props: ProductListProps) => {
  return (
    <div>
      <h1>ListProduct</h1>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>name</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>
          {props.products.map((item, i) => {
            return <tr key={i}>
              <td>{i + 1}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td><Link to={`/products/${item.id}`}>Edit</Link></td>
              <td><button onClick={() => onRemove(item.id)}>Remove</button></td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ProductManager