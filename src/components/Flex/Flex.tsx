import React from 'react';
import { FlexType } from './types';
import { StyledFlex } from './styles/StyledFlex';

export const Flex: FlexType = ({
  direction,
  justify,
  align,
  wrap,
  gap,
  children,
  className,
  width,
  height,
}) => {
  return (
    <StyledFlex
      direction={direction}
      justify={justify}
      align={align}
      wrap={wrap}
      gap={gap}
      className={className}
      width={width}
      height={height}
    >
      {children}
    </StyledFlex>
  );
};
