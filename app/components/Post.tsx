// ./components/Post.tsx

import PortableText from '@sanity/block-content-to-react';
import imageUrlBuilder from "@sanity/image-url";
import ImageComponent from './ImageComponent';
import type { SanityDocument } from "@sanity/client";
import { projectId, dataset } from "~/sanity/projectDetails";
import HeadingOne from './HeadingOne'; // Import HeadingOne component
import BlockComponent from './BlockComponent'; // Import BlockComponent

const serializers = {
  types: {
    image: ImageComponent, // Render "image" blocks using ImageComponent // Render "block" blocks using BlockComponent
    // Add other types as needed
  },
  marks: {
    // Add mark serializers if necessary
  },
  styles: {
    h1: HeadingOne, // Render <h1> elements using HeadingOne component
    // Add other styles as needed for <h2>, <h3>, etc.
  },
};

const builder = imageUrlBuilder({ projectId, dataset });

export default function Post({ post }: { post: SanityDocument }) {
  const { title, mainImage, body, author } = post; // Assuming 'author' is part of the SanityDocument structure
  console.log(body);
  return (
    <main className="relative">
      <style>
        {`
          h1, h2, h3, h4, h5, h6 {
            font-size: 2rem;
            font-weight: bold;
            margin-bottom: 10px;
            /* Other styles as needed */

          }
            a{
            color:blue;
            }
        `}
      </style>

      {mainImage && (
        <div className="relative h-96">
          <img
            className="absolute inset-0 object-cover w-full h-full rounded-lg"
            src={builder.image(mainImage).quality(80).url()}
            alt={title}
          />
          {title && (
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Render title as HeadingOne */}
              <HeadingOne>{title}</HeadingOne>
            </div>
          )}
        </div>
      )}

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {body && (
            <PortableText blocks={body} serializers={serializers} />
          )}
        </div>
      </div>

      {author && (
        <div className="container mx-auto px-4 py-4 flex items-center justify-center">
          {author.image && (
            <img
              className="w-12 h-12 rounded-full mr-4"
              src={builder.image(author.image).url()}
              alt={author.name}
            />
          )}
          <div>
            <p className="text-center text-gray-600">Written by {author.name}</p>
            {/* Add more details about the author here */}
          </div>
        </div>
      )}
    </main>
  );
}
