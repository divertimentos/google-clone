import React from "react";
import * as S from "./Header.styles";
import profilePic from "../../Images/profile-pic.png";

export function HeaderItems({ items }) {
  return items.map((item) => (
    <S.GmailAndImages key={Math.random() * 100000}>{item}</S.GmailAndImages>
  ));
}

export function ProductsMenu() {
  return (
    <S.DotsMenuContainer>
      <S.DotsMenu />
    </S.DotsMenuContainer>
  );
}

export function ProfilePic() {
  return <S.ProfilePicStyles src={profilePic} />;
}

export function HeaderContainer({ children }) {
  return (
    <S.HeaderContainerStyles>
      <S.HeaderItemsStyles>{children}</S.HeaderItemsStyles>
    </S.HeaderContainerStyles>
  );
}
