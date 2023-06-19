import * as React from "react";
import Typography from "@mui/joy/Typography";
import colors from "./Colors";

type NestedTextProps = {
  text: string;
  level?: any;
  color?: string;
  size?: number | any;
  children?: React.ReactNode;
  spacing?: number;
  family?: string;
  shadow?: boolean;
  align?: string | any;
  weight?: string;
  capital?: any;
};

export default function Text(props: NestedTextProps) {
  return (
    <Typography
      level={props.level}
      sx={{
        color: props.color || colors.text,
        fontSize: props.size || 12,
        lineHeight: props.spacing || 2,
        fontFamily: props.family || "Poppins",
        letterSpacing: 1,
        fontWeight: props.weight || "regular",
        textAlign: props.align || "left",
        textShadow: props.shadow ? "0px 0px 70px 0px rgba(20,19,20,1)" : "",
        textTransform: props.capital || undefined,
      }}
    >
      {props.text}
      {props.children}
    </Typography>
  );
}
