import React from 'react'
import { Link } from 'react-router-dom'

export const ProductIndex = () => {
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
  return (
    <div>
        <ul>
        {Object.entries(shoes).map(([productID, { name, image }]) => (
          <li key={productID}>
            <Link to={productID}>
              <h2>{name}</h2>
              <img src={image} width="500" height="600" alt={name}></img>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
