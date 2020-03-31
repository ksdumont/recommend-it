import React from "react";
import Navbar from "./Navbar";

const HomePage = props => {
  return (
    <main>
      <Navbar {...props} />
      <div className="container">
        <h2>RecommendIt HomePage</h2>
        <p>Lorem Ipsum</p>
      </div>
    </main>
  );
};
export default HomePage;
