import styled from 'styled-components';

export const List = styled.ul`

`;

export const ListItem = styled.li`
  font-size: 3rem;
  text-transform: uppercase;
  list-style-type: none;
  margin: 1rem auto;

  &:before {
    content: "-  ";
  }
`;