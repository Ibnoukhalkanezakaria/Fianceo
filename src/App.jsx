import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Integeation from "./Pages/Integeation/Integeation";
import Pricing from "./Pages/Pricing/Pricing";
import Blog from "./Pages/Blog/Blog";
import Navbar from "./Components/Navbar/Nav";
import Footer from "./Components/Footer/Footer";
import SingleBlog from "./Components/Sections/SingleBlog";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/integeation" element={<Integeation />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/:singleBlog" element={<SingleBlog />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
