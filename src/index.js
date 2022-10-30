import { createRoot } from "react-dom/client";
import React from "react";
import App from "./feed/App";

const rootDOM = document.getElementById('root')
const root = createRoot(rootDOM)
root.render(
    <App />
)