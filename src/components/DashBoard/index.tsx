import React from 'react';
import Summary from '../Summary';
import TransactionsTable from '../TransactionsTable';

import { Container } from './styles';

const DashBoard: React.FC = () => {
  return (
      <Container>
          <Summary />
          <TransactionsTable />
      </Container>
  );
}

export default DashBoard;