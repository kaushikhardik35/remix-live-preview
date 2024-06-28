// ./app/routes/_index.tsx

import { useLoaderData } from "@remix-run/react";
import type { SanityDocument } from "@sanity/client";

import Posts from "~/components/Posts";
import { useQuery } from "~/sanity/loader";
import { loadQuery } from "~/sanity/loader.server";
import { POSTS_QUERY } from "~/sanity/queries";

export const loader = async () => {
  const {data} = await loadQuery<SanityDocument[]>(POSTS_QUERY);

  return { data };
};

export default function Index() {
  const { data } = useLoaderData<typeof loader>();

  return <Posts posts={data} />;
}