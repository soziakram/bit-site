import React from "react";
import { useState } from "react";
import Form from "./Form";

const Title = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <section className=" pt-40 pl-7 pr-7 flex flex-row  justify-start h-1/4 pb-36 pt-40 ">
      <div>
        <h1 className="text-white z-20 text-9xl animate-pulse">
          Hi,
          <br />
          I am Sozi,
          <br />
          web developer
        </h1>
        <h3 className="text-gray-500 text-2xl pb-4">FULL STUCK DEVELOPER</h3>
        <button
          type="button"
          onClick={() => setShowForm(true)}
          className="text-white  bg-gradient-to-tl from-purple-500
           via-fuchsia-500 to-indigo-600 hover:bg-blue-800 focus:ring-4 
           focus:outline-none focus:ring-blue-300 font-medium rounded-lg
            text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600
             dark:hover:bg-blue-700 dark:focus:ring-blue-800
             w-40 h-10"
        >
          Hire Me
        </button>
      </div>

      {showForm && <Form />}
    </section>
  );
};

export default Title;
