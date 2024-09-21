import React from "react";
import ReactDOM from "react-dom/client";
import App from './App.jsx'
import './index.css'
import './output.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "@mantine/core/styles.layer.css";
import "mantine-datatable/styles.layer.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
