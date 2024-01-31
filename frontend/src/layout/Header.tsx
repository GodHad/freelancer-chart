import React from "react";

function Header() {
  return (
    <header className="flex items-center justify-between py-2">
      <a href="#" className="px-2 lg:px-0 font-bold capitalize">
        Tech Blog
      </a>
      <button className="block md:hidden px-2 text-3xl">
        <i className="bx bx-menu"></i>
      </button>
      <ul className="hidden md:inline-flex items-center">
        <li className="px-2 md:px-4">
          <a
            href="#"
            className="text-green-800 font-semibold hover:text-green-600">
            Create Bid
          </a>
        </li>
        <li className="px-2 md:px-4">
          <a
            href="#"
            className="text-gray-500 font-semibold hover:text-green-600">
            Update Bid
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
