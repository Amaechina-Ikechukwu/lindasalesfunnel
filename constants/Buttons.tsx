import * as React from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import colors from "./Colors";
import { Box, extendTheme } from "@mui/joy";
import styles from "./styles.module.css";

interface NestedButtonProps {
  text?: string | React.ReactNode;
  color?: string;
  size?: string;
  fwidth?: boolean;
  width?: { [key: string]: string } | string;
  textColor?: string;
  px?: number;
  py?: number;
  radius?: number;
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
}

export default function Buttons(props: NestedButtonProps) {
  const [isClicked, setIsClicked] = React.useState(false);
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    setIsClicked(true);
  };

  React.useEffect(() => {
    const buttonElement = buttonRef.current;

    if (buttonElement && isClicked) {
      const rect = buttonElement.getBoundingClientRect();
      const x = rect.left + window.scrollX;
      const y = rect.top + window.scrollY;

      const shimmer = document.createElement("div");
      shimmer.style.left = `${x}px`;
      shimmer.style.top = `${y}px`;
      shimmer.classList.add(styles.shimmer);

      document.body.appendChild(shimmer);

      setTimeout(() => {
        setIsClicked(false);
        document.body.removeChild(shimmer);
      }, 1000);
    }
  }, [isClicked]);

  return (
    <Button
      // ref={buttonRef}
      component="a"
      onClick={props.onClick}
       href={props.href} // Pass href prop
      target={props.target} // Pass target prop
      fullWidth={props.fwidth || false}
      // size={(props.size as ButtonProps["size"]) || "md"}
      endIcon={props.icon}
      sx={{
        backgroundColor: props.color || `${colors.text}`,
        background: props.linear,
        paddingX: props.px,
        paddingY: props.py,
        color: props.disabled ? colors.backShade : props.textColor || "white",
        "&:hover": {
          backgroundColor: props.color || `${colors.text}`,
          opacity: 1,
        },
        "&:visited": {
          color: props.textColor || `${colors.text}`,
          opacity: 1,
        },
        fontWeight: props.font || undefined,
        fontSize: props.fontSize,
        opacity: 0.9,
        borderRadius: props.radius || undefined,
        width: props.width,
        height: props.height,
        boxShadow: props.shadow,
        textTransform: props.capital || "none",
        ...props.furtherStyles,
      }}
    >
      {props.text}
      {props.children}
    </Button>
  );
}
