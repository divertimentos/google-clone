import React from "react";
import * as S from "./GoogleLogo.styles";

function GoogleLogo() {
  const logo = require("../../Images/google-logo.png");
  return (
    <S.LogoDiv>
      <S.GoogleLogoImage alt="Google logo" src={logo} />
    </S.LogoDiv>
  );
}

export default GoogleLogo;
