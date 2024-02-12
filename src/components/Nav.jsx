import React from "react";
import './styles/navbar.css'
const Nav = () => {
  return (
  <>
  <nav className="flex bg-black text-white justify-between py-6 ">
    <div className="name">
      <h1>My Portfolio</h1>
    </div>
    <div className="flex flex-wrap justify-center items-center">
      <div className="navbtn" >About me</div>
      <div className="navbtn">My projects</div>
      <div className="navbtn">Social Links</div>
      <div className="navbtn">Github</div>
    </div>
  </nav>
  </>
  );
};

export default Nav;
