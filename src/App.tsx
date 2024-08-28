import React from 'react';
import styled from '@emotion/styled';

import useMockAdapter from './api/useMockAdapter';
import CommentList from './components/CommentList/CommentList';

const AppContainer = styled.div`
  padding: 20px;
`;

const App: React.FC = () => {
  useMockAdapter();

  return (
    <AppContainer>
      <h1>Comments</h1>
      <CommentList />
    </AppContainer>
  );
};

export default App;
