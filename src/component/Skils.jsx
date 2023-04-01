import React from 'react'

const Skils = () => {
      return (
        <section className="flex flex-col items-center pr-6 pt-56  pb-80 ">
          <h1 className=" text-fuchsia-500 z-20 text-5xl  pb-5">Skills</h1>

          <div className="carousel  rounded-box w-56 border border-fuchsia-300 ">
            <div className="carousel-item w-1/2">
              <img
                src="https://www.svgrepo.com/show/303251/mysql-logo.svg"
                className=""
                alt="Drink"
              />
            </div>
            <div className="carousel-item w-1/2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png?20220125121207"
                alt="Drink"
              />
            </div>
            <div className="carousel-item w-1/2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png?20141107110902"
                alt="Drink"
              />
            </div>

            <div className="carousel-item">
              <img
                src="/images/stock/photo-1550258987-190a2d41a8ba.jpg"
                alt="Drink"
              />
            </div>
            <div className="carousel-item w-1/2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png?20211001194333"
                alt="Drink"
              />
            </div>
            <div className="carousel-item w-1/2">
              <img
                src="https://www.svgrepo.com/show/303205/html-5-logo.svg"
                alt="Drink"
              />
            </div>
            <div className="carousel-item w-1/2">
              <img
                src="https://www.svgrepo.com/show/354152/oracle.svg"
                alt="Drink"
              />
            </div>
          </div>
        </section>
      );
}

export default Skils