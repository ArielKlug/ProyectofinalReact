import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "../Cart";
import Grid from "../Grid";
import ItemDetail from "../ItemDetail";

const Navbar = ({ products 
  }) => {
  
    
  return (
    <div>
      
      <ul>
        <li>
          <Routes>
            <Route path="*" element={<h4>Error 404 not found</h4>} />
            <Route path="/" element={<Grid products={products} />} />
            <Route
              path="/items"
              element={
                <Grid />
              }
            />
            <Route path="/items/:id" element={<ItemDetail />} />
            <Route path="/:id" element={<ItemDetail />} />
          </Routes>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
