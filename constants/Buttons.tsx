import * as React from "react";
import Button, { ButtonProps } from "@mui/joy/Button";
import colors from "./Colors";
import { Box, extendTheme } from "@mui/joy";

interface NestedButtonProps {
  text?: string | React.ReactNode;
  color?: string;
  size?: string;
  fwidth?: boolean;
  width?: string;
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
}

export default function Buttons(props: NestedButtonProps) {
  const [isClicked, setIsClicked] = React.useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <Button
      href={props.href}
      target={props.target}
      onClick={handleClick}
      fullWidth={props.fwidth || false}
      size={(props.size as ButtonProps["size"]) || "md"}
      endDecorator={props.icon}
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
        // border: props.border,
        // borderColor: props.borderColor,
        boxShadow: props.shadow,
        // textAlign: props.align,
        textTransform: props.capital || "none",
        // textDecoration: props.decor,
      }}
    >
      {props.text}
    </Button>
  );
}
