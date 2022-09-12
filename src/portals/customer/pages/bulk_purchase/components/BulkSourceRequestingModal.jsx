import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import styles from "../../../styles/customerStyles.module.css";
import {
  Checkbox,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import InputField from "../../../../../Authentication/components/InputField";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  textAlign: "center",
  transform: "translate(-50%, -50%)",
  width: "60%",
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 6,
};

export default function BulkSourceRequestingModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <Button variant="deepblue" onClick={handleOpen}>
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
                  sx={{ margin: 0, textAlign: "left", color: "#000" }}
                >
                  Enter the shipping country here
                </InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  sx={{
                    margin: "10px 0",
                    width: "100%",
                    height: "38px",
                  }}
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </Grid>
            </Grid>
            <Grid container spacing={4}>
              <Grid item sm={6}>
                <InputLabel
                  sx={{ margin: 0, textAlign: "left", color: "#000" }}
                >
                  Enter the Bulk amount of product
                </InputLabel>
                <InputField
                  //   label="Login E-mail or Phone"
                  placeholder="enter your desired amount"
                  type="text"
                  size="small"
                />
              </Grid>
              <Grid item sm={6}>
                <InputLabel
                  sx={{ margin: 0, textAlign: "left", color: "#000" }}
                >
                  Enter your varient
                </InputLabel>
                <InputField
                  //   label="Login E-mail or Phone"
                  placeholder="enter your varient"
                  type="text"
                  size="small"
                />
              </Grid>
            </Grid>
            <Grid container spacing={4}>
              <Grid item sm={12}>
                <InputField
                  //   label="Login E-mail or Phone"
                  placeholder="Additional Note"
                  type="text"
                  size="small"
                />
              </Grid>
            </Grid>
            <div
              style={{
                width: "60%",
                margin: "auto",
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <FormControlLabel
                sx={{ width: "100%", margin: 0 }}
                control={<Checkbox defaultChecked />}
                label="Custom Logo"
              />
              <FormControlLabel
                sx={{ width: "100%", margin: 0 }}
                control={<Checkbox defaultChecked />}
                label="Custom Packaging"
              />
            </div>
            <Button
              variant="contained"
              onClick={() => setOpen(false)}
              sx={{
                margin: "0em 0",
                height: "40px",
                padding: "1em 1.5em",
                fontWeight: "600",
                fontSize: "15px",
                boxShadow: "0px 8px 16px rgba(24, 144, 255, 0.24)",
                "&:hover": {
                  boxShadow: "0px 8px 16px rgba(24, 144, 255, 0.24)",
                },
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
