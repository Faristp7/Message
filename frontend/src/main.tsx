import React from "react";
import ReactDOM from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import App from "./App.tsx";
import "./index.css";

const cl = "814271571179-7rghpbkhhr5n5b6q38p38vgblop0ip4p.apps.googleusercontent.com"
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={cl}>
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>,
);
