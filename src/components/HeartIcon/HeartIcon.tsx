import React from 'react';
import styled from '@emotion/styled';

interface HeartIconProps {
  filled?: boolean;
  strokeColor?: string;
  fillColor?: string;
  onClick?: () => void;
  clickable?: boolean;
}

const HeartSVG = styled.svg<HeartIconProps>`
  user-select: none;
  width: 20px;
  height: 19px;
  cursor: ${({ cursor }) => cursor};
  transition:
    stroke 0.3s ease-in-out,
    fill 0.3s ease-in-out;

  path {
    fill: ${({ filled, fillColor }) => (filled ? fillColor : 'none')};
    stroke: ${({ strokeColor }) => strokeColor};
    transition: inherit;
  }
`;

const HeartIcon: React.FC<HeartIconProps> = ({
  filled = false,
  strokeColor = '#D44F4F',
  fillColor = '#D44F4F',
  onClick,
  clickable,
}) => {
  return (
    <HeartSVG
      viewBox="0 0 20 19"
      filled={filled}
      strokeColor={strokeColor}
      fillColor={fillColor}
      onClick={onClick}
      cursor={clickable ? 'pointer' : 'default'}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.88157 13.1717C3.06987 11.2604 1.62123 9.98555 1.15374 7.96945C0.806083 6.47017 0.909338 3.7293 2.95027 2.45277C7.45061 -0.362356 9.97229 3.95738 9.97229 3.95738H10.0277C10.0277 3.95738 12.5494 -0.362356 17.0497 2.45277C19.0907 3.7293 19.1939 6.47017 18.8463 7.96945C18.3788 9.98555 16.9301 11.2604 15.1184 13.1717C10 18 10.0028 18.0049 10 18C10 18 10 18 4.88157 13.1717Z"
      />
    </HeartSVG>
  );
};

export default HeartIcon;
