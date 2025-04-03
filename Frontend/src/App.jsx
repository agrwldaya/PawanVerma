import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
// import AvailableOn from "./components/Home/AvailableOn";
// import Blogs from "./components/Home/Blogs";
// import Books from "./components/Home/Books";
// import Gallery from "./components/Home/Gallery";
// import Hero from "./components/Home/Hero";
// import Testimonials from "./components/Home/Testimonials";
// import Videos from "./components/Home/Videos";
import Home from "./Home";
import BookAgeOf from "./components/Pages/BookAgeOf";
import BookTheLeader from "./components/Pages/BookTheLeader";
import BookUnB from "./components/Pages/BookUnB";
import BookNoClo from "./components/Pages/BookNoClo";
import ScrollToTop from "./components/ScrollToTop";
import AboutPage from "./components/AboutUs";
import SpeakingPage from "./components/Speaking";
 

 
  function App() {
    return (
      <Router>
        <ScrollToTop />
        <div className="font-sans">
          <Header />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<ContactUs />} /> 
              <Route path="/book/age-of-the-impatient-leader" element={<BookAgeOf />} /> 
              <Route path="/book/the-10x-leader" element={<BookTheLeader />} /> 
              <Route path="/book/unbroken" element={<BookUnB />} /> 
              <Route path="/book/no-closure-no-forgiveness" element={<BookNoClo />} /> 
              <Route path="/about" element={<AboutPage/>} /> 
              <Route path="/speaking" element={<SpeakingPage/>} /> 
            </Routes>
          <Footer />
        </div>
      </Router>
    );
  }
  
export default App;
