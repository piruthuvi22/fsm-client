import React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/style.css";
import { options, rotateElement } from "./rotateButtonElement";

const ImageGallery = () => (
  <Gallery
    withDownloadButton
    withCaption
    uiElements={rotateElement}
    options={options}
  >
    {[1, 2, 3, 4, 5, 6, 7].map((img, index) => (
      <Item
        cropped
        original={"https://picsum.photos/id/" + img + 6 + "/200"}
        thumbnail={"https://picsum.photos/id/" + img + 6 + "/200"}
        width="1024"
        height="768"
        caption="my-caption 2"
      >
        {({ ref, open }) => (
          <>
            <img
              ref={ref}
              onClick={open}
              className="img-fluid note-img"
              src={"https://picsum.photos/id/" + img + 6 + "/200"}
            />
          </>
        )}
      </Item>
    ))}
  </Gallery>
);
export default ImageGallery;
