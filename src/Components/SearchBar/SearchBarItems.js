import React from "react";
import * as S from "./SearchBar.styles";

export function SearchBarContainer({ children }) {
  return <S.SearchBarContainerStyle>{children}</S.SearchBarContainerStyle>;
}

export function SearchBarIcon({ iconPath }) {
  return <S.SearchBarIconStyle src={iconPath} />;
}

export function SearchInput() {
  return <S.SearchInputStyle type="search" />;
}
