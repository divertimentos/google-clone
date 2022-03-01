import React from "react";
import * as S from "./SearchBar.styles";
import { SearchBarIcon } from "./SearchBarItems";

function SearchBar() {
  const magnifyingGlassLogo = require("../../Images/google-glass.png");
  const googleKeyboardLogo = require("../../Images/google-keyboard.png");
  return (
    <S.SearchBarContainer>
      <SearchBarIcon iconPath={magnifyingGlassLogo} />
      <S.SearchInput type="search" />
      <SearchBarIcon iconPath={googleKeyboardLogo} />
    </S.SearchBarContainer>
  );
}

export default SearchBar;
