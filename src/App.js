import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Doctors from "./pages/Doctors";
import RightNavbar from "./components/RightNavbar";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className=" flex gap-4 py-5 px-5">
          <RightNavbar />
          <div className=" border w-full rounded-md">
            <Routes>
              <Route path="/doctors" element={<Doctors />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
