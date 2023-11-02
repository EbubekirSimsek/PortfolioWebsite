import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Paragliding from "../../img/AboutImage.png";
import VW from "../../img/SimsekVW.jpg";
import Dinli from "../../img/Dinlimm2.jpg";
import Gonzi from "../../img/Gonzi.jpg";
import Sun from "../../img/Sun.jpg";
import BoatTour from "../../img/BoatTour.jpg";

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function CustomImageList() {
  return (
    <ImageList
      sx={{
        transform: "translateZ(0)",
      }}
      rowHeight={200}
      gap={1}
    >
      {itemData.map((item) => {
        const cols = item.featured ? 2 : 1;
        const rows = item.featured ? 2 : 1;

        const imageStyle = {
          maxWidth: "300px",
          maxHeight: "200px",
          border: "10px solid #393e46", // Add a border style
          boxShadow: "2px 2px 6px rgba(0, 0, 0, 0.2)", // Add a box shadow
        };

        return (
          <ImageListItem key={item.img} cols={cols} rows={rows}>
            <img
              {...srcset(item.img, 310, 200, rows, cols)}
              alt={item.title}
              loading="lazy"
              style={imageStyle}
            />
            <ImageListItemBar
              sx={{
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                  "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
              }}
              position="top"
              actionPosition="left"
            />
          </ImageListItem>
        );
      })}
    </ImageList>
  );
}

const itemData = [
  {
    img: VW,
  },
  {
    img: Dinli,
  },
  {
    img: Paragliding,
  },
  {
    img: Gonzi,
  },
  {
    img: Sun,
  },
  {
    img: BoatTour,
  },
];
