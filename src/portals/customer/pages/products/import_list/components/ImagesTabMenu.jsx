import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import DoneIcon from "@mui/icons-material/Done";

export default function ImagesTabMenu() {
  const [imageList, setImagelist] = React.useState([]);

  const selectImage = (item) => {
    if (!imageList.includes(item)) {
      setImagelist([...imageList, item]);
    } else {
      const index = imageList.indexOf(item);
      if (index > -1) {
        imageList.splice(index, 1);
        setImagelist([...imageList]);
      }
    }
  };
  return (
    <ImageList sx={{ width: "100%", height: "auto" }} cols={6}>
      {itemData.map((item) => (
        <ImageListItem
          key={item.img}
          onClick={() => selectImage(item)}
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: imageList.includes(item) && "black",
          }}
        >
          {imageList.includes(item) && (
            <DoneIcon
              sx={{
                color: "#fff",
                fontSize: "34px",
                fotntWeight: "600",
                position: "absolute",
              }}
            />
          )}
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
            style={{ opacity: imageList.includes(item) && ".5" }}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
  },
  {
    id: 7,
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    id: 8,
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    id: 9,
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
  },
  {
    id: 10,
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    id: 11,
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    id: 12,
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
  },
];
