import { Grid } from "@mui/material";
import ProductCard from "./ProductCard.js";
import { useContext } from "react";
import { ProductContext } from "../AppContext.js";
import './AllProducts.css'

export default function AllProducts() {
  const { productList } = useContext(ProductContext);
  // let activeNames = [];
  // for (let item of activeProducts) {
  //   activeNames.push(Object.values(item)[0]);
  // }

  return (
    <Grid container spacing={4} className = 'grid'>
      {/* {activeProducts.map((product, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} >
          <ProductCard
            product={product}
            producticon={product.icon_url}
            producticonalt={productList.icon_alt}
            key={index}
          />
        </Grid>
      ))} */}
      {productList.map((product, index) =>
        (
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <ProductCard
              product={product}
              producticon={product.icon_url_grey}
              producticonalt={product.icon_grey_alt}
              key={index}
            />
          </Grid>
        )
      )}
    </Grid>
  );
}


