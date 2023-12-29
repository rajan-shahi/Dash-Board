import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Doctors from "./pages/Doctors";
import RightNavbar from "./components/RightNavbar";
import Navbar from "./components/Navbar";
import Testmoniral from "./pages/Testmoniral";
import AddTestmoniorial from "./pages/AddTestmoniorial";
import Faqs from "./pages/Faqs";
import AddFaqs from "./pages/AddFaqs";
import { Toaster } from "react-hot-toast";
import Contact from "./pages/Contact";
import AddContact from "./pages/AddContact";



function App() {
  return (
    <div className=" overflow-x-hidden">
         <Toaster />
      <BrowserRouter>
        <Navbar />
        <div className=" flex gap-4 py-5">
          <RightNavbar />
          <div className=" border w-full rounded-md px-5 py-2">
            <Routes>
              <Route path="/doctors" element={<Doctors />} />
              <Route path="/testimonial" element={<Testmoniral />} />
              <Route path="/addtestimonial" element={<AddTestmoniorial />} />
              <Route path="/faqs" element={<Faqs/>} />
              <Route path="/addfaqs" element={<AddFaqs/>} />
              <Route path="/contacts" element={<Contact/>} />
              <Route path="/addcontact" element={<AddContact/>} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
