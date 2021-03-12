import React from "react";
import "./App.scss";
import Home from "./component/Home/Home";
import News from "./component/News/News";

const App = () => {
  return (
    <div className="App" id="tohome">
      <Home />
      <News />
    </div>
  );
};

export default App;
