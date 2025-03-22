import React from 'react'
import SigninPage from './Pages/SigninPage/SigninPage'
import LoginPage from './Pages/LoginPage/LoginPage'
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Component/Header/Header";
import QuestionForm from "./Pages/QuestionForm/QuestionForm";
// import Home from "./Pages/HomePage/HomePages";
// import HowItWorks from "./pages/HowItWorks";
// import Login from "./pages/Login";


function App() {
  return (
    <Router>
      <Header />
      <QuestionForm/>
      {/* <SigninPage /> */}
      <LoginPage />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/login" element={<Login />} />
      </Routes> */}
    </Router>
  );
}

export default App;
