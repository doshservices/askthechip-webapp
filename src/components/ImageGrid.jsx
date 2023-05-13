import React from "react";
import { Grid, Row } from "tailwindcss";

const ImageGrid = () => {
  const images = [
    {
      src: "https://via.placeholder.com/350x150",
    },
    {
      src: "https://via.placeholder.com/350x150",
    },
    {
      src: "https://via.placeholder.com/350x150",
    },
    {
      src: "https://via.placeholder.com/350x150",
    },
    {
      src: "https://via.placeholder.com/350x150",
    },
  ];

  return (
    <div>
      <Grid container max-width="100%">
        <Row flex-direction="column" grid-gap="10px">
          <Grid grid-template="1fr / 5fr" grid-gap="10px">
            {images.map((image) => (
              <img src={image.src} key={image.src} />
            ))}
          </Grid>
        </Row>
      </Grid>
    </div>
  );
};

export default ImageGrid;
