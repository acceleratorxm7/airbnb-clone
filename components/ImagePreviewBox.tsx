import Image from "next/image";
import React from "react";

// assuming it has at least 6 photos
export const ImagePreviewBox: React.FC<{ images: string[] }> = ({ images }) => {
  // if (images.length < 5) return null;

  return (
    <div className="flex flex-row min-h-[350px] h-[50vh]">
      <figure className="flex-1 relative aspect-square">
        <Image
          alt="main image"
          src={images[0]}
          fill
          className="object-cover rounded-xl"
        />
      </figure>
      <div
        id="subImages"
        className="flex-1 hidden md:grid grid-cols-2 gap-2 pl-2"
      >
        <figure className="flex-1 relative">
          <Image
            alt="sub image 1"
            src={images[1]}
            fill
            className="object-cover rounded-xl"
          />
        </figure>
        <figure className="flex-1 relative">
          <Image
            alt="sub image 2"
            src={images[2]}
            fill
            className="object-cover rounded-xl"
          />
        </figure>
        <figure className="flex-1 relative">
          <Image
            alt="sub image 3"
            src={images[3]}
            fill
            className="object-cover rounded-xl"
          />
        </figure>
        <figure className="flex-1 relative">
          <Image
            alt="sub image 4"
            src={images[4]}
            fill
            className="object-cover rounded-xl"
          />
        </figure>
      </div>
    </div>
  );
};
