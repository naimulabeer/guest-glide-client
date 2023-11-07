import React from "react";
import ReactDOM from "react-dom/client";
import AuthProvider from "./contexts/AuthProvider.jsx";
import App from "./App.jsx";
import "./index.css";
import "@smastrom/react-rating/style.css";
import { ParallaxProvider } from "react-scroll-parallax";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ParallaxProvider>
        <App />
      </ParallaxProvider>
    </AuthProvider>
  </React.StrictMode>
);
