import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="flex px-20 py-5 bg-mint justify-around sm:justify-between ">
      <div className=" hidden  sm:flex">
        <div className="flex flex-wrap">
          <img
            src={`${process.env.PUBLIC_URL}/assets/logo.png`}
            alt="logo"
            className="w-6 h-6"
          />
          <span className="text-md italic text-darkOrange hidden md:inline">
            Stella Portfolio
          </span>
        </div>
      </div>
      <div className="flex flex-col sm:inline ">
        <ul className="flex space-x-10">
          <li>
            <Link
              to="/"
              className="text-darkBlue hover:border-b border-darkBlue p-1"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-darkBlue hover:border-b border-darkBlue p-1"
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="text-darkBlue hover:border-b border-darkBlue p-1"
            >
              PROJECTS
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-darkBlue hover:border-b border-darkBlue p-1"
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
