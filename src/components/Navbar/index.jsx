import React from "react";
import Item from "./Item";
import "./index.css";
import logo from '../../assets/logopf.png'
const Navbar = ({ OnGetMenu }) => {
  return (
    <div className="navhideshow">
      <nav className="py-2 d-flex w-100">
        <img src={logo} className="logo ms-5 " />
        <ul className="w-75 justify-content-end mx-auto d-flex">
          <Item liname="Home" onClick={OnGetMenu} />
          <Item liname="About" onClick={OnGetMenu} />
          <Item liname="Education" onClick={OnGetMenu} />
          <Item liname="Skills" onClick={OnGetMenu} />
          <Item liname="Project" onClick={OnGetMenu} />
          <Item liname="My Blog" onClick={OnGetMenu} />
          <Item liname="Contact" onClick={OnGetMenu} />
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
