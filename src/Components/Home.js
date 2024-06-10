import React, { useContext } from "react";

import Movies from "./Movies";
import Search from "./Search";


const Home = () => {
  // const name = useContext(AppContext);

  return (
    <div className="container p-3">
      <Search/>
      <Movies/>
    </div>
  );
};

export default Home;
