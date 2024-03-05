
import { Navigate, Route, Routes } from "react-router-dom";
import Homepage from "../items/Homepage";
import About from "../items/About";
import Portfolio from "../items/Portfolio";
import Blog from "../items/Blog";
import Contact from "../items/Contact";


function MyRoutes() {

  console.debug("MyRoutes");

  return (
    <div className="Routes">
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/portfolio' element={<Portfolio />} />
        <Route exact path='/blog' element={<Blog />} />
        <Route exact path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )

}

export default MyRoutes;