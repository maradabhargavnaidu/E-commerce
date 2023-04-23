import React from "react";
import {Link} from 'react-router-dom'
import { useSelector } from "react-redux";
const Navbar = () => {
  const items = useSelector((state)=>state.cart)
  return (
    <div className="bg-orange-500 py-4">
      <div style={{display:'flex', alignItems:'space-between'}}>
      <span className='logo'>REDUX</span>
        <div>
          <Link className='navLink' to='/'>Home</Link>
          <Link className='navLink' to='/cart'>Cart</Link>
          <span className='cartCount'>Cart items: {items.length}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
