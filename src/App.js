import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProductDetail from "./pages/ProductDetail";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>

          <Route path="/about" element={<AboutUs />} />
          <Route path="/" element={<Home />} />
          <Route path="/prod-detail" element={<ProductDetail/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
