import * as React from "react";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import Sheet from "@mui/joy/Sheet";
import { Stack, IconButton } from "@mui/joy";
import colors from "./Colors";

interface NestedModalProps {
  open?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
}
export default function BasicModal(props: NestedModalProps) {
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <Modal
      component="div"
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      open={props.open || false}
      onClose={() => props.onClose()}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: 0,
      }}
    >
      <>
        <Sheet
          variant="outlined"
          sx={{
            width: { xs: "95%", md: "60%" },
            borderRadius: "md",
            p: 1,
            boxShadow: "lg",
          }}
        >
          <Stack spacing={3}>
            <Stack sx={{ display: "flex", alignItems: "flex-end" }}>
              <IconButton
                sx={{ backgroundColor: "inherit" ,'&:hover': { backgroundColor: colors.greenBackShade }}}
                onClick={() => props.onClose()}
              >
                <CloseOutlinedIcon sx={{ color: colors.text }} />
              </IconButton>
            </Stack>
            <Stack sx={{ padding: 3,maxHeight:'70vh',overflowY:'auto' }}>{props.children}</Stack>
          </Stack>
        </Sheet>
      </>
    </Modal>
  );
}
