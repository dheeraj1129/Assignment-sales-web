import React from "react";
import Overview from "./Overview";
import Name from "./Name";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <div className="w-full block ml-8 h-screen home ">
        <Name />
        <Overview />
        <Footer />
      </div>
    </>
  );
}

export default Home;
