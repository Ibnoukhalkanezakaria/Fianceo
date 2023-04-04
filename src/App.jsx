import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Integeation from "./Pages/Integeation/Integeation";
import Pricing from "./Pages/Pricing/Pricing";
import Blog from "./Pages/Blog/Blog";
import Navbar from "./Components/Navbar/Nav";
import Footer from "./Components/Footer/Footer";
import SingleBlog from "./Components/Sections/SingleBlog";
import Error from "./Pages/Error/Error";
import SignIn from "./Pages/Login/SignIn";
import SignUp from "./Pages/Login/SignUp";

// animation on scroll using library AOS
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  Aos.init({
    offset: 0,
  });

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/integeation" element={<Integeation />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/blog/:singleBlog" element={<SingleBlog />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
