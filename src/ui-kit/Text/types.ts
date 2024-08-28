import { PropsWithChildren } from 'react';

export interface TextProps
  extends PropsWithChildren,
    React.HTMLAttributes<HTMLElement> {
  size?: 'small' | 'medium' | 'large';
  weight?: 'normal' | 'bold';
  color?: string;
  as?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
}

export type TextType = (props: TextProps) => JSX.Element;
