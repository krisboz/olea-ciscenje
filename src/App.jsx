import {
  BrowserRouter,
  HashRouter,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import ReactGA from "react-ga";
import { useEffect } from "react";
import "./App.scss";
import Menu from "./components/Menu";
import About from "./pages/About";
import Home from "./pages/Home";
import Services from "./pages/Services";
import PriceList from "./pages/PriceList";
import Contact from "./pages/Contact";
import TermsAndConditions from "./components/TermsAndConditions";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";

function ScrollToTop() {
  const { pathname } = useLocation();
  const TRACKING_ID = "G-XJ0XJ5T433"; // OUR_TRACKING_ID

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

/**
 *
 * naslovna
 * o nama
 * naše usluge
 * cjenik
 * kontakt
 */

const App = () => {
  return (
    <HashRouter basename="/">
      <Menu />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/prices" element={<PriceList />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/terms" element={<TermsAndConditions />} />
        <Route element={<NotFound />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
};

export default App;
