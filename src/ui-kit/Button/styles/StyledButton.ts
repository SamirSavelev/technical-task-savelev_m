import styled from '@emotion/styled';

import { ButtonProps } from '../types';

export const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({ size }) => {
    switch (size) {
      case 'small':
        return '6px 12px';
      case 'large':
        return '12px 24px';
      case 'medium':
      default:
        return '8px 16px';
    }
  }};
  font-size: ${({ size }) => {
    switch (size) {
      case 'small':
        return '12px';
      case 'large':
        return '18px';
      case 'medium':
      default:
        return '14px';
    }
  }};
  font-weight: 600;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  width: ${({ fullWidth, width }) =>
    width ? width : fullWidth ? '100%' : 'auto'};
  background-color: ${({ variant }) => {
    switch (variant) {
      case 'secondary':
        return 'rgb(50, 52, 57)';
      case 'tertiary':
        return '#ffffff';
      case 'primary':
      default:
        return '#1976d2';
    }
  }};
  color: ${({ variant }) => {
    switch (variant) {
      case 'secondary':
        return '#ffffff';
      case 'tertiary':
        return '#1976d2';
      case 'primary':
      default:
        return '#ffffff';
    }
  }};
  border: ${({ variant }) =>
    variant === 'tertiary' ? '1px solid #1976d2' : 'none'};
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${({ variant }) => {
      switch (variant) {
        case 'secondary':
          return '#d5d5d5';
        case 'tertiary':
          return '#f0f0f0';
        case 'primary':
        default:
          return '#1565c0';
      }
    }};
  }

  &:disabled {
    background-color: #bdbdbd;
    color: #9e9e9e;
    cursor: not-allowed;
  }
`;
