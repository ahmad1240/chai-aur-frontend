import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// function MyApp() {
//   return (
//     <>
//       <h1>Custom App</h1>
//     </>
//   );
// }

// const reactElement = React.createElement("a", {
//   href: "https://google.com",
//   target: "_blank",
// });
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
