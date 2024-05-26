import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between py-4 px-6 items-center">
        <span className="font-bold text-xl">Somanshu Bhardwaj</span>
        <div className="">
          <a href="#" className="mx-4">
            About
          </a>
          <a href="#" className="mx-4">
            Skills
          </a>
          <a href="#" className="mx-4">
            Projects
          </a>
          <a href="#" className="mx-4">
            Contact
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
