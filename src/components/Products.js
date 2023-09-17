// import "./Products.css";
import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import SpacingGrid from "./SpacingGrid.js";
import { useContext } from "react";
import { AppContext } from "../AppContext.js";
import backgroundImg from "../images/backgrounds/BGLight2.jpg"; // Import the image

const ProductsPageContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  // minHeight: "100vh",
  alignItems: "center",
  // justifyContent: "center",
  // height: "100vh",
  // width:"100%",
  // background: "#121217",
  // background: "black",
  backgroundImage: `url(${backgroundImg})`,
  backgroundSize: "100% auto",
  backgroundRepeat: "repeat-y",
  backgroundPosition: "top",
  // width: "100%"
  // background: 'linear-gradient(180deg, #202025 50%, #121217 50%)',
});

const ContentContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  maxWidth: "1200px",
  margin: 50,
});

const Footer = styled(Box)({
  height: "100px",
  // background: "black",
  backgroundColor: "black",
  // width: "100%"
  // background: 'linear-gradient(180deg, #202025 50%, #121217 50%)',
});

// const Title = styled(Typography)({
//   fontFamily: "Cinzel Decorative, serif",
//   fontSize: "4rem",
//   color: "#ffebcd",
//   marginBottom: "1rem",
// });

const Description = styled(Typography)({
  fontSize: "1.5rem",
  color: "#ffebcd", // Light Gray color
  // maxWidth: "500px",
  // textAlign: "center",
  marginBottom: "2rem",
});

function ProductsPage() {
  const { productList } = useContext(AppContext);

  let coffeeList = [
    {
      label: "",
      imgPath: "",
    },
  ];
  if (productList !== null) {
    coffeeList = productList;
  }

  return (
    <ProductsPageContainer>
      <ContentContainer>
        {/* <Title sx={{ display:"flex", justifyContent: "center"}}>Welcome to Unhallowed Grounds</Title> */}
        <Description>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        </Description>
        <br></br>
        <SpacingGrid products={coffeeList}/>
      </ContentContainer>
      <Footer />
    </ProductsPageContainer>
  );
}

export default ProductsPage;
