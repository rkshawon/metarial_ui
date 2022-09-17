import { Box, Button, Typography } from "@mui/material";
import HomeImage from "../../../assets/homeimage.png";

export default function Welcome() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        margin: "2em 0",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "60%",
          height: "251px",
          boxShadow:
            "0px 0px 2px rgba(145, 158, 171, 0.2), 0px 12px 24px -4px rgba(145, 158, 171, 0.12)",
          borderRadius: "16px",
        }}
      >
        <div>
          <Typography
            variant="h5"
            component="h5"
            sx={{
              fontWeight: "600",
              color: "#212B36",
              marginTop: "1em",
              display: "flex",
            }}
          >
            <Typography
              sx={{
                fontWeight: "600",
                color: "#212B36",
                fontSize: "24px",
                marginRight: ".5em",
              }}
            >
              Welcome Back
            </Typography>
            <Typography
              sx={{ fontWeight: "600", color: "#8D40FF", fontSize: "24px" }}
            >
              Admin
            </Typography>
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: "400", color: "#212B36", fontSize: "16px" }}
          >
            Lets get back to work.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontWeight: "400",
              color: "#212B36",
              fontSize: "12px",
              marginTop: "2em",
            }}
          >
            You can view and manage all of your orders and track them.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontWeight: "400",
              color: "#212B36",
              fontSize: "12px",
              marginBottom: "2em",
            }}
          >
            Lets bring up your business to next level
          </Typography>
          <Button
            variant="deepblue"
            sx={{
              height: "35px",
              width: "auto",
              backgroundColor: "#3366FF",
            }}
          >
            View Orders
          </Button>
        </div>
        <div>
          <img src={HomeImage} alt="" />
        </div>
      </div>
      <Box
        sx={{
          width: "30%",
          height: "247px",
          boxShadow:
            "0px 2px 2px rgba(145, 158, 171, 0.2), 0px 12px 24px -4px rgba(145, 158, 171, 0.12)",
          borderRadius: "18px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <Box>
            <Typography
              sx={{ color: "#707070", fontWeight: "700", fontSize: "16px" }}
            >
              Total Users
            </Typography>
            <Typography
              sx={{ color: "#212B36", fontWeight: "600", fontSize: "42px" }}
            >
              6456
            </Typography>
          </Box>
          <Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  width: "10px",
                  height: "10px",
                  backgroundColor: "#3366FF",
                  borderRadius: "50%",
                }}
              ></Box>
              <Box
                sx={{
                  color: "#3366FF",
                  fontWeight: "600",
                  fontSize: "14px",
                  marginLeft: ".5em",
                }}
              >
                New User
              </Box>
            </Box>
            <Box
              sx={{
                marginLeft: "20px",
                color: "#707070",
                fontSize: "18px",
                fontWeight: "500",
              }}
            >
              59
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  width: "10px",
                  height: "10px",
                  backgroundColor: "#8D40FF",
                  borderRadius: "50%",
                }}
              ></Box>
              <Box
                sx={{
                  color: "#8D40FF",
                  fontWeight: "600",
                  fontSize: "14px",
                  marginLeft: ".5em",
                }}
              >
                Pending
              </Box>
            </Box>
            <Box
              sx={{
                marginLeft: "20px",
                color: "#707070",
                fontSize: "18px",
                fontWeight: "500",
              }}
            >
              14
            </Box>
          </Box>
        </Box>
        <Button
          variant="outlined"
          sx={{
            color: "#8D40FF",
            fontSize: "15px",
            fontWeight: "700",
            width: "165px",
            height: "37px",
            marginTop: "1em",
            border: "1px solid rgba(141, 64, 255, 0.48)",
            "&:hover": {
              border: "1px solid rgba(141, 64, 255, 0.48)",
            },
          }}
        >
          View Clients
        </Button>
      </Box>
    </div>
  );
}
