import { createTheme, experimental_sx as sx } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    // primary: {
    //   main: "#556cd6",
    // },
    // secondary: {
    //   main: "#19857b",
    // },
    // mehroon:{
    //   main:"#8d40ff"
    // },
    error: {
      main: red.A400,
    },
  },

  components: {
    // MuiTypography: {
    //   defaultProps: {
    //     variantMapping: {
    //       h1: "h2",
    //       h2: "h2",
    //       h3: "h2",
    //       h4: "h2",
    //       h5: "h2",
    //       h6: "h2",
    //       subtitle1: "h2",
    //       subtitle2: "h2",
    //       body1: "span",
    //       body2: "span",
    //     },
    //   },
    // },
    MuiButton: {
      // styleOverrides: {
      //   root: {
      //     color: "#fff",
      //     textTransform: "capitalize",
      //     // background: "#1890FF",
      //     "&:hover": {
      //       // border:"1px solid #8D40FF",
      //     },
      //   },
      // },
      variants: [
        {
          props: { variant: "gray" },
          style: {
            margin: "2em 0",
            width: "100%",
            height: "40px",
            background: "#9D9D9D",
            color: "#fff",
            padding: "1em 1.5em",
            textTransform: "capitalize",
            fontWeight: "700",
            fontSize: "15px",
            borderRadius: "5px",
            boxShadow: "0px 8px 16px rgba(24, 144, 255, 0.24)",
            "&:hover": {
              background: "#787575",
            },
          },
        },
        {
          props: { variant: "deepbluemini" },
          style: {
            margin: "1em 0",
            width: "auto",
            height: "30px",
            background: "#3366FF",
            color: "#fff",
            padding: ".1em 1em",
            textTransform: "capitalize",
            fontWeight: "700",
            fontSize: "10px",
            borderRadius: "5px",
            boxShadow: "0px 8px 16px rgba(24, 144, 255, 0.24)",
            "&:hover": {
              background: "#1e54f7",
            },
          },
        },
        {
          props: { variant: "deepblue" },
          style: {
            margin: "2em 0",
            width: "100%",
            height: "40px",
            background: "#3366FF",
            color: "#fff",
            padding: "1em 1.5em",
            textTransform: "capitalize",
            fontWeight: "700",
            fontSize: "15px",
            borderRadius: "5px",
            boxShadow: "0px 8px 16px rgba(24, 144, 255, 0.24)",
            "&:hover": {
              background: "#1e54f7",
            },
          },
        },
        {
          props: { variant: "lightblue" },
          style: {
            margin: "2em 0",
            width: "100%",
            height: "40px",
            background: "#1890FF",
            color: "#fff",
            padding: "1em 1.5em",
            textTransform: "capitalize",
            fontWeight: "600",
            fontSize: "15px",
            borderRadius: "8px",
            boxShadow: "0px 8px 16px rgba(24, 144, 255, 0.24)",
            "&:hover": {
              background: "#0084ff",
            },
          },
        },
        {
          props: { variant: "purple" },
          style: {
            margin: "2em 1rem 2em 0",
            background: "#8D40FF",
            height: "40px",
            textTransform: "capitalize",
            color: "#fff",
            borderRadius: "8px",
            width: "100%",
            padding: "1em 1.5em",
            fontWeight: "600",
            fontSize: "15px",
            boxShadow: "0px 8px 16px rgba(141, 64, 255, 0.24)",
            "&:hover": {
              background: "#7a22ff",
            },
          },
        },
        {
          props: { variant: "purple_outlined" },
          style: {
            margin: "2em 0",
            width: "100%",
            height: "40px",
            background: "#fff",
            color: "#8D40FF",
            padding: "1em 1.5em",
            textTransform: "capitalize",
            fontWeight: "600",
            border: "1px solid #8D40FF",
            fontSize: "15px",
            borderRadius: "8px",
            boxShadow: "0px 8px 16px rgba(24, 144, 255, 0.24)",
            "&:hover": {
              background: "#8D40FF",
              color: "#fff",
            },
          },
        },
      ],
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
          wrapper: {
            flexDirection: "row",
          },
          MuiTabIndicator: {
            backgroundColor: "red",
          },
          ".Mui-selected": {
            color: "red",
          },
        },
      },
    },

    //  TextField overrides styles
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "lightgray",
            },
            "&:hover fieldset": {
              borderColor: "lightgray",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#3366FF",
            },
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "#1890FF",
          ".Mui-checked": {
            // color: "#1890FF",
          },
        },
      },
    },
    MuiAutoComplete: {
      defaultProps: { InputLabelProps: { shrink: false } },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          fontSize: "9px",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontWeight: 400,
          fontSize: "14px",
          lineHeight: "26px",
          color: "#000000",
        },
      },
    },

    MuiTypography: {
      styleOverrides: {
        root: {
          fontSize: "14px",
        },
      },
    },

    MuiFormControl: {
      styleOverrides: {
        root: {
          // padding: 0,
        },
      },
    },
    MuiSwitch: {
      switchBase: {
        // Controls default (unchecked) color for the thumb
        color: "#ccc",
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            backgroundColor: "#F3EAFE",
            "&:hover": {
              backgroundColor: "#F3EAFE",
            },
          },
        },
      },
    },
    MuiPagination: {
      styleOverrides: {
        root: {
          "& .Mui-selected": {
            backgroundColor: "#8D40FF",
            color: "#8D40FF",
            fontWeight: 600,
          },
          "& .Mui-selected:hover": {
            backgroundColor: "#8D40FF",
          },
        },
      },
    },
  },
});

export default theme;
