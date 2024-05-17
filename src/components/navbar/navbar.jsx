import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <nav className="flex justify-between items-center p-5 text-white">
      <div className="text-2xl font-bold">
        po<span className="text-primary">R</span>t
      </div>
      <div className="flex space-x-6">
        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <a href="#" className="hover:text-primary">
            Companies
          </a>
          {isHovered && (
            <div className="absolute left-0 w-40 bg-white rounded shadow-lg">
              <ul className="flex flex-col p-2">
                <li className="hover:bg-gray-200 hover:text-primary p-2 rounded">
                  Dell
                </li>
                <li className="hover:bg-gray-200 hover:text-primary p-2 rounded">
                  HP
                </li>
                <li className="hover:bg-gray-200 hover:text-primary p-2 rounded">
                  Asus
                </li>
              </ul>
            </div>
          )}
        </div>
        <a href="#" className="hover:text-primary">
          New Arrivals
        </a>
        <a href="#" className="hover:text-primary">
          Contact Us
        </a>
      </div>
      <div className="flex space-x-4">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="hover:text-primary"
        />
        <FontAwesomeIcon icon={faCartShopping} className="hover:text-primary" />
      </div>
    </nav>
  );
}

export default Navbar;
