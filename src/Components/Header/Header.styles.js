import styled from "styled-components";
import { ReactComponent as MenuIcon } from "../../Images/nine-dots-menu.svg";

export const HeaderContainerStyles = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 0.5rem;
`;

export const HeaderItemsStyles = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: auto;
  padding-left: 0;
`;

export const GmailAndImages = styled.li`
  list-style-type: none;
  margin-right: 1.5rem;
  :hover {
    text-decoration: underline;
  }
`;

export const DotsMenuContainer = styled.div`
  margin-right: 1.5rem;
  border: white solid 1px;
  :hover {
    border: blue solid 1px;
  }
`;

export const DotsMenu = styled(MenuIcon)`
  height: 25px;
  fill: #6e7276;
`;

export const ProfilePicStyles = styled.img`
  list-style-type: none;
  height: 40px;
  width: 40px;
  fill: #6e7276;
  margin-right: 0.93rem;
`;
