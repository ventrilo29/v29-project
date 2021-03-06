import React, { useState, useEffect } from "react";

const Home = () => {
  const [content, setContent] = useState("");

    useEffect(() => {
      return(
        <div><h1>Welcome</h1></div>
      )
    }, []);

    return (
      <div className="container">
        <header className="jumbotron">
          <h3>{content}</h3>
        </header>
      </div>
    );
};

export default Home;