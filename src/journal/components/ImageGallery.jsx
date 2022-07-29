import { ImageList, ImageListItem } from "@mui/material";

export const ImageGallery = () => {
  return (
    <ImageList sx={{ width: '100%', height: 300 }} cols={3} rowHeight={200}>
      {itemData.map((item) => (
        <ImageListItem key={item.title}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

const itemData = [
  {
    img: "https://picsum.photos/200/200",
    title: "Breakfast",
  },
  {
    img: "https://picsum.photos/200/200",
    title: "Burger",
  },
  {
    img: "https://picsum.photos/200/200",
    title: "Camera",
  },
  {
    img: "https://picsum.photos/200/200",
    title: "Coffee",
  },
  {
    img: "https://picsum.photos/200/200",
    title: "Hats",
  },
  {
    img: "https://picsum.photos/200/200",
    title: "Honey",
  },
  {
    img: "https://picsum.photos/200/200",
    title: "Basketball",
  },
  {
    img: "https://picsum.photos/200/200",
    title: "Fern",
  },
  {
    img: "https://picsum.photos/200/200",
    title: "Mushrooms",
  },
  {
    img: "https://picsum.photos/200/200",
    title: "Tomato basil",
  },
  {
    img: "https://picsum.photos/200/200",
    title: "Sea star",
  },
  {
    img: "https://picsum.photos/200/200",
    title: "Bike",
  },
];
