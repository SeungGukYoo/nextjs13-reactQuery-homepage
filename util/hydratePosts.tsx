import { getPosts } from "@/app/posts/getPosts";
import getQueryClient from "@/lib/getQueryClient";
import { Hydrate, dehydrate } from "@tanstack/react-query";
import React from "react";

async function HydratePosts() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["posts"], getPosts);
  const dehydratedState = dehydrate(queryClient);
  return <Hydrate state={dehydratedState}></Hydrate>;
}

export default HydratePosts;
