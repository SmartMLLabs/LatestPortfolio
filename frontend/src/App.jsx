import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Home from "./pages/Home";
import Technology from "./pages/Technology";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
 
 
const ScrollToTop = () => {
  const { pathname } = useLocation();
 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
 
  return null;
};
 
const AppContent = () => {
  const location = useLocation();
  const validPaths = ["/", "/about", "/technology", "/contact"];
  const isNotFoundPage = !validPaths.includes(location.pathname);
 
  return (
    <>
      {!isNotFoundPage && <Header />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {!isNotFoundPage && <Footer />}
    </>
  );
};
 
 
export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}