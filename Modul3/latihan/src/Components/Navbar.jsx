import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav>
    NAVBAR
      <ul>
        <li>
          <button onClick={() => navigate("/")}>Home</button>
        </li>
        <li>
          <button onClick={() => navigate("/about")}>About Us</button>
        </li>
        <li>
          <button onClick={() => navigate("/contact")}>Contact</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;