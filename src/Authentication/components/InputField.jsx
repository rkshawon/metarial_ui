import Visibility from "@mui/icons-material/Visibility";
import { useState } from "react";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";

export default function InputField({
  label,
  placeholder,
  type,
  shrink,
  size,
  startAdornment,
  width,
  value,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmedPassword, setShowConfirmedPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmedPassword(!showConfirmedPassword);

  if (type === "password") {
    return (
      <div>
        <TextField
          sx={{
            margin: "10px 0",
            width: "100%",
          }}
          size={size}
          label={label}
          color="primary"
          placeholder={placeholder}
          type={showConfirmedPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowConfirmPassword}
                >
                  {showConfirmedPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
            style: { fontSize: 12, height: "46px" },
          }}
          InputLabelProps={{ style: { fontSize: 12 } }}
        />
      </div>
    );
  } else if (type === "ConfirmPassword") {
    return (
      <div>
        <TextField
          sx={{
            margin: "10px 0",
            width: "100%",
          }}
          label={label}
          color="primary"
          placeholder={placeholder}
          type={showConfirmedPassword ? "text" : "password"}
          size={size}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                >
                  {showConfirmedPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
            style: { fontSize: 12, height: "46px" },
          }}
          InputLabelProps={{ style: { fontSize: 12 } }}
        />
      </div>
    );
  } else {
    return (
      <div>
        <TextField
          sx={{
            margin: "10px 0",
            width: width ? width : "100%",
          }}
          label={label}
          type={type}
          color="primary"
          // value={value}
          defaultValue={value}
          size={size}
          placeholder={placeholder}
          InputProps={{
            style: { fontSize: 12, height: "46px" },
          }}
          InputLabelProps={{ style: { fontSize: 12 } }}
        />
      </div>
    );
  }
}
