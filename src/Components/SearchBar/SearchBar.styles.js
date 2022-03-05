import styled from "styled-components";

export const SearchBarContainerStyle = styled.div`
  display: flex;
  justify-content: center;
  margin: 2.5rem 0 0 0;
  align-items: center;
`;

export const SearchBarIconStyle = styled.img`
  height: 1.5rem;
  width: 1.5rem;
  margin: 0 0.5rem;
  fill: orange;
  color: red;
`;

export const SearchInputStyle = styled.div`
  border: lightgray solid 1px;
  border-radius: 24px;
  background: #fff;
  width: 44rem;
  height: 3.5rem;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem 0;
  align-items: center;
`;

export const InnerSearchInputStyles = styled.input`
  border: none;
  width: 39rem;
  height: 3rem;
  :focus {
    outline: none;
  }
`;
