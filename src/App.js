import React from "react";
import "./App.css";
import Header from "./Components/Header";
import GoogleLogo from "./Components/GoogleLogo/GoogleLogo";
import SearchBar from "./Components/SearchBar/SearchBar";

function App() {
  return (
    <React.Fragment>
      <Header />
      <GoogleLogo />
      <SearchBar />
    </React.Fragment>
  );
}

export default App;
