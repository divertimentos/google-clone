import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import GoogleLogo from "./Components/GoogleLogo/GoogleLogo";
import SearchBar from "./Components/SearchBar/SearchBar";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <React.Fragment>
      <Header />
      <GoogleLogo />
      <SearchBar />
      <Footer />
    </React.Fragment>
  );
}

export default App;
