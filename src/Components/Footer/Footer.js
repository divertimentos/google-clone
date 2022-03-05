import React from "react";
import * as S from "./Footer.styles";

function Footer() {
  return (
    <S.FooterContainer>
      <S.FirstRow>
        <S.RowItem>I am the first row</S.RowItem>
      </S.FirstRow>
      <S.LastRow>
        <S.RowItem>I am the last row</S.RowItem>
      </S.LastRow>
    </S.FooterContainer>
  );
}

export default Footer;
