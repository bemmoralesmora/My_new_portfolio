import React from "react";
import { Header } from "./components/header/header.jsx";
import { Footer } from "./components/footer/footer.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export function App() {
  return (
    <>
      <Routes>
        <Route
          path="/*"
          element={
            <div className="app-container">
              <Header />
              <main className="app-main">{/* Main content goes here */}</main>
              <Footer />
            </div>
          }
        />
      </Routes>
    </>
  );
}
