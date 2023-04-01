import React from 'react'


const Projects = () => {
  return (
    <div className="flex flex-col items-center pb-40	pt-40">
      <h1 className=" text-fuchsia-500 z-20 text-7xl ">My works</h1>
      <section className=" flex flex-row  justify-center m-4 ">
        <div className="card card-compact w-56 bg-base-100 shadow-xl  m-10">
          <figure>
            <img
              src="https://cdn.dribbble.com/userupload/4256181/file/original-80bc076317a614c2586f6255e4835cad.jpg?compress=1&resize=2048x1536"
              alt="Shoes"
            />
          </figure>
          <div className="card-body ">
            <h2 className="card-title justify-cente">army store</h2>
            <div className="card-actions justify-center">
              <button
                className="text-white  bg-gradient-to-tl from-purple-500
           via-fuchsia-500 to-indigo-600 hover:bg-blue-800 focus:ring-4 
           focus:outline-none focus:ring-blue-300 font-medium rounded-lg
            text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600
             dark:hover:bg-blue-700 dark:focus:ring-blue-800
             w-40 h-10"
              >
                visit
              </button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-56 bg-base-100 shadow-xl  m-10">
          <figure>
            <img
              src="https://cdn.dribbble.com/userupload/4445323/file/original-9816669df5eeaeb702238ea158d31158.png?compress=1&resize=2048x1536"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title justify-cente">dicoration</h2>
            <div className="card-actions justify-center">
              {" "}
              <button
                className="text-white  bg-gradient-to-tl from-purple-500
           via-fuchsia-500 to-indigo-600 hover:bg-blue-800 focus:ring-4 
           focus:outline-none focus:ring-blue-300 font-medium rounded-lg
            text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600
             dark:hover:bg-blue-700 dark:focus:ring-blue-800
             w-40 h-10"
              >
                visit
              </button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-56 bg-base-100 shadow-xl  m-10">
          <figure className="object-cover">
            <img
              src="https://cdn.dribbble.com/userupload/3510796/file/original-5a637ba8e19029ee34c69eff0e3f707e.png?compress=1&resize=2048x1536"
              alt="Shoes"
            />
          </figure>
          <div className="card-body flex">
            <h2 className="card-title justify-cente">yoga</h2>
            <div className="card-actions justify-center">
              <button
                className="text-white  bg-gradient-to-tl from-purple-500
           via-fuchsia-500 to-indigo-600 hover:bg-blue-800 focus:ring-4 
           focus:outline-none focus:ring-blue-300 font-medium rounded-lg
            text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600
             dark:hover:bg-blue-700 dark:focus:ring-blue-800
             w-40 h-10"
              >
                visit
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects