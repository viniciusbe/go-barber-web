import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

const NotFound: React.FC = () => {
  return (
    <Container>
      <h1>Essa página não existe :(</h1>
      <Link to="/">Voltar para o início</Link>
    </Container>
  );
};
export default NotFound;
