import React from "react";

const NavbarHead = ({ showFirstImage }) => {
  return (
    <div style={{ display: "flex", gap: 12, marginBottom: "2.2rem", height: 30 }}>
      {showFirstImage ? (
        <img src="/instagram.png" height={28} alt="Instagram" />
      ) : (
        <img src="/iglogo.png" height={18} alt="IG Logo" />
      )}
    </div>
  );
};

export default NavbarHead;
