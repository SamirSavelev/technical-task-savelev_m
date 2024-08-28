import styled from '@emotion/styled';

interface AppContainerProps {
  bgImg: string;
}

export const AppContainer = styled.div<AppContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  width: 100vw;
  background-image: url(${({ bgImg }) => bgImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
