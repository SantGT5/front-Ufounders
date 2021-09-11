import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
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
      <Button disableRipple style={{ backgroundColor: 'transparent' }} onClick={handleClickOpen}>
        <MoreHorizIcon style={{ color: "black", fontSize: "2.5em" }} />
      </Button>

      <Dialog
        PaperProps={{
          style: {
            borderRadius: "15px",
            maxWidth: "100%",
            minWidth:"40em",
            width: "45em",
            display: "flex",
            justifyContent: "center",
            
          },
        }}
        open={open}
        onClose={handleClose}
      >
        <div className="headInfo">
          <div style={{ display: "flex", alignItems: "center" }}>
            <div>
              <i
                style={{
                  color: props.present === true ? "#7FBA7A" : "#E93256",
                  fontSize: "2.3em",
                  marginRight: "0.7em",
                }}
                className="fas fa-ticket-alt fa-rotate-90"
              ></i>
            </div>
            <div>
              <p style={{ margin: "0px" }} className="userNameInfo">
                {props.firstName} {props.lastName}
              </p>
              <p style={{ paddingBottom: "4px" }} className="moreInfoSubTitle">
                {props.present === true ? "Ha entrado" : "No ha entrado"}
              </p>
            </div>
          </div>
          <div>
            <Button disableRipple style={{ backgroundColor: 'transparent' }} onClick={handleClose}>
              <HighlightOffIcon style={{ fontSize: "2.2em", backgroundColor: 'transparent' }} className="closeBTN"
              />
            </Button>
          </div>
        </div>

        <div className="grid-container">
          <div>
            <span className="titleInfo">ID</span>
            <p className="moreInfoSubTitle">{props._id}</p>
          </div>
          <div>
            <span className="titleInfo">N° de ticket</span>
            <p className="moreInfoSubTitle">{props._id}</p>
          </div>
        </div>

        <div className="grid-container">
          <div>
            <span className="titleInfo">Fecha de nacimiento</span>
            <p className="moreInfoSubTitle">{props.birthdate}</p>
          </div>
          <div>
            <span className="titleInfo">Email</span>
            <p className="moreInfoSubTitle">{props.email}</p>
          </div>
          <div>
            <span className="titleInfo">Teléfono</span>
            <p className="moreInfoSubTitle">{props.phone}</p>
          </div>
        </div>

        <div>
          <div style={{ padding: "1.5em" }}>
            <span className="titleInfo">Dirección</span>
            <p className="moreInfoSubTitle">{props.address}</p>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
