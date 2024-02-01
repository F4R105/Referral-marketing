import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegStar } from "react-icons/fa";

const Product = () => {
  return (
    <Link to="/auth/login" className='product'>
        <div className="product-image">
          x
        </div>
        <div className="product-name">
          product name
        </div>
        <div className="product-price">
          Tsh 34000/=
        </div>
        <div className="product-rating">
          <FaRegStar />
          <span>4.5</span>
        </div>
    </Link>
  )
}

export default Product