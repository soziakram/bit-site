import React from "react";

const StickyMenu = () => {
  return (
    <nav
      className=" w- h-auto bg-white rounded-1xl flex flex-col content-start pt-16
        "
    >
      <div className="inline-flex items-center p-2 text-sm border text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <a className="hover:text-black" href="/">
          home
        </a>
      </div>
      <div className="inline-flex items-center p-2 text-sm border text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <a className="hover:text-black" href="/">
          service
        </a>
      </div>
      <div className="inline-flex items-center p-2 text-sm border text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <a className="hover:text-black" href="/">
          contact
        </a>
      </div>
      <div className="inline-flex items-center p-2 text-sm border text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <a className="hover:text-black" href="/">
          blog
        </a>
      </div>
    </nav>
  );
};

export default StickyMenu;
