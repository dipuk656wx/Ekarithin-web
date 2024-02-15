import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import "./index.css";
import Home from "./pages/home";
import EventCard from "./components/EventCard/EventCard";
import EventsPage from "./pages/event-page";
// TechnicalSingal
import TechnicalEventcard from "./components/EventCard/TechnicalEventcard";
import SportEventCard from "./components/EventCard/SportsEventCard";
import Registration from "./pages/Registration";
import EventPage from "./components/SingleEventDetail/SingalEventDetail";
import SingalEventDetail from "./components/SingleEventDetail/SingalEventDetail";
import TechnicalSingal from "./components/SingleEventDetail/TchnicalSingalPage";
import { SportAllData } from "./SportData";
import SportSingle from "./components/SingleEventDetail/SportSingle";

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
        <Route path="/home" element={<Home />}/>
        <Route path="/" element={<Home />} />

        <Route path="/events" element={<EventsPage />} />
        <Route path="/register" element={<EventPage />} />
        <Route path="/technical-events" element={<TechnicalEventcard />} />
        <Route path="/cultural-events" element={<EventCard />} />
        <Route path="/Sport-events" element={<SportEventCard />} />
        <Route path="/cultural-event/:id" element={<SingalEventDetail />} />
        <Route path="/Technical-event/:id" element={<TechnicalSingal />} />
        <Route path="/Sports-event/:id" element={<SportSingle />} />
      </Routes>
    </Router>
  </QueryClientProvider>
);
