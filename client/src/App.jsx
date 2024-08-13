import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../src/pages/Home.jsx"
import SignUp from "../src/pages/SignUp.jsx"
import About from "../src/pages/About"
import SignIn from "./pages/SignIn.jsx"
import Profile from "../src/pages/Profile"
import Header from "./components/Header.jsx"

export default function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      </BrowserRouter>
  )
}
