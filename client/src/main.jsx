import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../public/customFont.css";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
