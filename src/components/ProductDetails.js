import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {

  const shoes = {
    "Bata": {
      name: "Power",
      image: "http://localhost:3000/images/power.jpg",
    },
    "Calza": {
      name: "Runner",
      image: "http://localhost:3000/images/runner.jpg",
    },
    "Servis": {
      name: "Cheetah",
      image: "http://localhost:3000/images/cheetah.jpg",
    },
  };

    const {productID} = useParams();
    const shoe = shoes[productID];
    const {name, image} = shoe
    
  return (
    <div>
        <h4>{name}</h4>
        <img src={image} width="400" height="500" alt={name}></img>
    </div>
  )
}

export default ProductDetails