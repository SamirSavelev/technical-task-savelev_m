import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

export interface ButtonProps
  extends PropsWithChildren,
    ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  disabled?: boolean;
  width?: string;
}

export type ButtonType = (props: ButtonProps) => JSX.Element;
