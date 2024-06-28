import React, { useState } from "react";
import { Link } from "react-router-dom";
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
              {/* <a href="#hero-section">Home</a> */}
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="#expense-form">Add Expense</a>
              {/* <Link to="/add-expense">Add Expense</Link> */}
            </li>
            <li>
              <a href="#expense-list">Expense List</a>
              {/* <Link to="/expense-list">Expense List</Link> */}
            </li>
            <li>
              <Link to="/track">Track</Link>
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
          <Link to="/" className="title-link"><p>BudgetBuddy</p></Link>

        </div>
        <img
          src={`images/toggle-menu-icon${show ? "-cross" : ""}.png`}
          alt="toggle-menu-icon"
          width="40px"
          className="toggle-icon"
          onClick={showHamburger}
        />
        <ul className={"navlinks"}>
          <li>
            {/* <a href="#hero-section">Home</a> */}
            <Link to="/">Home</Link>
          </li>
          <li>
            {/* <a href="#expense-form">Add Expense</a> */}
            <Link to="/add-expense">Add Expense</Link>
          </li>
          <li>
            {/* <a href="#expense-list">Expense List</a> */}
            <Link to="/expense-list">Expense List</Link>
          </li>
          <li>
            <Link to="/track">Track</Link>
          </li>
        </ul>
      </div>
      {hamburgerMenu()}
    </nav>
  );
}
