import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import CursorSpotlight from "./components/CursorSpotlight";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import StickyWaitlistBtn from "./components/StickyWaitlistBtn";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    // If the URL has a hash (#something)
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        // small delay ensures the target element has rendered
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 50);
      }
    }
  }, [location]);

  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
      <CursorSpotlight />
      <StickyWaitlistBtn />
      <ScrollToHash />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
