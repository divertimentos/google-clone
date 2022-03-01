import React from "react";
import {
  HeaderItems,
  ProductsMenu,
  HeaderContainer,
  ProfilePic,
} from "./HeaderItems";

function Header() {
  const itemsArray = ["Gmail", "Imagens"];
  return (
    <HeaderContainer>
      <HeaderItems items={itemsArray} />
      <ProductsMenu />
      <ProfilePic />
    </HeaderContainer>
  );
}

export default Header;
