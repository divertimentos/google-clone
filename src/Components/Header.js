import React from "react";
import {
  HeaderItems,
  ProductsMenu,
  HeaderContainer,
  ProfilePic,
} from "./HeaderItems/HeaderItems";

function Header() {
  return (
    <HeaderContainer>
      <HeaderItems items={["Gmail", "Imagens"]} />
      <ProductsMenu />
      <ProfilePic />
    </HeaderContainer>
  );
}

export default Header;
