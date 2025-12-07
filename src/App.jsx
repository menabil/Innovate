import "./App.css";
import RootLayouts from "./components/layouts/RootLayouts";
import About from "./components/pages/About";
import Service from "./components/pages/Service";
import Protfolio from "./components/pages/Protfolio";
import Price from "./components/pages/Price";
import Blog from "./components/pages/Blog";
import Error from "./components/pages/Error";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import { Routes, Route } from "react-router-dom";
import Accessibility from "./components/pages/Accessibility";
import Review from "./components/pages/Review";
import TaskManagement from "./components/pages/TaskManagement";
import Benifit from "./components/pages/Benifit";
import Time from "./components/pages/Time";
import Growth from "./components/pages/Growth";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayouts />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/protfolio" element={<Protfolio />} />
          <Route path="/price" element={<Price />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="/review" element={<Review />} />
          <Route path="/task" element={<TaskManagement />} />
          <Route path="/benifit" element={<Benifit />} />
          <Route path="/time" element={<Time />} />
          <Route path="/growth" element={<Growth />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
