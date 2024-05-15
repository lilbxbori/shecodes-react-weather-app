import React from "react";
import "./App.css";
import "./styles.css";

import Search from "./Search";
import Footer from "./Footer";

function App() {
  return (
   <div className="App">
   <div className="weather-app">
      <Search />
      <Footer />
    </div></div>
  );
}

export default App;