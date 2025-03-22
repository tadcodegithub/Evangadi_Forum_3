import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
// import Home from "./Pages/HomePage/HomePages";
// import HowItWorks from "./pages/HowItWorks";
// import Login from "./pages/Login";


function App() {
  return (
    <Router>
      <Header />
      <Footer />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/login" element={<Login />} />
      </Routes> */}
    </Router>
  );
}

export default App;
