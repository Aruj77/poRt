import React from "react";
import "./navbar.css"

function Navbar() {
  return (
    <navbar className="flex justify-between">
      <div className="left">
        po<span className="highlight text-xl">R</span>t
      </div>
      <div className="right">products</div>
    </navbar>
  );
}

export default Navbar;
