import React, { useEffect, useRef, useState } from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import colors from "./Colors";

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
  capital?: string; // Changed type to string
  shadow?: string;
  font?: string;
  children?: React.ReactNode;
  href?: string;
  target?: string;
  disabled?: boolean;
  furtherStyles?: any;
  onClick?: () => void;
  type?: string;
}

export default function Buttons(props: NestedButtonProps) {


  if(props.href){
    return(
       <Button disabled={props.disabled}
      onClick={props.onClick}
      href={props.href}
      target={props.target}
      fullWidth={props.fwidth || false}
      endIcon={props.icon}
      sx={{
        background: props.linear && props.linear,
        backgroundColor: props.color,
        paddingX: props.px,
        paddingY: props.py,
        color: props.disabled ? colors.backShade : props.textColor || "white",
        "&:hover": {
          backgroundColor: props.color || colors.text,
          opacity: 1,
          color:props.disabled ? colors.backShade : props.textColor || "white",
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
      )
  }

  return (
    <Button
    disabled={props.disabled||false}
      onClick={props.onClick}
     
      fullWidth={props.fwidth || false}
    
      sx={{
        background: props.linear && props.linear,
        backgroundColor: props.color||colors.black,
        paddingX: props.px,
        paddingY: props.py,
        color: props.disabled ? colors.backShade : props.textColor || "white",
        "&:hover": {
          backgroundColor: props.color || `${colors.text}`,
          opacity: 1,
          color:props.disabled ? colors.backShade : props.textColor || "white",
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
        endIcon={props.icon}
    >
      {props.text}
      {props.children}
    </Button>
  );
}
