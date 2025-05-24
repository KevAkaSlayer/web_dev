import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl mx-auto bg-black text-white">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          Bistro Boss
        </Link>
      </div>
      <div className="flex space-x-4 mx-2">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/contact" className="hover:underline">
          Contact Us
        </Link>
        <Link to="/dashboard" className="hover:underline">
          Dashboard
        </Link>
        <Link to="/menu" className="hover:underline">
          Our Menu
        </Link>
        <Link to="/order/offered" className="hover:underline">
          Our Shop
        </Link>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <button tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                alt="User avatar"
              />
            </div>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
