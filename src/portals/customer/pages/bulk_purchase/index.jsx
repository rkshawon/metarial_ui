import React from "react";
import styles from "../../styles/customerStyles.module.css";
import {
  Button,
  Chip,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  TextField,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import { product_cards } from "../../../../dummyData";
import AppLayout from "../../../../layout/DashboardLayout";
import BulkSourceRequestingModal from "./components/BulkSourceRequestingModal";
import BulkProductDetailsModal from "./components/BulkProductDetailsModal";
import ProductPurchaseModal from "./components/ProductPurchaseModal";
import { customSvg } from "../../../../utils/customSvg";
import "./style.bulk.css";

export default function BulkPurchase() {
  const [age, setAge] = React.useState(10);

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <AppLayout>
      <div className={styles.bulk_purchase}>
        <div className={styles.bulk_topbar}>
          <div>
            <h4>Bulk Puchase</h4>
            <h6>Find products to purchase in bulk amount</h6>
          </div>
          <div>
            <BulkSourceRequestingModal />
          </div>
        </div>
        <div className={styles.search_field} style={{ marginBottom: "30px" }}>
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
                value={age}
                label="Sort By"
                onChange={handleChange}
                // sx={{ "& .MuiSelect-icon": { top: 10 } }}
                IconComponent={customSvg}
              >
                <MenuItem value={10}>Price High - Low</MenuItem>
                <MenuItem value={20}>Price Low - High</MenuItem>
                <MenuItem value={30}>Sort by date</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>

        <Grid container spacing={4} sx={{ marginTop: "10px" }}>
          {product_cards.map((product) => (
            <Grid key={product.id} item lg={3} md={4} sm={4} xs={12}>
              <div className="product_card">
                <BulkProductDetailsModal product={product} />
                <div className={styles.content}>
                  <div>
                    <ProductPurchaseModal product={product} />
                    <small>{product.sub_title}</small>
                  </div>
                  <Chip
                    label={product.status}
                    color="primary"
                    variant="outlined"
                  />
                </div>
              </div>
            </Grid>
          ))}
        </Grid>

        <div className={styles.bulk_product_pagination}>
          <Pagination count={10} variant="outlined" color="secondary" />
        </div>
      </div>
    </AppLayout>
  );
}
