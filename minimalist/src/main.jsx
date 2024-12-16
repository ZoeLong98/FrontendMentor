import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Manage from "./pages/portfolio/manage";
import Bookmark from "./pages/portfolio/bookmark";
import Fylo from "./pages/portfolio/fylo";
import Insure from "./pages/portfolio/insure";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/portfolio/manage" element={<Manage />} />
          <Route path="/portfolio/bookmark" element={<Bookmark />} />
          <Route path="/portfolio/fylo" element={<Fylo />} />
          <Route path="/portfolio/insure" element={<Insure />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
