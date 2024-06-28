// ./app/routes/$slug.tsx

import type { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { SanityDocument } from "@sanity/client";

import Post from "~/components/Post";
import { useQuery } from "~/sanity/loader";
import { loadQuery } from "~/sanity/loader.server";
import { POST_QUERY } from "~/sanity/queries";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const {data} = await loadQuery<SanityDocument>(POST_QUERY, params)
  return { data };
};

export default function PostRoute() {
 
  const { data } = useLoaderData<typeof loader>();
  console.log(data);
  return <Post post={data} />;
}