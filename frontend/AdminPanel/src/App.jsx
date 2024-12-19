import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./page/Home";
import About from "./page/About";
import Courses from "./page/Courses";
import Testimonial from "./page/Testimonial";
import Requirement from "./page/Requirement";
import Event from "./page/Event";
import Kids from "./page/Kids";
import Contact from "./page/Contact";
import Error404 from "./page/Error404";
import StudentMark from "./page/StudentMark";
import StudentMarkSlug from "./page/StudentMarkSlug";
import HeaderNav from "./components/HeaderNav";
import Acadimics from "./page/Acadimics";

function App() {
  const rootRoute = '/admin/v2'
  return (
    <>
      <BrowserRouter>
      <header>
        <HeaderNav/>
      </header>
        <Routes>
            <Route  path={`${rootRoute}/` }element={<Home/>}/>
            <Route path={`${rootRoute}/about`} element={<About />} />
            <Route path={`${rootRoute}/courses`} element={<Courses />} />
            <Route path={`${rootRoute}/testimonial`} element={<Testimonial />} />
            <Route path={`${rootRoute}/acadimics`} element={<Acadimics />} />
            <Route path={`${rootRoute}/requirement`} element={<Requirement />} />
            <Route path={`${rootRoute}/event`} element={<Event />} />
            <Route path={`${rootRoute}/kids`} element={<Kids />} />
            <Route path={`${rootRoute}/contact`} element={<Contact />} />
            <Route path={`${rootRoute}/marks`} element={<StudentMark />} />
            {/* <Route path={`${rootRoute}/marks/:classId`} element={<StudentList />} /> */}
            <Route path={`${rootRoute}/marks/:id` }element={<StudentMarkSlug />} />
            <Route path={`${rootRoute}/*`} element={<Error404/>}/>
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
