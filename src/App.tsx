import Header from "./components/common/header";
import Footer from "./components/common/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router";

import Home from "./components/home/home";
import ErrorPage from "./pages/errors/errorPage";
import { ThemeProvider } from "./contexts/themeProvider";

function App() {
  return (
    <Router>
      <ThemeProvider>
        <Header />
        <Routes>
            <Route index element={<Home />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
