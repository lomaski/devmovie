import styled from "styled-components";

export const Container = styled.div`
  background: ${props => props.$changeBackground ? 'black' : 'black'};
`;
