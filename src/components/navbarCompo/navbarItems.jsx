import React from "react";
import Typo from "../typography";

const items = [
  { src: "/iglogo.png", text: "Home" },
  { src: "/iglogo.png", text: "Search" },
  { src: "/iglogo.png", text: "Explore" },
  { src: "/iglogo.png", text: "Reels" },
  { src: "/iglogo.png", text: "Messages" },
  { src: "/iglogo.png", text: "Notification" },
  { src: "/iglogo.png", text: "Create" },
  { src: "/iglogo.png", text: "Dashboard" },
  { src: "/iglogo.png", text: "Profile" },
];

// Define manual triggers here
const triggerItems = ["Explore", "Messages", "Dashboard"];

const NavbarItems = ({ showFirstImage, handleToggle }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      {items.map((item, index) => {
        const shouldTrigger = triggerItems.includes(item.text);
        return (
          <div
            key={index}
            onClick={shouldTrigger ? handleToggle : undefined}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              height: 28,
              transition: "all 0.3s ease",
              overflow: "hidden",
              cursor: shouldTrigger ? "pointer" : "default",
            }}
          >
            <img src={item.src} height={18} alt={item.text} />
            <div
              style={{
                maxWidth: showFirstImage ? "200px" : "0px",
                opacity: showFirstImage ? 1 : 0,
                whiteSpace: "nowrap",
                transition: "all 0.3s ease",
                overflow: "hidden",
              }}
            >
              <Typo text={item.text} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NavbarItems;
