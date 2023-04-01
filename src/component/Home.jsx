import React from 'react'
import Title from "./Title";
import Projects from "./Projects";
import Skils from "./Skils";

import About from "./About";
const Home = () => {
      return (
        <div className="bg-black h-full">
          <Title />
          <About />
          <Projects />
          <Skils />
        </div>
      );
}

export default Home