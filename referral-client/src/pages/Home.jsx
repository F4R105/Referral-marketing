import React from 'react'
import Product from '../components/Product'

const Home = () => {
  return (
    <>
      <section id="hero">
        <div className="container">
          <h1>Welcome to referral program</h1>
          <a href="#products">Start shopping</a>
        </div>
      </section>
      <section id="products">
        <div className="container">
            {new Array(15).fill().map(product => (
              <Product />
            ))}
        </div>
      </section>
    </>
  )
}

export default Home