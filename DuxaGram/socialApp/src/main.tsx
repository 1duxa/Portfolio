import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./context/authContext.tsx";
import QuerryProvider from "./lib/react-query/QuerryProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>

      <QuerryProvider>
        <AuthProvider>

          <App />
          
        </AuthProvider>
      </QuerryProvider>

    </BrowserRouter>
  </React.StrictMode>
);
