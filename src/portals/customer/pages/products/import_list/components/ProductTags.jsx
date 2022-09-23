import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { customSvg } from "../../../../../../utils/customSvg";
import styles from "../../../../styles/customerStyles.module.css";

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

// const names = ["New Arrival", "Latest", "Brand", "New Collection", "Super"];



export default function ProductTags({ names }) {
  const theme = useTheme();

  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const Placeholder = ({ children }) => {
    return <span style={{ color: "gray", fontSize: "14px" }}>{children}</span>;
  };
  return (
    <div>
      <FormControl fullWidth>
        <Select
          multiple
          displayEmpty
          style={{marginBottom:`${names[0] === "Proof of delivery" ? '10px' : '0px'}`}}
          inputProps={{ "aria-label": "Without label" }}
          value={personName}
          size="small"
          onChange={handleChange}
          renderValue={(selected) => (
            <>
              <Box
                className={styles.hide_scrollbar}
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 0.5,
                  maxHeight: "60px",
                  overflowY: "scroll",
                  
                }}
              >
                {selected
                  ? undefined
                  : () => <Placeholder>Select Tags</Placeholder>}
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            </>
          )}
          
          MenuProps={MenuProps}
          IconComponent={customSvg}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
