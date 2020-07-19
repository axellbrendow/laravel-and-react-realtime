import styled from "styled-components";

export const Prop = styled.div`
  padding: 10px;
`;

export const PropTitle = styled.span`
  color: #00008b;
`;

export const Container = styled.div`
  &:not(:first-child) {
    border-top: 1px solid black;
  }
`;
