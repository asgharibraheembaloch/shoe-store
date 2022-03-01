import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div>
        <Link to="home">Home</Link>
        {' '}
        <Link to="products">Products</Link>
    </div>
  )
}
