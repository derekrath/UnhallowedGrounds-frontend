import * as React from "react";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import { useState, useContext } from "react";
// import { ProductContext } from "../ProductContext.js";
import "./ProductCard.css";
import {
  Card,
  CardContent,
  CardMedia,
  // CardActions,
  // IconButton,
  // styled,
  // Collapse,
  Typography,
  Box,
  Rating,
} from "@mui/material";

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
//   marginLeft: "auto",
//   transition: theme.transitions.create("transform", {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

export default function ProductCard({ product }) {
  // const [expanded, setExpanded] = useState(false);
  // const [value, setValue] = React.useState<number | null>(2);
  // let value = 1;

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  return (
    <Card
      variant="outlined"
      className="card"
      sx={{
        backgroundColor: "#121217",
        height: "500px",
        width: "250px",
        margin: "10px",
      }}
    >
      <CardMedia>
        <img
          src={product.icon_url}
          alt="missing img"
          style={{
            width: "250px",
            height: "250px",
          }}
        />
      </CardMedia>
      <CardContent>
        {/* set value */}
        {/* <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          /> */}
        <Rating name="Rating" value={product.rating} readOnly />
        <Typography component="legend" sx={{ color: "white" }}>
          {" "}
          {product.reviewsTotal} stars{" "}
        </Typography>
        {/* <Rating name="read-only" value={product.rating} readOnly /> */}
        {/* <Typography component="legend">Disabled</Typography>
          <Rating name="disabled" value={product.rating} disabled />
          <Typography component="legend">No rating given</Typography>
          <Rating name="no-value" value={null} />
          <Rating name="half-rating" defaultValue={2.5} precision={0.5} /> */}
        <Typography variant="h6" sx={{ color: "white" }}>
          {product.name}
        </Typography>
        <Typography variant="body1" sx={{ color: "white" }}>
          {product.description}
        </Typography>
        <Typography variant="body1" sx={{ color: "white" }}>
          {product.amount} oz
        </Typography>
        <Typography variant="subtitle1" sx={{ color: "#788188" }}>
          ${product.price}
        </Typography>
        <Box
          sx={{
            "& > legend": { mt: 2 },
          }}
        ></Box>
      </CardContent>
      {/* <CardActions disableSpacing className="action">
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          className="toggle"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography>{product.url}</Typography>
        </CardContent>
      </Collapse> */}
    </Card>
  );
}
