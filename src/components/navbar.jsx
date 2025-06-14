import React from "react";
import NavbarHead from "./navbarCompo/navbarHead";
import NavbarItems from "./navbarCompo/navbarItems";

const Navbar = ({ showFirstImage, setShowFirstImage }) => {
  const handleToggle = () => {
    setShowFirstImage((prev) => !prev);
  };

  return (
    <div style={{ display: "flex" }}>
      {/* Primary Sidebar */}
      <div
        style={{
          padding: "1.9rem 2rem",
          display: "flex",
          flexDirection: "column",
          borderRight: "2px solid grey",
          height: "100vh",
          width: showFirstImage ? "120px" : "20px",
          transition: "width 0.3s ease",
          overflow: "hidden",
        }}
      >
        <div onClick={handleToggle} style={{ cursor: "pointer" }}>
          <NavbarHead showFirstImage={showFirstImage} />
        </div>
        <NavbarItems
          showFirstImage={showFirstImage}
          handleToggle={handleToggle}
        />
      </div>

      {/* Secondary Panel (new div) */}
      {/* {!showFirstImage && ( */}
      <div
        style={{
          height: "100vh",
          width: showFirstImage ? "0px" : "250px",
          backgroundColor: "#f4f4f4",
          borderRight: showFirstImage ? "none" : "1px solid #ccc",
          transition:
            "width 0.3s ease, opacity 0.3s ease, visibility 0.3s ease",
          overflow: "hidden",
          opacity: showFirstImage ? 0 : 1,
          visibility: showFirstImage ? "hidden" : "visible",
        }}
      >
        {/* Optional content inside secondary panel */}
        <div
          style={{
            padding: "1rem",
            opacity: showFirstImage ? 0 : 1,
            transition: "opacity 0.3s ease 0.1s",
          }}
        >
          <h4>More Options</h4>
          <p>Custom tools, filters, settings...</p>
        </div>
      </div>
      {/* )} */}
    </div>
  );
};

export default Navbar;
