import React, { useState } from "react";
import "./App.css";
import { myContext } from "./Context";
import Home from "./Home";
import Topbar from "./Components/Topbar";

function App() {
  const [user, setUser] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false); // State for menu toggle

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <myContext.Provider value={{ user, setUser }}>
        <Topbar menuOpen={menuOpen} handleMenuToggle={handleMenuToggle} /> {/* Pass props to Topbar */}
        <Home />
      </myContext.Provider>
    </>
  );
}

export default App;
