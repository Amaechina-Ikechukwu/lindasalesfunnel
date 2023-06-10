import * as React from "react";
import Button, { ButtonProps } from "@mui/joy/Button";
import colors from "./Colors";

type NestedButtonProps = {
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
  linear: "string";
  capital: "string";
  shadow: string;
};

export default function Buttons(props: NestedButtonProps) {
  const [isClicked, setIsClicked] = React.useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <Button
      sx={{
        backgroundColor: props.color || undefined,
        background: props.linear || undefined,
        borderRadius: props.radius || 5,
        px: props.px !== undefined ? props.px : 2,
        py: props.py !== undefined ? props.py : 2,
        width: props.width || "fit-content",
        height: props.height || "fit-content",
        fontSize: props.fontSize || 12,
        opacity: 0.8,
        color: props.textColor || colors.black,
        textTransform: props.capital || undefined,
        boxShadow: props.shadow || undefined,
        "&:hover": {
          backgroundColor: props.color || undefined,
          opacity: 1,
        },
        "&:active": {
          // backgroundColor: darkenColor(props.color, 0.1),
        },
      }}
      onClick={handleClick}
      fullWidth={props.fwidth || false}
      size={(props.size as ButtonProps["size"]) || "md"}
      endDecorator={props.icon}
    >
      {props.text}
    </Button>
  );
}
