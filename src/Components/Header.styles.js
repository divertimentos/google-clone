import styled from "styled-components";
import { ReactComponent as MenuIcon } from "../Images/nine-dots-menu.svg";

export const HeaderContainerStyles = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 1rem 0 2rem 0;
  align-items: center;
`;

export const GmailAndImages = styled.li`
  margin-right: 0.93rem;
  list-style-type: none;
`;

export const DotsMenu = styled(MenuIcon)`
  height: 30px;
  width: auto;
  fill: #6e7276;
  margin-right: 0.93rem;
`;

export const ProfilePicStyles = styled.img`
  list-style-type: none;
  height: 40px;
  width: 40px;
  fill: #6e7276;
  margin-right: 0.93rem;
`;
