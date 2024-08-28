import React from 'react';
import { TextType } from './types';
import { StyledText } from './styles/StylesText';

export const Text: TextType = ({
  size = 'medium',
  weight = 'normal',
  color = 'black',
  as = 'p',
  children,
  className,
}) => (
  <StyledText
    as={as}
    size={size}
    weight={weight}
    color={color}
    className={className}
  >
    {children}
  </StyledText>
);
