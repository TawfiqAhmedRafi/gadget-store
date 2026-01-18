import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { GadgetProvider } from "@/contexts/GadgetContext";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Items from "./pages/Items";
import ItemDetails from "./pages/ItemDetails";
import AddItem from "./pages/AddItem";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <GadgetProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/login" element={<Login />} />
              <Route path="/items" element={<Items />} />
              <Route path="/items/:id" element={<ItemDetails />} />
              <Route path="/add-item" element={<AddItem />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </GadgetProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
