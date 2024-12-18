import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Testimonial from "./pages/Testimonial";
import Acadimics from "./pages/Acadimics";
import Requirement from "./pages/Requirement";
import Event from "./pages/Event";
import Kids from "./pages/Kids";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import { ReactGoogleReviews } from "react-google-reviews";
import "react-google-reviews/dist/index.css";
import Error404 from "./pages/Error404";
import ScrollTop from "./CustomHook/ScrollTop";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollTop/>
        <Routes>
            <Route  path="/" element={<Home/>}/>
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/testimonial" element={<Testimonial />} />
            <Route path="/acadimics" element={<Acadimics />} />
            <Route path="/requirement" element={<Requirement />} />
            <Route path="/event" element={<Event />} />
            <Route path="/kids" element={<Kids />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/*" element={<Error404/>}/>
        </Routes>
        <ReactGoogleReviews
          layout="carousel"
          featurableId={"a6937548-a640-49ff-9ffd-bcbf3ee74fc1"}
        />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
