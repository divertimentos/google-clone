import React from "react";
import * as S from "../Header.styles";
import profilePic from "../../Images/profile-pic.png";

export function HeaderItems({ items }) {
  return items.map((item) => <S.GmailAndImages>{item}</S.GmailAndImages>);
}

export function ProductsMenu() {
  return <S.DotsMenu />;
}

export function ProfilePic(text) {
  return <S.ProfilePicStyles src={profilePic} />;
}

export function HeaderContainer({ children }) {
  return <S.HeaderContainerStyles>{children}</S.HeaderContainerStyles>;
}
