import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Leadership from "./pages/Leadership";
import Membership from "./pages/Membership";
import WhoWeAre from "./pages/WhoWeAre";
import ProjectTourism from "./pages/ProjectTourism";
import ProjectEducation from "./pages/ProjectEducation";
import ProjectCulture from "./pages/ProjectCulture";
import ProjectWater from "./pages/ProjectWater";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/projects/tourism" element={<ProjectTourism />} />
          <Route path="/projects/education" element={<ProjectEducation />} />
          <Route path="/projects/culture" element={<ProjectCulture />} />
          <Route path="/projects/water" element={<ProjectWater />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
