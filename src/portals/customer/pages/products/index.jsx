import React from "react";
import styles from "../../styles/customerStyles.module.css";
import {
  Button,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Pagination,
  PaginationItem,
  Select,
  TextField,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Search } from "@mui/icons-material";
import { product_cards } from "../../../../dummyData";
import AppLayout from "../../../../layout/DashboardLayout";
import SourcingRequestModal from "./components/SourcingRequestModal";
import ProductDetailsModal from "./components/ProductDetailsModal";
import MapProductModal from "./components/MapProductModal";
import { Link } from "react-router-dom";
import { Stack } from "@mui/system";
import { customSvg } from "../../../../utils/customSvg";
import "./style.product.css";

export default function Products() {
  const [color, setColor] = React.useState(0);

  const handleChange = (event) => {
    setColor(event.target.value);
  };
  return (
    <AppLayout>
      <div className={styles.bulk_purchase}>
        <div className={styles.bulk_topbar}>
          <div>
            <h4>Products</h4>
            <h6>Manage your products here</h6>
          </div>
          <div>
            <SourcingRequestModal />
          </div>
        </div>
        <div className={styles.search_field}>
          <TextField
            size="small"
            sx={{ width: "100%" }}
            placeholder="Search products"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
          <div className={styles.muiSelectOption}>
            <FormControl fullWidth>
              <InputLabel id="sort-by" sx={{ color: "gray" }}>
                Sort By
              </InputLabel>
              <Select
                labelId="sort-by"
                id="demo-select-small"
                sx={{
                  width: "100%",
                  color: "gray",
                  fontSize: "14px",
                }}
                size="small"
                value={color}
                label="Sort By"
                onChange={handleChange}
                // sx={{ "& .MuiSelect-icon": { top: 10 } }}
                IconComponent={customSvg}
              >
                <MenuItem value={0}>Price low - high</MenuItem>
                <MenuItem value={30}>Price high - low</MenuItem>
                <MenuItem value={10}>Product name A - Z</MenuItem>
                <MenuItem value={40}>Product name Z - A</MenuItem>
                <MenuItem value={50}>Creation date new - old</MenuItem>
                <MenuItem value={20}>Creation date old - new</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>

        <Grid container spacing={4} sx={{ marginTop: "10px" }}>
          {product_cards.map((product) => (
            <Grid key={product.id} item lg={3} md={4} sm={4} xs={12}>
              <div className="product_card">
                <Link to={`${product.id}`}>
                  <img
                    src={product.img}
                    alt="product"
                    style={{ width: "100%", height: "100%" }}
                  />
                  <div
                    style={{
                      padding: "20px 30px",
                      width: "100%",
                      position: "relative",
                    }}
                  >
                    <h5
                      style={{
                        fontSize: "14px",
                        color: "#212B36",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {product.title}
                    </h5>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
                        height: "50px",
                        position: "relative",
                      }}
                    >
                      <div className="impBtn">
                        <Button
                          variant="deepbluemini"
                          // sx={{
                          //   position: "absolute",
                          //   bottom: "-100%",
                          //   opacity: 0,
                          // }}
                        >
                          Import
                        </Button>
                      </div>

                      <div style={{ position: "absolute", right: "0px" }}>
                        <small
                          style={{
                            fontSize: "16px",
                            color: "919EAB",
                            textDecorationLine: "line-through",
                            fontWeight: "700px",
                            lineHeight: 1.5,
                            marginTop: "10px",
                            marginRight: "5px",
                          }}
                        >
                          {product.cut_price}
                        </small>
                        <small
                          style={{
                            fontSize: "16px",
                            color: "#212B36",
                            fontWeight: "600px",
                            lineHeight: 1.5,
                            marginTop: "10px",
                          }}
                        >
                          {product.price}
                        </small>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </Grid>
          ))}
        </Grid>

        <div
          style={{
            position: "absolute",
            background: "#fff",
            bottom: 10,
            left: "45%",
            padding: "5px 0",
            borderRadius: "8px",
          }}
        >
          <Stack spacing={2}>
            <Pagination
              count={10}
              sx={{
                "&.MuiPaginationItem-root": {
                  color: "blue",
                },
              }}
              renderItem={(item) => (
                <PaginationItem
                  components={{
                    previous: ArrowBackIcon,
                    next: ArrowForwardIcon,
                  }}
                  {...item}
                />
              )}
            />
          </Stack>
        </div>
      </div>
    </AppLayout>
  );
}
