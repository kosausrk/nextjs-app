import React from 'react'
import AddToCart from './AddToCart'
import styles from "./ProductCard.module.css"


const ProductCard = () => {
  return (
    <div className= "p-3 my-5 bg-stone-600 text-white text-xl hover:bg-stone-400">
        <AddToCart></AddToCart>
    </div>
  )
}

export default ProductCard