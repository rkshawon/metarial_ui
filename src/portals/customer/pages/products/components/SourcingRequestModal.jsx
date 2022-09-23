import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import styles from "../../../styles/customerStyles.module.css";
import { Grid, InputLabel, MenuItem, Select } from "@mui/material";
import InputField from "../../../../../Authentication/components/InputField";
import { countries } from "./dummyCountry";
import {
  FormControl,
  Checkbox,
  ListItemText,
  OutlinedInput,
} from "@mui/material";
import UploadImage from "./UploadImage";
import CustomMultipleSelect from "./CustomMultipleSelect";
import { customSvg } from "../../../../../utils/customSvg";
import CustomizedHook from "./CustomizedHook";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  textAlign: "center",
  transform: "translate(-50%, -50%)",
  width: "50%",
  height: "600px",
  overflowY: "scroll",
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
};

export default function SourcingRequestModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [color, setColor] = React.useState(0);

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [state, setState] = React.useState({
    one: false,
    two: true,
  });

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const [personName, setPersonName] = React.useState([]);

  const handleChanged = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <Button
        sx={{ borderRadius: "5px" }}
        variant="deepblue"
        onClick={handleOpen}
      >
        New Sourcing Request
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <h3 className={styles.source_title}>
              Source products from AliExpress
            </h3>
            <div className={styles.paragraph}>
              <p>
                It's easy to source a product from{" "}
                <span style={{ color: "#3366FF" }}>AliExpress</span>, simply
                fill in an
                <span style={{ color: "#3366FF" }}> AliExpress link</span>. We
                use this link NOT to directly contact this supplier but we look
                for the factory with the best value for money. After that we
                will be shipping the products for you!
              </p>
            </div>

            {/* Source request form  */}
            <Grid container spacing={4}>
              <Grid item sm={6}>
                <InputLabel
                  sx={{ margin: 0, textAlign: "left", color: "#000" }}
                >
                  Enter your AliExpress link here
                </InputLabel>
                <InputField
                  //   label="Login E-mail or Phone"
                  placeholder="paste your link"
                  type="text"
                  size="small"
                />
              </Grid>
              <Grid item sm={6}>
                <InputLabel
                  sx={{
                    margin: "0 0 10px 0",
                    textAlign: "left",
                    color: "#000",
                  }}
                >
                  Select shipping countries here
                </InputLabel>
                <CustomizedHook />
                {/* <CustomMultipleSelect /> */}
              </Grid>
            </Grid>
            <Grid container spacing={4}>
              <Grid item sm={6}>
                <InputLabel
                  sx={{ margin: 0, textAlign: "left", color: "#000" }}
                >
                  Enter your target price
                </InputLabel>
                <InputField
                  //   label="Login E-mail or Phone"
                  placeholder="Target Price"
                  type="text"
                  size="small"
                />
              </Grid>
              <Grid item sm={6}>
                <InputLabel
                  sx={{ margin: 0, textAlign: "left", color: "#000" }}
                >
                  Enter your variants
                </InputLabel>
                <InputField
                  //   label="Login E-mail or Phone"
                  placeholder="enter your variants"
                  type="text"
                  sx={{ height: "38px" }}
                />
              </Grid>
            </Grid>
            <Grid container spacing={4}>
              <Grid item sm={6}>
                <InputLabel
                  sx={{ margin: 0, textAlign: "left", color: "#000" }}
                >
                  Add Additional Note
                </InputLabel>
                <InputField
                  //   label="Login E-mail or Phone"
                  placeholder="Additional Note"
                  type="text"
                  size="small"
                />
              </Grid>
              <Grid item sm={6}>
                <InputLabel
                  sx={{ margin: 0, textAlign: "left", color: "#000" }}
                >
                  Upload product photo
                </InputLabel>
                <UploadImage />
              </Grid>
            </Grid>
            <Button
              variant="lightblue"
              onClick={() => setOpen(false)}
              sx={{
                width: "auto",
              }}
            >
              Submit Request
            </Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
