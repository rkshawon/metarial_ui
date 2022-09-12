import React from "react";
import ImageGallery from "react-image-gallery";
import { images } from "../../../../../../dummyData";

export default function ProductImageGallery() {
  return (
    <div>
      <ImageGallery
        showPlayButton={false}
        indexSeparator="false"
        showNav={false}
        autoPlay={false}
        items={images}
      />
    </div>
  );
}
