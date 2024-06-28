// ./app/components/Posts.tsx

import { Link } from "@remix-run/react";
import type { SanityDocument } from "@sanity/client";
import { projectId, dataset } from "~/sanity/projectDetails";

import imageUrlBuilder from "@sanity/image-url";
const builder = imageUrlBuilder({ projectId, dataset });

export default function Posts({ posts }: { posts: SanityDocument[] }) {
  return (
    <main className="container mx-auto grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-10">
      {posts?.length > 0 ? (
        posts.map((post) => (
          <Link
            key={post._id}
            to={post.slug.current}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 ease-in-out"
          >
            {post.mainImage && (
              <img
                src={builder.image(post.mainImage).quality(30).url()}
                alt={post.title}
                className="w-full h-44 object-cover"
              />
            )}
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>
              {post.author && (
                <p className="text-gray-600 mb-2">By {post.author.name}</p>
              )}
              <p className="text-gray-600">{post.excerpt}</p>
              {/* Additional post details or metadata can be added here */}
            </div>
          </Link>
        ))
      ) : (
        <div className="p-4 text-red-500">No posts found</div>
      )}
    </main>
  );
}
