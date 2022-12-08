import React from "react";
import ImageGallery from "react-image-gallery";

export const Gallery = () => {
  const images = [
    {
      original:
        "https://www.larpinn.co.uk/img/ybc_blog/post/DungeonsnDragonsBanner.jpg",
    },
    {
      original:
        "https://m.media-amazon.com/images/I/61-kvnnd6-L._AC_SL1245_.jpg",
    },
    {
      original:
        "https://m.media-amazon.com/images/I/71I7m1tG9YL._AC_SX679_.jpg",
    },
  ];
  return <ImageGallery items={images} autoPlay={true} />;
};
