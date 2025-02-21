import Header from "./components/common/header";
import Footer from "./components/common/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router";

import Home from "./components/home/home";
import ErrorPage from "./pages/errors/errorPage";


import { ThemeProvider } from "./contexts/themeProvider";
import AboutMe from "./pages/contents/about";
import ContactMe from "./pages/contact-page/contact";
import ResourcesInfo from "./pages/contents/resourceCard";

import Github from "./pages/github";
import TeamPage from "./pages/team";


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
            <Route path="/team" element={<TeamPage />} />
            <Route path="/resourses" element={<ResourcesInfo />} />

            <Route path="/github" element={<Github />} />

        </Routes>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
