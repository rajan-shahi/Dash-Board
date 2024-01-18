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
import Admins from "./pages/Admins";
import AddAdmins from "./pages/AddAdmins";
import AddDoctors from "./pages/AddDoctors";
import About from "./pages/About";
import AddAbout from "./pages/AddAbout";
import Features from "./pages/Features";
import Addfeatures from "./pages/Addfeatures";
import Committees from "./pages/Committees";
import Addcommitees from "./pages/Addcommitees";
import Edid from "./pages/Edid";
import Aboutedit from "./pages/Aboutedit";
import AdminEdit from "./pages/AdminEdit";
import TestmoniralEdit from "./pages/TestmoniralEdit";
import CommitteeEdit from "./pages/CommitteeEdit";

function App() {
  return (
    <div className=" overflow-x-hidden">
      <Toaster />
      <BrowserRouter>
        <Navbar />
        <div className=" flex gap-4 py-28">
          <RightNavbar />
          <div className=" border w-full rounded-md px-5 py-2">
            <Routes>
              <Route path="/doctors" element={<Doctors />} />
              <Route path="/testimonial" element={<Testmoniral />} />
              <Route path="/addtestimonial" element={<AddTestmoniorial />} />
              <Route path="/faqs" element={<Faqs />} />
              <Route path="/addfaqs" element={<AddFaqs />} />
              <Route path="/contacts" element={<Contact />} />
              <Route path="/addcontact" element={<AddContact />} />
              <Route path="/admins" element={<Admins />} />
              <Route path="/addadmins" element={<AddAdmins />} />
              <Route path="/adddoctors" element={<AddDoctors />} />
              <Route path="/about" element={<About />} />
              <Route path="/addabout" element={<AddAbout />} />
              <Route path="/features" element={<Features />} />
              <Route path="/addfeatures" element={<Addfeatures />} />
              <Route path="/committees" element={<Committees />} />
              <Route path="/addcommittees" element={<Addcommitees />} />
              <Route path="/faq-edit/:id" element={<Edid />} />
              <Route path="/about-edit/:id" element={<Aboutedit />} />
              <Route path="/admin-edit/:id" element={<AdminEdit />} />
              <Route path="/committee-edit/:id" element={<CommitteeEdit />} />
              <Route
                path="/testmoniral-edit/:id"
                element={<TestmoniralEdit />}
              />
            </Routes>
            
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
