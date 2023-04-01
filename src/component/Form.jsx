import React from "react";

const Form = () => {
  return (
    <section
      id="contact"
      className="relative w-full flex justify-center  bg-black text-fuchsia-700 p-10 pt-40 pb-72 h-full"
    >
      <form action="#" className="w-full md:w-1/2 border p-6 bg-black">
        <h2 class="text-2xl pb-3 font-semibold">Send Message</h2>
        <div>
          <div className="flex flex-col mb-3">
            <label for="name">Name</label>
            <input
              type="text"
              id="name"
              className="px-3 py-2 bg-gray-900 border text-white focus:border-fuchsia-300  focus:outline-none  focus:text-fuchsia-500"
              autocomplete="off"
            />
          </div>
          <div class="flex flex-col mb-3">
            <label for="email">Email</label>
            <input
              type="text"
              id="email"
              className="px-3 py-2 bg-gray-900 border text-white focus:border-fuchsia-300  focus:outline-none  focus:text-fuchsia-500"
              autocomplete="off"
            />
          </div>
          <div class="flex flex-col mb-3">
            <label for="message">Message</label>
            <textarea
              rows="4"
              id="message"
              className="px-3 py-2 bg-gray-900 border text-white focus:border-fuchsia-300  focus:outline-none  focus:text-fuchsia-500"
            ></textarea>
          </div>
        </div>
        <div class="w-full pt-3">
          <button
            className="text-white w-full bg-gradient-to-tl from-purple-500
           via-fuchsia-500 to-indigo-600 hover:bg-blue-800 focus:ring-4 
           focus:outline-none focus:ring-blue-300 font-medium rounded-lg
            text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600
             dark:hover:bg-blue-700 dark:focus:ring-blue-800
             w-40 h-10"
          >
            send
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
