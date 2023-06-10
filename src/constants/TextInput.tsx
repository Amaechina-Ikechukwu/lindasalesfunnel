import * as React from "react";
import Input from "@mui/joy/Input";
import { IconButton } from "@mui/material";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material";
import colors from "./Colors";

type NestedTextProps = {
  text?: string;
  color?: string;
  size?: string | undefined;
  fwidth?: boolean;
  width?: string;
  textColor?: string;
  px?: number;
  py?: number;
  radius?: number;
  height?: string;
  fontSize?: number;
  icon?: React.ReactNode;
  placeholder?: string;
  label?: string;
  name?: string;
  type?: string;
  isPassword?: boolean;
  onChange?: React.ReactNode;
  error?: boolean;
  disabled?: boolean;
};
export default function TextInput(props: NestedTextProps): any {
  const [isPassword, setIsPassword] = React.useState(props.isPassword);
  const [values, setValues] = React.useState({
    showPassword: props.isPassword,
  });

  const handleClickShowPassword = () => {
    setValues({
      showPassword: !values.showPassword,
    });
  };

  return (
    <Input
      sx={{
        height: 40,
        width: props.width || "100%",
        "&.Mui-focused ": {
          fieldset: {
            borderColor: colors.linda,
          },
        },
      }}
      type={values.showPassword ? "password" : props.type || "text"}
      placeholder={props.placeholder || "Type in here…"}
      error={props.error}
      variant={"soft"}
      size={"md"}
      disabled={props.disabled}
      endDecorator={
        props.isPassword ? (
          <IconButton onClick={() => handleClickShowPassword()}>
            {values.showPassword ? (
              <VisibilityOffOutlined
                sx={{ fontSize: 20, color: colors.text }}
              />
            ) : (
              <VisibilityOutlined sx={{ fontSize: 20, color: colors.text }} />
            )}
          </IconButton>
        ) : (
          props.icon
        )
      }
    />
  );
}
