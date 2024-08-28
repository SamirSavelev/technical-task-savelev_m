import styled from '@emotion/styled';

export const CommentListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  flex: 1;
  max-width: 600px;
  padding-top: 80px;
  padding-bottom: 24px;

  @media (max-width: 648px) {
    padding: 80px 24px 24px;
  }
`;
