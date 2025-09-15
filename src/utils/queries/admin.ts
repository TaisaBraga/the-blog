import { postRepository } from "@/repositories/post";
import { cache } from "react";

export const findPostsByIdAdmin = cache(
  async (id: string) => {
    return await postRepository.findById(id)
});

export const findAllPostsAdmin = cache(
  async () => {
    return await postRepository.findAll()
});