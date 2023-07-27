import React, { ReactNode } from 'react';

interface Props {
  element: any;
  text: ReactNode | string;
  color?: string;
  size?: number | string;
  spacing?: string;
  family?: string;
  shadow?: string;
  align?: string;
  weight?: string;
  capital?: string;
}

export default function Text(props: Props) {
  return (
    <props.element className={`${props.color} text-${props.size} text-${props.align} font-poppins ${props.capital} ${props.weight} leading-${props.spacing}`}>
      {props.text}
    </props.element>
  );
}
