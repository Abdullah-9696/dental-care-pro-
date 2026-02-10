import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./pages/Footer"; // You can keep Footer in pages folder
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Articles from "./pages/articles";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />

      {/* main content */}
      <div style={{ paddingTop: "80px", minHeight: "calc(100vh - 160px)" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/articles" element={<Articles />} />
        </Routes>
      </div>

      <Footer /> {/* Only here, never inside pages */}
    </BrowserRouter>
  );
}


