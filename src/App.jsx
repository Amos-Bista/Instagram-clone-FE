// import "./App.css";

import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar";
import { useState } from "react";

function App() {
  const [showFirstImage, setShowFirstImage] = useState(true);

  const navbarWidth = showFirstImage ? 250 : 100; // match with Navbar
  const transitionStyle = "all 0.3s ease";
  return (
    <div style={{ display: "flex" }}>
      <Navbar
        showFirstImage={showFirstImage}
        setShowFirstImage={setShowFirstImage}
      />
      <div
        style={{
          marginLeft: `${navbarWidth}px`,
          padding: "20px",
          width: "100%",
          transition: transitionStyle,
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default App;
