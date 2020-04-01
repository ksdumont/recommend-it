import React from "react";
import Navbar from "./Navbar";

const HomePage = props => {
  return (
    <main>
      <Navbar className="navigation" {...props} />
      <div className="container">
        <h2>RecommendIt HomePage</h2>
        <p className="homepage">
          Welcome to RecommendIt, a site for users to recommend Shows, Movies,
          Books, Podcasts, Youtube Channels, SubReddits and Websites to each
          other
        </p>
      </div>
    </main>
  );
};

export default HomePage;
