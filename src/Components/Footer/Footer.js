import React from "react";
import * as S from "./Footer.styles";

function Footer() {
  const firstRowItems = ["Brasil"];
  const lastRowItems = {
    leftItems: ["Sobre", "Publicidade", "Negócios", "Como funciona a Pesquisa"],
    rightItems: ["Privacidade", "Termos", "Configurações"],
  };

  return (
    <S.FooterContainer>
      <S.FirstRow>
        {firstRowItems.map((firstRowItem) => (
          <S.RowItem>{firstRowItem}</S.RowItem>
        ))}
      </S.FirstRow>

      <S.LastRow>
        <S.RowItemContainer>
          {lastRowItems.leftItems.map((leftItem) => (
            <S.RowItem>{leftItem}</S.RowItem>
          ))}
        </S.RowItemContainer>
        <S.RowItemContainer>
          {lastRowItems.rightItems.map((rightItem) => (
            <S.RowItem>{rightItem}</S.RowItem>
          ))}
        </S.RowItemContainer>
      </S.LastRow>
    </S.FooterContainer>
  );
}

export default Footer;
