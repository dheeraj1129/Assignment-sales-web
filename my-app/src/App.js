import "./App.css";
import React from "react";
import Sidebar from "./Component/Sidebar";
import Home from "./Component/Home";

function App() {
  return (
    <>
      <div className="all flex w-full h-fit ">
        <Sidebar />
        <Home />
      </div>
    </>
  );
}

export default App;
