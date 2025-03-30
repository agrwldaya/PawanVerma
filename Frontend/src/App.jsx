import Footer from "./components/Footer"
import Header from "./components/Header"
import AvailableOn from "./components/Home/AvailableOn"
import Blogs from "./components/Home/Blogs"
import Books from "./components/Home/Books"
import Gallery from "./components/Home/Gallery"
import Hero from "./components/Home/Hero"
import Testimonials from "./components/Home/Testimonials"
import Videos from "./components/Home/Videos"
import Home from "./Home"

 

function App() {
  return (
    <div className="font-sans">
      <Header />
      <Home/>
      <Footer />
    </div>
  )
}

export default App

