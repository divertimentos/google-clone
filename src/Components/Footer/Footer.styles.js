import styled from "styled-components";

export const FooterContainer = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  // width: 97.7%;
  width: 100%;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  border: solid orange 20px;
`;

export const FirstRow = styled.div`
  padding: 15px;
  border-bottom: #e0e1e4 solid 1px;
`;

export const LastRow = styled.div`
  padding: 15px;
  display: flex;
  justify-content: space-between;
`;

export const RowItemContainer = styled.div`
`;

export const RowItem = styled.a`
  margin: 1rem;
  font-size: 14px;
  color: #70757a;
`;
