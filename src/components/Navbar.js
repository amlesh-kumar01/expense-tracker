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
              {/* <a href="./HeroSection.js">Home</a> */}
              <Link to="/home">Home</Link>
            </li>
            <li>
              {/* <a href="./AddExpenseFrom.js">Add Expense</a> */}
              <Link to="/add-expense">Add Expense</Link>
            </li>
            <li>
              {/* <a href="/AddExpenseList.js">Expense List</a> */}
              <Link to="/expense-list">Expense List</Link>
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
          <p>BudgetBuddy</p>
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
            {/* <a href="/HeroSection.js">Home</a> */}
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/add-expense">Add Expense</Link>
            {/* <a href="/AddExpenseForm.js">Add Expense</a> */}
          </li>
          <li>
            <Link to="/expense-list">Expense List</Link>
            {/* <a href="/AddExpenseList.js">Expense List</a> */}
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
