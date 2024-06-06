import React, { useContext } from "react";
// import { AppContext } from "../Context/context";
import { useGlobalContext } from "../Context/context";

const Home = () => {
  // const name = useContext(AppContext);
  const name = useGlobalContext();

  return (
    <div>
      <h1>My Home Page</h1>
      <p>{name}</p>
    </div>
  );
};

export default Home;
