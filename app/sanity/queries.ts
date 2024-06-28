import groq from "groq"
export const POSTS_QUERY = groq`
  *[_type == "post" && defined(slug.current)] | order(_createdAt desc) {
    _id,
    title,
    slug,
    mainImage,
    excerpt,
    author-> {
      _id,
      name,
      // Add more author fields as needed
    }
  }
`;
export const POST_QUERY = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    mainImage,
    body,
    // Assuming 'author' is a reference or embedded object
    author->
  }
`;