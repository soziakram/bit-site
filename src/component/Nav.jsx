import { useState } from "react";
import React from "react";
import StickyMenu from "./StickyMenu";
import {Link} from "react-router-dom"


const Nav = () => {

  const [showMenu,setShowMenu]=useState(false)

  return (
    <>
      <nav class="bg-black px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0  dark:border-gray-600 ">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
          <a href="/" class="flex items-center">
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
          </a>
          <div class="flex md:order-2">
            <button
              data-collapse-toggle="navbar-sticky"
              onClick={() => setShowMenu(true)}
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none  focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-black dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li className="active:border-b active:border-fuchsia-300 pb-2 ">
                <Link
                  to="/"
                  className="py-2 pl-3 pr-4 text-fuchsia-300 bg-black- rounded md:bg-transparent md:hover:text-fuchsia-900 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  home
                </Link>
              </li>
              <li className="active:border-b active:border-fuchsia-300 focus:border-b focus:border-fuchsia-300 pb-2 ">
                <Link
                  to="/about"
                  className="py-2 pl-3 pr-4 text-fuchsia-500 bg-black- rounded md:bg-transparent md:hover:text-fuchsia-900 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  about
                </Link>
              </li>
              <li className="active:border-b active:border-fuchsia-300 pb-2 ">
                <Link
                  to="/skills"
                  className="block py-2 pl-3 pr-4 text-fuchsia-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-fuchsia-900 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  skills
                </Link>
              </li>
              <li className="active:border-b active:border-fuchsia-300 pb-2 ">
                <Link
                  to="/projects"
                  className="block py-2 pl-3 pr-4 text-fuchsia-500 rounded hover:bg-white  md:hover:bg-transparent md:hover:text-fuchsia-900  md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  projects
                </Link>
              </li>
              <li className="active:border-b active:border-fuchsia-300 pb-2 ">
                <Link
                  to="/form"
                  className="block py-2 pl-3 pr-4 text-fuchsia-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-fuchsia-900  md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {showMenu && <StickyMenu />}
    </>
  );
};

export default Nav;
