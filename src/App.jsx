import { Route, Routes } from "react-router";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import AboutUsPage from "@/pages/AboutUsPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}

export default App;
