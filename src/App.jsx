import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";

function App() {
  return (
    <div className="pt-[80px] pb-[60px] min-h-screen bg-gradient-to-tr from-red-950 to-yellow-300">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
