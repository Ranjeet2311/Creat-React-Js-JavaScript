import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function SingleCard({ img, title, code, demo, id }) {
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardMedia component="img" alt="product" height="140" image={img} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {id}
        </Typography>

        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default SingleCard;
