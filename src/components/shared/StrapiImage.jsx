import React from "react";
import Image from "next/image";
import { getStrapiImage } from "../../lib/utils";

const StrapiImage = ({ image, alt, className = "", width, height }) => {
  if (!image) return null;

  const imageUrl = getStrapiImage(image);
  if (imageUrl) {
    return (
      <Image
        src={imageUrl}
        alt={
          alt
            ? alt
            : image.alternativeText
            ? image.alternativeText
            : "tratext image"
        }
        className={className}
        width={width || 800}
        height={height || 600}
      />
    );
  } else return "";
};

export default StrapiImage;
