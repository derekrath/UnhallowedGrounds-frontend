import * as React from "react";
import Grid from "@mui/material/Grid";
import ProductCard from "./ProductCard.js";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function SpacingGrid({ products }) {

  // const isSmallScreen = useMediaQuery("(max-width:590px)");

  // const [spacing, setSpacing] = React.useState(2);

  // const jsx = `<Grid container spacing={${spacing}}>`;

  //   return (
  //     <Grid sx={{ flexGrow: 1 }} container spacing={2}>
  //       <Grid item xs={12}>
  //         <Grid container justifyContent="center" spacing={2}>
  //           {allProducts
  //         .map((product, value) => (
  //             <Grid key={value} item>
  //               <ProductCard product={product} />
  //             </Grid>
  //           ))}
  //         </Grid>
  //       </Grid>
  //     </Grid>
  //   );
  // }

  return (
    <Grid
      container
      justifyContent="center"
      // alignItems= "center"
      // maxWidth="1200px"
      // spacing={{ xs: 2 }}
      // columns={{ xs: 4, sm: 4, md: 4, lg: 4}}
      // sx={{
      // flexGrow: 1,
      // display: "flex",
      // flexWrap: "wrap",
      // alignItems: "center",
      // justifyContent: "center",
      // flexBasis: "25%",
      // }}
      // sx={{
        // margin: "auto",
        // justifyContent: isSmallScreen ? "center" : "flex-start",
      // }}
      // spacing={2}
      // margin={5}
      // padding={0}
      // columns="auto"
    >
      {products.map((product, index) => (
        <Grid
          key={index}
          item
          // xs={3}
          // xs={8} sm={6} md={4} lg={3}
          // sx={{
          // flexBasis: "25%",
          // flex: "display:",
          // justifyContent: "center",
          // alignItems: "center"
          // }}
          // padding={5}
        >
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
}
