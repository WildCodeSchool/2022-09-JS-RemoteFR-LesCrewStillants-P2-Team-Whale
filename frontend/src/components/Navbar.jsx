import React from "react";
import { stack as Menu } from "react-burger-menu";

import "./Navbar.css";

function Navbar() {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/quiz">
        Quiz
      </a>
      <a className="menu-item" href="/services">
        Wiki
      </a>
      <a className="menu-item" href="/contact">
        Contact us
      </a>
    </Menu>
  );
}

export default Navbar;
