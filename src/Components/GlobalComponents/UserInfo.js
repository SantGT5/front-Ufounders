import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

export default function ResponsiveDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClickOpen}>
        <MoreHorizIcon style={{ color: "black", fontSize: "2.5em" }} />
      </Button>

      <Dialog
        PaperProps={{
          style: { borderRadius: "15px", maxWidth: "100%", width: "42em" },
        }}
        open={open}
        onClose={handleClose}
      >
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "1.5em",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <div>
                <i
                  style={{
                    color: props.present === true ? "#7FBA7A" : "#E93256",
                    fontSize: "2.3em",
                  }}
                  className="fas fa-ticket-alt fa-rotate-90"
                ></i>
              </div>
              <DialogTitle>
                {props.firstName} {props.lastName}
                <p style={{ color: "gray", fontSize: "15px", margin: "0" }}>
                  {props.present === true ? "Ha entrado" : "No ha entrado"}
                </p>
              </DialogTitle>
            </div>
            <div>
              <Button onClick={handleClose}>
                <HighlightOffIcon style={{ color: "black", fontSize: "2em" }} />
              </Button>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              padding: "1.5em",
            }}
          >
            <div>
              <span>ID</span>
              <p style={{ color: "gray", marginRight: "2.5em" }}>{props._id}</p>
            </div>
            <div>
              <span>N° de ticket</span>
              <p style={{ color: "gray" }}>{props._id}</p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "1.5em",
            }}
          >
            <div>
              <span>Fecha de nacimiento</span>
              <p style={{ color: "gray", marginRight: "2.5em" }}>
                {props.birthdate}
              </p>
            </div>
            <div>
              <span>Email</span>
              <p style={{ color: "gray" }}>{props.email}</p>
            </div>
            <div>
              <span>Teléfono</span>
              <p style={{ color: "gray" }}>{props.phone}</p>
            </div>
          </div>
          <div>
            <div style={{ padding: "1.5em" }}>
              <span>Dirección</span>
              <p style={{ color: "gray" }}>{props.address}</p>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
