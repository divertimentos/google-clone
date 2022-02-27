import React from "react";
import * as S from "./Header.styles";

function Header() {
  return (
    <ul className="headerListParent">
      <li className="headerListChild">Gmail</li>
      <li className="headerListChild nine-dots-menu-parent">Imagens</li>
      <S.NineDotsMenu className="nine-dots-menu-child" />
      <li id="headerListChild">GT</li>
    </ul>
  );
}

export default Header;
