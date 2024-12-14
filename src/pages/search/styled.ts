import styled from "styled-components";

export const Container = styled.div<{openMenu : boolean}>`
  width: 100%;
  max-width: 1600px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  padding: ${({openMenu}) => openMenu? '100px 50px 0 330px' : '100px 10px 0 100px'};
  box-sizing: border-box;
  margin-top: -750px;
`;

export const SearchContainer = styled.div`
width: 100%;
`;