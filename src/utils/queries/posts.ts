import { postRepository } from "@/repositories/post";
import { unstable_cache } from "next/cache";
import { notFound } from "next/navigation";
import { cache } from "react";

export const findAllPublicPostsCached = unstable_cache(
  cache(async () => {
    await postRepository.findAllPublic();
  }),
  ["posts"],
  { tags: ["posts"], revalidate: 60 }
);

export const findPostsBySlugCached = (slug: string) => unstable_cache(cache(async (slug: string) => {
  const post = await postRepository
    .findBySlugPublic(slug)
    .catch(() => undefined);
  if (!post) notFound();
  return post;
}),
  ["posts"],
  { tags: [`post-${slug}`], revalidate: 60 }
)(slug);

export const findPostsByIdCached = cache(
  async (id: string) => await postRepository.findById(id)
);
