import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Component/Header/Header";
import QuestionForm from "./Pages/QuestionForm/QuestionForm";
import SigninPage from './Pages/Auth/SigninPage/SigninPage';
import LoginPage from './Pages/Auth/LoginPage/LoginPage';
// import Home from "./Pages/HomePage/HomePages";
// import HowItWorks from "./pages/HowItWorks";
// import Login from "./pages/Login";


function App() {
  return (
    <>
      <Header />
      {/* <QuestionForm/>
      <SigninPage />
      <LoginPage /> */}
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/how-it-works" element={<HowItWorks />} /> */}
        <Route path='/dashboard' element={<SigninPage/>} />
        <Route path="/login" element={<LoginPage />} />
      </Routes> 
      </>
  );
}

export default App;
