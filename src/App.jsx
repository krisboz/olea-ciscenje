import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Menu from "./components/Menu";
import About from "./pages/About";
import Home from "./pages/Home";
import TermsAndConditions from "./components/TermsAndConditions";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms" element={<TermsAndConditions />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
