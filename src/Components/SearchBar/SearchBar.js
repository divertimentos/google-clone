import React from "react";
import { SearchBarContainer, SearchInput, InnerSearchInput, SearchBarIcon } from "./SearchBarItems";

function SearchBar() {
  const magnifyingGlassLogo = require("../../Images/google-glass.png");
  const googleKeyboardLogo = require("../../Images/google-keyboard.png");
  return (
    <SearchBarContainer>
      <SearchInput>
        <SearchBarIcon iconPath={magnifyingGlassLogo} />
        <InnerSearchInput />
        <SearchBarIcon iconPath={googleKeyboardLogo} />
     </SearchInput>
    </SearchBarContainer>
  );
}

export default SearchBar;
