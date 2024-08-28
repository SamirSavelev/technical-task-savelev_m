import styled from '@emotion/styled';
import { TextProps } from '../types';

export const StyledText = styled.p<TextProps>`
  margin: 0;
  padding: 0;
  color: ${({ color }) => color || 'black'};
  font-size: ${({ size }) => {
    switch (size) {
      case 'small':
        return '12px';
      case 'large':
        return '20px';
      case 'medium':
      default:
        return '16px';
    }
  }};
  font-weight: ${({ weight }) => (weight === 'bold' ? 'bold' : 'normal')};
`;
