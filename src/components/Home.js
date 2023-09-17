import "./Home.css";
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import SpacingGrid from "./SpacingGrid.js";
import { useContext } from "react";
import { AppContext } from "../AppContext.js";
import bannerImage from "../images/banner.jpeg"; // Import the image
import backgroundImg from "../images/backgrounds/BGLight2.jpg"; // Import the image

const HomePageContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  // alignItems: "center",
  // justifyContent: "space-between",
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
  margin: "50px",
});

const Footer = styled(Box)({
  height: "100px",
  // width:"100vw",
  // background: "black",
  backgroundColor: "black",
  // width: "100%"
  // background: 'linear-gradient(180deg, #202025 50%, #121217 50%)',
});

const Banner = styled(Box)`
  background-image: url(${bannerImage});
  background-size: cover;
  width: 100vw;
  max-width: 100%;
  // height: 250px;
  background-position: 0 -100px;
  padding: 50px; // Adjust the padding as needed
  // color: white; // Set text color
  // text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled(Typography)({
  fontFamily: "Cinzel Decorative, serif",
  fontSize: "4rem",
  color: "#ffebcd",
  marginBottom: "1rem",
});

const Description = styled(Typography)({
  fontSize: "1.5rem",
  color: "#ffebcd", // Light Gray color
  // maxWidth: "500px",
  // textAlign: "center",
  marginBottom: "2rem",
});

const GetStartedButton = styled(Button)({
  backgroundColor: "#582f2f", // Saddle Brown color
  color: "#ffebcd", // Ivory color
  padding: "1rem 2rem",
  fontSize: "1.2rem",
  "&:hover": {
    backgroundColor: "#494a4b", // Change color on hover
  },
});

function HomePage() {
  const { promotionsList } = useContext(AppContext);

  let coffeeList = [
    {
      label: "",
      imgPath: "",
    },
  ];
  if (promotionsList !== null) {
    coffeeList = promotionsList;
  }

  const BodyText = styled(Typography)({
    fontSize: "1.5rem",
    color: "#ffebcd", // Light Gray color
    // maxWidth: "500px",
    // textAlign: "center",
    margin: 50,
    // marginBottom: "2rem",
  });

  return (
    <HomePageContainer>
      <ContentContainer>
        <Banner>
          <Title>Welcome to Unhallowed Grounds</Title>
          <Description>Discover your new obsession.</Description>
          <GetStartedButton variant="contained">Shop All</GetStartedButton>
        </Banner>
        <BodyText>New Roasts</BodyText>
        {/* <br></br> */}
        <SpacingGrid products={coffeeList} />
      </ContentContainer>
      <Footer />
    </HomePageContainer>
  );
}

export default HomePage;
