import React from 'react';
import { ButtonType } from './types';
import { StyledButton } from './styles/StyledButton';

export const Button: ButtonType = ({
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  disabled = false,
  children,
  ...props
}) => (
  <StyledButton
    variant={variant}
    size={size}
    fullWidth={fullWidth}
    disabled={disabled}
    {...props}
  >
    {children}
  </StyledButton>
);
