import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 32px;

  h1 {
    margin-bottom: 16px;
  }

  a {
    color: #ff9000;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }
  }
`;
