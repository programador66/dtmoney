import React from 'react';
import Summary from '../Summary';

import { Container } from './styles';

const DashBoard: React.FC = () => {
  return (
      <Container>
          <Summary />
      </Container>
  );
}

export default DashBoard;