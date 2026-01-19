import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Pharmacy from "./Pharmacy";
import Patient from "./Patient";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pharmacy" element={<Pharmacy />} />
        <Route path="/patient" element={<Patient />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
