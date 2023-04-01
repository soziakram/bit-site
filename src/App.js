import Nav from "./component/Nav";
import Title from "./component/Title";
 import Projects from "./component/Projects"; 
import Skils from "./component/Skils";
import Footer from "./component/Footer";
import About from "./component/About";
import Home from "./component/Home";
import Form from "./component/Form";
 

import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <section className="bg-black h-full">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/title" element={<Title />}></Route>
        <Route path="/skills" element={<Skils/>}></Route>
        <Route path="/projects" element={<Projects />}></Route>

        <Route path="/form" element={<Form />}></Route>
      </Routes>
      <Footer />3
    </section>
  );
}

export default App;
