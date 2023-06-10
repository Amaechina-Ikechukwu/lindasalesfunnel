import * as React from "react";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
interface NestedModalProps {
  open?: boolean;
  handleClose?: () => void;
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
      onClose={() => props.handleClose}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Sheet
        variant="outlined"
        sx={{
          maxWidth: 500,
          borderRadius: "md",
          p: 3,
          boxShadow: "lg",
        }}
      >
        <ModalClose
          variant="outlined"
          sx={{
            top: "calc(-1/4 * var(--IconButton-size))",
            right: "calc(-1/4 * var(--IconButton-size))",
            boxShadow: "0 2px 12px 0 rgba(0 0 0 / 0.2)",
            borderRadius: "50%",
            bgcolor: "background.body",
          }}
        />
        {props.children}
      </Sheet>
    </Modal>
  );
}
