import React from 'react';
import { projectId, dataset } from "~/sanity/projectDetails";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder({ projectId, dataset });

interface ImageComponentProps {
  node: {
    asset: {
      url: string;
      alt: string;
      // Add more fields as per your actual data structure
    };
    // Add more fields as per your actual data structure
  };
}

const ImageComponent: React.FC<ImageComponentProps> = ({ node }) => {
  const { url, alt } = node.asset; // Assuming your image data is stored under `asset`

  return (
    <div className="relative mb-5">
      <img
        className="rounded-lg w-full"
        src={builder.image(node).quality(80).url()}
        alt={alt}
      />
    </div>
  );
};

export default ImageComponent;