import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Science from "./pages/Science";
import Pipeline from "./pages/Pipeline";
import Investors from "./pages/Investors";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
// Legacy pages - keeping for backward compatibility
import ScientificAdvisoryBoard from "./pages/ScientificAdvisoryBoard";
import Media from "./pages/Media";
import FAQ from "./pages/FAQ";
import Team from "./pages/Team";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* New consolidated landing pages */}
          <Route path="/about" element={<About />} />
          <Route path="/science" element={<Science />} />
          <Route path="/investors" element={<Investors />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Legacy pages - keeping for backward compatibility */}
          <Route path="/pipeline" element={<Pipeline />} />
          <Route path="/scientific-advisory-board" element={<ScientificAdvisoryBoard />} />
          <Route path="/media" element={<Media />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/team" element={<Team />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
