import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-dark text-light">
      <div className="container">
        <Link href="/">
        <a className="navbar-brand text-light" >
          Cat shelter
        </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link text-white">Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/cats">
              <a className="nav-link text-white active" aria-current="page">
                Cats
              </a>
              </Link>
            </li>

            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Pricing
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
