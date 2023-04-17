import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import useStore from "../store/store";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const currentItem = useStore((state) => state.currentItem);
  const setCurrentItem = useStore((state) => state.setCurrentItem);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setCurrentItem(null);

  return (
    <div>
      <Modal
        open={currentItem !== null}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img src={currentItem?.image} width={"200px"}></img>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {currentItem?.title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {currentItem?.description}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
