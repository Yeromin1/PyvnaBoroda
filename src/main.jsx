// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "modern-normalize";
// import "./index.css";
// import App from "./components/App.jsx";
// import { UserProvider } from "./userContext.jsx";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <UserProvider>
//       <App />
//     </UserProvider>
//   </StrictMode>,
// );

import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App.jsx";
import UserProvider from "./userContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
    <App />
  </UserProvider>,
);
