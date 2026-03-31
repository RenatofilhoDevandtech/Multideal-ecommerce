
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import { AuthProvider } from "./contexts/AuthContext";
import { LocationProvider } from "./contexts/LocationContext";

// Lazy load pages for code splitting
const Index = React.lazy(() => import("./pages/Home"));
const Products = React.lazy(() => import("./pages/Products"));
const Categories = React.lazy(() => import("./pages/Categories"));
const MyOrders = React.lazy(() => import("./pages/MyOrders"));
const Login = React.lazy(() => import("./pages/Login"));
const Checkout = React.lazy(() => import("./pages/Checkout"));
const MyImpact = React.lazy(() => import("./pages/MyImpact"));
const SellEco = React.lazy(() => import("./pages/SellEco"));
const Help = React.lazy(() => import("./pages/Help"));
const KitsValidados = React.lazy(() => import("./pages/KitsValidados"));
const Labs = React.lazy(() => import("./pages/Labs"));
const About = React.lazy(() => import("./pages/About"));
const Blog = React.lazy(() => import("./pages/Blog"));
const Careers = React.lazy(() => import("./pages/Careers"));
const Offers = React.lazy(() => import("./pages/Offers"));
const Contact = React.lazy(() => import("./pages/Contact"));
const TrackOrder = React.lazy(() => import("./pages/TrackOrder"));
const Returns = React.lazy(() => import("./pages/Returns"));
const Terms = React.lazy(() => import("./pages/Terms"));
const Privacy = React.lazy(() => import("./pages/Privacy"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

import BackendDiagnostics from "./components/feedback/BackendDiagnostics";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
    },
  },
});

const App = () => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <LocationProvider>
            <CartProvider>
              <TooltipProvider>
                <BrowserRouter>
                  <div className="flex flex-col min-h-screen">
                    <React.Suspense fallback={
                      <div className="flex items-center justify-center min-h-screen bg-white">
                        <div className="flex flex-col items-center gap-4">
                          <div className="w-12 h-12 border-4 border-ml-blue border-t-transparent rounded-full animate-spin" />
                          <p className="text-ml-blue font-bold animate-pulse">Carregando...</p>
                        </div>
                      </div>
                    }>
                      <Routes>
                        <Route path="/" element={<Index />} />
                        <Route path="/produtos" element={<Products />} />
                        <Route path="/categorias" element={<Categories />} />
                        <Route path="/meus-pedidos" element={<MyOrders />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="/impacto" element={<MyImpact />} />
                        <Route path="/vender-eco" element={<SellEco />} />
                        <Route path="/ajuda" element={<Help />} />
                        <Route path="/kits" element={<KitsValidados />} />
                        <Route path="/labs" element={<Labs />} />
                        <Route path="/ferramentas" element={<Labs />} />
                        <Route path="/sobre" element={<About />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/carreiras" element={<Careers />} />
                        <Route path="/ofertas" element={<Offers />} />
                        <Route path="/contato" element={<Contact />} />
                        <Route path="/pedidos" element={<TrackOrder />} />
                        <Route path="/devolucoes" element={<Returns />} />
                        <Route path="/termos" element={<Terms />} />
                        <Route path="/privacidade" element={<Privacy />} />
                        <Route path="*" element={<NotFound />} />
                      </Routes>
                    </React.Suspense>
                    <Toaster />
                    <Sonner position="top-right" closeButton richColors />
                    <BackendDiagnostics />
                  </div>
                </BrowserRouter>
              </TooltipProvider>
            </CartProvider>
          </LocationProvider>
        </AuthProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;
