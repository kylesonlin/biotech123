import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorBoundary from "@/components/ErrorBoundary";
import { SkipToMain } from "@/components/AccessibilityEnhancements";
import Index from "./pages/Index";
import Science from "./pages/Science";
import Pipeline from "./pages/Pipeline";
import NotFound from "./pages/NotFound";
import ScientificAdvisoryBoard from "./pages/ScientificAdvisoryBoard";
import Media from "./pages/Media";
import Investors from "./pages/Investors";
import FAQ from "./pages/FAQ";
import Team from "./pages/Team";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ErrorBoundary>
      <TooltipProvider>
        <SkipToMain />
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div id="main-content">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/science" element={<Science />} />
              <Route path="/pipeline" element={<Pipeline />} />
              <Route path="/scientific-advisory-board" element={<ScientificAdvisoryBoard />} />
              <Route path="/media" element={<Media />} />
              <Route path="/investors" element={<Investors />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contact" element={<Contact />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </ErrorBoundary>
  </QueryClientProvider>
);

export default App;
