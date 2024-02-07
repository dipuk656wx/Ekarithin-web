import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import "./index.css";
import Home from "./pages/home";
import EventCard from "./components/EventCard/EventCard";


const root = createRoot(document.getElementById("app") as HTMLElement);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  },
});

root.render(
  <QueryClientProvider client={queryClient}>
    <Router>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/events" element={<EventCard/>}/>
        
      </Routes>
    </Router>
  </QueryClientProvider>
);
