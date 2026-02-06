import { Route, Routes } from "react-router";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import AboutUsPage from "@/pages/AboutUsPage";
import ContactPage from "./pages/ContactPage";
import ServiceDetails from "@/pages/ServiceDetails";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />}></Route>
        <Route path="services/:serviceName" element={<ServiceDetails />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}

export default App;
