import React from 'react'
import { Outlet } from 'react-router-dom';


export const Products = () => {
  
  return (
    <div>
      <h4>Products</h4>
      <Outlet/>      
    </div>
  );
};
