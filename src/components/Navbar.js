import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./Navbar.css";

export default function Navbar() {
  // to store the display state of Hamburger-menu  
  const [show, setShow] = useState(false);

  // to control the state of Hamburger Menu
  const showHamburger = () => {
    setShow((prevShow) => !prevShow);
  };

  // function to display the Hamburger menu on toggle-click
  const hamburgerMenu = () => {
    if (show) {
      return (
        <div className="hamburger-menu">
          <ul className="hamburger-links">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Add Expense</a>
            </li>
            <li>
              <a href="">Expense List</a>
            </li>
          </ul>
        </div>
      );
    }
  };

  return (
    <nav>
      <div className="navbar">
        <div className="nav-title">
          <img src="images/nav-logo.png" alt="nav-logo" className="nav-logo" />
          <p>BudgetBuddy</p>
        </div>
        <img
          src={`images/toggle-menu-icon${show ? '-cross' : ''}.png`}
          alt="toggle-menu-icon"
          width="40px"
          className="toggle-icon"
          onClick={showHamburger}
        />
        <ul className={ "navlinks"}>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Add Expense</a>
          </li>
          <li>
            <a href="">Expense List</a>
          </li>
        </ul>
      </div>
      {hamburgerMenu()}
    </nav>
  );
}
