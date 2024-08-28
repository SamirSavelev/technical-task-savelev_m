import useMockAdapter from 'api/useMockAdapter';
import CommentList from 'components/CommentList/CommentList';
import bgImg from 'assets/images/background.webp';
import { AppContainer } from './styles/AppContainer';
import { FC } from 'react';

export const App: FC = () => {
  useMockAdapter();

  return (
    <AppContainer bgImg={bgImg}>
      <CommentList />
    </AppContainer>
  );
};
