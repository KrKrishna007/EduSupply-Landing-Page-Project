import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductHighlights from "./components/ProductHighlights";
import TestimonialCarousel from "./components/TestimonialCarousel";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-black dark:text-white">
        <Navbar />
        <Hero />
        <ProductHighlights />
        <TestimonialCarousel />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
