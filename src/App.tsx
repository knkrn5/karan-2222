import Header from "./components/common/header";
import Footer from "./components/common/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router";

import Home from "./components/home/home";
import ErrorPage from "./pages/errors/errorPage";


import { ThemeProvider } from "./contexts/themeProvider";
import AboutMe from "./pages/contents/about";
import ContactMe from "./pages/contents/contact";
import ResoursesInfo from "./pages/contents/resourses";
import Test from "./pages/test";


function App() {
  return (
    <Router>
      <ThemeProvider>
        <Header />
        <Routes>
            <Route index element={<Home />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/contact" element={<ContactMe />} />
            <Route path="/resourses" element={<ResoursesInfo />} />
            <Route path="/test" element={<Test />} />

        </Routes>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
