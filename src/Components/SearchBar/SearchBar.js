import React from "react";
import {
  SearchBarIcon,
  SearchBarContainer,
  SearchInput,
} from "./SearchBarItems";

function SearchBar() {
  const magnifyingGlassLogo = require("../../Images/google-glass.png");
  const googleKeyboardLogo = require("../../Images/google-keyboard.png");
  return (
    <SearchBarContainer>
      <SearchBarIcon iconPath={magnifyingGlassLogo} />
      <SearchInput type="search" />
      <SearchBarIcon iconPath={googleKeyboardLogo} />
    </SearchBarContainer>
  );
}

export default SearchBar;
