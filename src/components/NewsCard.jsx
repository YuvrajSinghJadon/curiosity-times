import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ImgMediaCard(props) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-10px)", // Translate the box on hover by 4px
          boxShadow:
            "0 6px 12px rgba(0, 0, 0, 0.3), 0 8px 20px rgba(0, 0, 0, 0.35)", // Darker shadow on hover
        },
      }}
    >
      <CardMedia
        component="img"
        alt="article_img"
        height="140"
        image={props.image_url}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
