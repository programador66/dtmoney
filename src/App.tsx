import React from 'react';
import DashBoard from './components/DashBoard';
import Header from './components/Header';
import { GlobalStyle } from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <DashBoard />
      <GlobalStyle />
    </>
  );
}

export default App;
