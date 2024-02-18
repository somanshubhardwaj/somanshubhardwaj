import React from "react";
import Link from "next/link";
import "./styles/navbar.css";
const Nav = () => {
  return (
    <div className="drawer flex justify-end items-end z-10 navtoggle">
      <input id="my-drawer" type="checkbox" className="drawer-toggle " />
      <div className="drawer-content z-20 mx-2 my-2 ">
        <label htmlFor="my-drawer" className="btn btn-primary drawer-button ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-black text-white ">
          <h1 className="text-4xl mx-4 font-bold">NITH</h1>
          <li className="sidebaroptions mt-8">
            <Link href="/">Home</Link>
          </li>
          <li className="sidebaroptions">
            <Link href="/projects">Portfolio</Link>
          </li>
          <li className="sidebaroptions">
            <Link href="/skills">Skills</Link>
          </li>
          <li className="sidebaroptions">
            <Link href="/aboutme">About Me</Link>
          </li>
         
        </ul>
      </div>
    </div>
  );
};

export default Nav;