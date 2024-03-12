import React from "react";
import "./App.css";

import Routes from "./Routes";
import Navigation from "./Navigation";

function App() {
  return (
    <div className="App">
      <Navigation
      // TODO write logout , believe it will be just removing current user or setting back to blank, removing token
      //* logout={logout}
      />
      <Routes />
    </div>
  );
}
export default App;
