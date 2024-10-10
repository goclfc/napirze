import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/landing/Landing";
import Donation from "./components/donation/Donation";
import AboutUs from "./components/aboutUs/AboutUs";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Fail from "./components/success/Fail";
import Success from "./components/success/Success";
import Admin from "./components/admin/Admin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="donation" element={<Donation />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="blog" element={<Blog />} />
        <Route path="fail" element={<Fail />} />
        <Route path="success" element={<Success />} />
        <Route path="blog/:id" element={<Admin />} />
        <Route path="admin" element={<Admin />} />
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
