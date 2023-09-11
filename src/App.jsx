import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './main/Welcome'
import Portal from './main/Portal'
import Register_Student from './main/Register_Student'
import Register_Parent from './main/Register_Parent'
import Register_Merchant from './main/Register_Merchant'
import Login_ from "./main/Login_";
import Home from "./main/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Welcome></Welcome>}></Route>
      <Route path="/portal" element={<Portal></Portal>}></Route>
      <Route path="/register_student" element={<Register_Student></Register_Student>}></Route>
      <Route path="/register_parent" element={<Register_Parent></Register_Parent>}></Route>
      <Route path="/register_merchant" element={<Register_Merchant></Register_Merchant>}></Route>
      <Route path="/login" element={<Login_></Login_>}></Route>
      <Route path="/home" element={<Home></Home>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
