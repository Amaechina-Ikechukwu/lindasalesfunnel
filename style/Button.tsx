import React from 'react';

interface NestedButtonProps {
  text?: string | React.ReactNode;
  color?: string;
  size?: string;
  fwidth?: boolean;
  width?: { [key: string]: string } | string;
  textColor?: string;
  px?: string;
  py?: string;
  radius?: string;
  height?: string;
  fontSize?: number;
  icon?: React.ReactNode;
  linear?: string;
  capital?: any;
  shadow?: string;
  font?: string; 
  children?: React.ReactNode;
  href?: string;
  target?: string;
  disabled?: boolean;
  furtherStyles?: any;
  onClick?: () => void;
  shadowBool: boolean;
  hoverShadow: boolean;type?:string
}

export default function Button(props: NestedButtonProps) {
  const {
    text,
    color,
    size,
    fwidth,
    width,
    textColor,
    px,
    py,
    radius,
    height,
    fontSize,
    icon,
    linear,
    capital,
    shadow,
    font,
    children,
    href,
    target,
    disabled,
    furtherStyles,
    onClick,
    shadowBool,
    hoverShadow
  } = props;

  const buttonProps: React.ButtonHTMLAttributes<HTMLButtonElement> = {
    className: `${disabled ? '' : `${color} ${fwidth && "w-full"} ${textColor} ${radius} ${shadow} capital ${px} ${py} ${shadowBool && 'drop-shadow-xl'} ${hoverShadow && 'hover:drop-shadow-xl'} hover:scale-105 active:scale-95 scale-100 hover:transition ease-in-out delay-50`}`,
    onClick: onClick,
    disabled: disabled
  };

  if (href) {
    return (
      <a href={href} target={target}>
        <button {...buttonProps}>
          <div className='flex'>{text || children}
            <div>
              <div className='ml-4 justify-self-end'>{icon}</div>
            </div>
          </div>
        </button>
      </a>
    );
  }

  return (
    <button  {...buttonProps}>
      <div  className={icon ? 'flex' : ''}>{text || children}
       {
       	icon && <div>
          <div className='ml-4 justify-self-end'>{icon}</div>
        </div>
       } 
      </div>
    </button>
  );
}
